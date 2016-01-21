/**
 * Dependencies
 */

var Waterline = require('waterline'),
    _ = require('lodash');

var collection = {

  identity: 'collection1',
  connection: 'queryable',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  prepareRequest: function(clientOpts, requestUrl, collection, options, values, cb) {
    clientOpts.headers['X-My-Header'] = 'true';
    cb(null,clientOpts, requestUrl, collection, options, values);
  },

  attributes: {
    active: 'boolean',
    id: {
      primaryKey: true,
      type: 'serial'
    }
  }
};

module.exports = Waterline.Collection.extend(collection);
