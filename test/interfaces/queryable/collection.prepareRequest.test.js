var assert = require('assert'),
          _ = require('lodash');

describe('Update Interface', function() {

    describe('update', function() {
      it("should work", function(cb) {
        Queryable.Collection1.create().exec(function(err,item){
          assert(!err);
          cb();
        });
      });
    });
});
