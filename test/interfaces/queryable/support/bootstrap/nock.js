var nock = require('nock');

var api = nock('http://nock.me')

api.post('/collection1',{})
  .matchHeader('X-My-Header', /.*/)
  .reply(201, {'some_key':'some_value'});


