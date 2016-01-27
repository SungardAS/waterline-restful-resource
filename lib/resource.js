var _ = require('lodash'),
    _s = require('underscore.string'),
    restify = require('restify'),
    async = require('async'),
    url = require('url'),
    querystring = require('querystring'),
    query = require('./query');


var Resource = module.exports = function(config, collections) {

  // Hold Config values for each collection, this allows each collection
  // to define which file the data is synced to
  this.config = config || {};

  // Hold Collections
  this.collections = collections || {};

  this.baseUrl = _.extend({}, config.url);

  this.clientDefaults = {
    url: url.format(this.baseUrl),
    headers: config.headers || {},
    rejectUnauthorized: false
  };

  return this;
};

Resource.prototype.initialize = function(cb) {
  cb();
};

Resource.prototype.find = function(collection,options,waterlineCb) {
  this._createAndRunChain('find',collection,options,{},waterlineCb);
};

Resource.prototype.create = function(collection,values,waterlineCb) {
  this._createAndRunChain('create',collection,{},values,waterlineCb);
};

Resource.prototype.count = function(collection,options,waterlineCb) {
  this._createAndRunChain('count',collection,options,{},waterlineCb);
};

Resource.prototype._createAndRunChain = function(action,collection,options,values,waterlineCb) {
  var chain = this._createChain(action,collection,options,values);
  this._runChain(chain,waterlineCb);
};

Resource.prototype._createChain = function(action,collection,options,values) {
  var self = this,
      chain = [],
      startChain = function(cb) {
        cb(null,collection,options,values);
      },
      actionRequestMap = {
        "find": "get",
        "create": "post",
        "count": "head"
      };

  chain.push(startChain);
  chain.push(_.bind(_buildRequest,this));

  if (this.config['prepare'+_s.capitalize(action)])
    chain.push(this.config['prepare'+_s.capitalize(action)]);

  if (this.collections[collection]['prepare'+_s.capitalize(action)])
    chain.push(this.collections[collection]['prepare'+_s.capitalize(action)]);

  if (this.collections[collection].prepareRequest)
    chain.push(this.collections[collection].prepareRequest);

  if (this.config.prepareRequest)
    chain.push(this.config.prepareRequest);


  var requestType = actionRequestMap[action];

  switch(requestType) {
  case 'get':
    chain.push(function(clientOpts,requestPath,collection,options,values,cb) {
      var client = restify.createJsonClient(clientOpts);
      client.get(url.format(requestPath), function (err, req, res, obj) {
        cb(err,req,res,obj);
      });
    });
    break;
  case 'post':
    chain.push(function(clientOpts,requestPath,collection,options,values,cb) {
      var client = restify.createJsonClient(clientOpts);
      client.post(url.format(requestPath), values, function (err, req, res, obj) {
        if (err) return cb(err,req,res,obj);
        query.inflate(self.collections[collection],obj,function(err,inflatedObj) {
          cb(err,req,res,inflatedObj);
        });
      });
    });
    break;
  case 'head':
    chain.push(function(clientOpts,requestPath,collection,options,values,cb) {
      var client = restify.createJsonClient(clientOpts);
      client.head(url.format(requestPath), function (err, req, res, obj) {
        cb(err,req,res,obj);
      });
    });
    break;
  }

  if (this.config.processResponse)
    chain.push(this.config.processResponse);

  if (this.config['process'+_s.capitalize(action)])
    chain.push(this.config['process'+_s.capitalize(action)]);

  return chain;
};

Resource.prototype._runChain = function(chain,waterlineCb) {
  async.waterfall(chain,function(err,req,res,obj) {
    waterlineCb(err,obj);
  });
};

var _buildRequest = function(collection,options,values,cb) {

  var requestPath = _.extend({},this.baseUrl);
  requestPath.protocol=null;
  requestPath.host=null;
  requestPath.hostname=null;
  requestPath.pathname = requestPath.pathname + '/' + collection;

  if (options && options.where) {
    requestPath.query = options.where;
  }

  var clientOpts = _.clone(this.clientDefaults,true);

  cb(null,clientOpts,requestPath,collection,options,values);
};
