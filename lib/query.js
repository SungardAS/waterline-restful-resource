var moment = require('moment');
var _ = require('lodash');

module.exports.inflate = function(collection,values,cb) {
  var _values = _.clone(values);

  Object.keys(values).forEach(function(key) {

    if (_.isObject(_values[key]) && _.isEmpty(_values[key])) {
        _values[key] = null;
        return;
    }

    if(!collection._schema.schema[key]) return;

    // Lookup schema type
    var type = collection._schema.schema[key].type;
    if(!type) return;

    switch(type) {
      case 'date':
      case 'time':
      case 'datetime':
        mDate = moment.utc(values[key]);
        if (mDate.isValid())
          _values[key] = mDate.toDate();
        break;

      case 'boolean':
        var val = values[key];
        if(val === 0 || val === 'false') _values[key] = false;
        if(val === 1 || val === 'true') _values[key] = true;
        break;
    }

  });

  if (_.isFunction(cb)) {
    cb(null,_values);
  }
  else {
    return _values;
  }
};

