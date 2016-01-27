var nock = require('nock');

nock('http://nock.me:80', {"encodedQueryParams":true})
  .post('/userTable', {"first_name":"Foo","favoriteFruit":"blueberry","status":false,"createdAt":/.+/,"updatedAt":/.+/})
  .reply(201, function(uri, requestBody) {
    requestBody.id = 1;
    return requestBody;
  });

nock('http://nock.me:80', {"encodedQueryParams":true})
  .post('/userTable', {"first_name":"FooBar","favoriteFruit":"blueberry","status":false,"createdAt":/.+/,"updatedAt":/.+/})
  .reply(201, function(uri, requestBody) {
    requestBody.id = 2;
    return requestBody;
  });

nock('http://nock.me:80', {"encodedQueryParams":true})
  .post('/userTable', {"first_name":"Foo","last_name":"Bar","favoriteFruit":"blueberry","status":false,"createdAt":/.+/,"updatedAt":/.+/})
  .reply(201, function(uri, requestBody) {
    requestBody.id = 3;
    return requestBody;
  });

nock('http://nock.me:80', {"encodedQueryParams":true})
  .post('/userTable', {"first_name":"Foo","last_name":"Bar","favoriteFruit":"blueberry","status":false,"createdAt":/.+/,"updatedAt":/.+/})
  .reply(201, function(uri, requestBody) {
    requestBody.id = 4;
    return requestBody;
  });

nock('http://nock.me:80', {"encodedQueryParams":true})
  .post('/userTable', {"first_name":"Yezy","last_name":null,"favoriteFruit":"blueberry","status":false,"createdAt":/.+/,"updatedAt":/.+/})
  .reply(201, function(uri, requestBody) {
    requestBody.id = 5;
    return requestBody;
  });

for(var i=0;i<30;i=i+1) {
  nock('http://nock.me:80', {"encodedQueryParams":true})
    .post('/userTable', {"first_name":"test_"+i,"type":".create() with a list, returning values","favoriteFruit":"blueberry","status":false,"createdAt":/.+/,"updatedAt":/.+/})
    .reply(201, function(uri, requestBody) {
      return requestBody;
    });
 }


for(var i=0;i<4;i=i+1) {
  nock('http://nock.me:80', {"encodedQueryParams":true})
    .post('/userTable', {"first_name":"test_"+i,"type":".create() test create a list","favoriteFruit":"blueberry","status":false,"createdAt":/.+/,"updatedAt":/.+/})
    .reply(201, function(uri, requestBody) {
      return requestBody;
    });
}

nock('http://nock.me:80', {"encodedQueryParams":true})
  .get('/userTable')
  .query({"type":".create() test create a list"})
  .reply(200, [
    {id: 1, first_name: "test_0"},
    {id: 2, first_name: "test_1"},
    {id: 3, first_name: "test_2"},
    {id: 4, first_name: "test_3"}
  ]);



nock('http://nock.me:80', {"encodedQueryParams":true})
  .post('/userTable', {"first_name":"createEach_1","type":"createEach","favoriteFruit":"blueberry","status":false,"createdAt":/.+/,"updatedAt":/.+/})
  .reply(201, function(uri, requestBody) {
    requestBody.id = 1
    return requestBody;
  });

nock('http://nock.me:80', {"encodedQueryParams":true})
  .post('/userTable', {"first_name":"createEach_2","type":"createEach","favoriteFruit":"blueberry","status":false,"createdAt":/.+/,"updatedAt":/.+/})
  .reply(201, function(uri, requestBody) {
    requestBody.id = 2
    return requestBody;
  });

nock('http://nock.me:80', {"encodedQueryParams":true})
  .post('/userTable', {"first_name":"createEach_3","type":"createEach","favoriteFruit":"blueberry","status":false,"createdAt":/.+/,"updatedAt":/.+/})
  .reply(201, function(uri, requestBody) {
    requestBody.id = 3
    return requestBody;
  });

nock('http://nock.me:80', {"encodedQueryParams":true})
  .post('/userTable', {"first_name":"createEach_4","type":"createEach","favoriteFruit":"blueberry","status":false,"createdAt":/.+/,"updatedAt":/.+/})
  .reply(201, function(uri, requestBody) {
    requestBody.id = 4
    return requestBody;
  });

nock('http://nock.me:80', {"encodedQueryParams":true})
  .get('/userTable')
  .query({"type":"createEach"})
  .reply(200, [
    {id: 1, first_name: "test_0"},
    {id: 2, first_name: "test_1"},
  ]);


//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"Destroy","last_name":"Test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:02.086Z","updatedAt":"2016-01-27T00:41:02.086Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:39 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:39 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:39 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"Destroy","last_name":"Test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:02.291Z","updatedAt":"2016-01-27T00:41:02.291Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:39 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:39 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:39 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"dummy_test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:02.849Z","updatedAt":"2016-01-27T00:41:02.849Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:40 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"dummy_test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:02.849Z","updatedAt":"2016-01-27T00:41:02.849Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:40 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"dummy_test_in","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.032Z","updatedAt":"2016-01-27T00:41:03.032Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:40 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"find_user2","type":"find test","age":20,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.220Z","updatedAt":"2016-01-27T00:41:03.220Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:40 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"find_user8","type":"find test","age":80,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.222Z","updatedAt":"2016-01-27T00:41:03.222Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:40 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"find_user5","type":"find test","age":50,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.221Z","updatedAt":"2016-01-27T00:41:03.221Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:40 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"dummy_test_in","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.033Z","updatedAt":"2016-01-27T00:41:03.033Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:40 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"find_user1","type":"find test","age":10,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.220Z","updatedAt":"2016-01-27T00:41:03.220Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:41 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"find_user7","type":"find test","age":70,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.222Z","updatedAt":"2016-01-27T00:41:03.222Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:41 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"find_user4","type":"find test","age":40,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.221Z","updatedAt":"2016-01-27T00:41:03.221Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:41 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"findOne test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.397Z","updatedAt":"2016-01-27T00:41:03.397Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:41 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"dummy_test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:02.843Z","updatedAt":"2016-01-27T00:41:02.843Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:40 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:40 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"dummy_test_in","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.032Z","updatedAt":"2016-01-27T00:41:03.032Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:41 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"find_user3","type":"find test","age":30,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.221Z","updatedAt":"2016-01-27T00:41:03.221Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:41 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"find_user6","type":"find test","age":60,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.221Z","updatedAt":"2016-01-27T00:41:03.221Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:41 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"find_user9","type":"find test","age":90,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.222Z","updatedAt":"2016-01-27T00:41:03.222Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:41 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"find_user0","type":"find test","age":0,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:03.220Z","updatedAt":"2016-01-27T00:41:03.220Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:41 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:41 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.get('/userTable')
  //.query({"first_name":"findOrCreate()"})
  //.reply(200, "<html><head><meta http-equiv=\"refresh\" content=\"0;url=http://ww2.nock.me/?folio=7POYGN0G2\" /><META HTTP-EQUIV=\"CACHE-CONTROL\" CONTENT=\"NO-CACHE,NO_STORE\"><META HTTP-EQUIV=\"PRAGMA\" CONTENT=\"NO-CACHE\"/>\n\t\t\t<META HTTP-EQUIV=\"EXPIRES\" CONTENT=\"Mon, 22 Jul 2002 11:12:01 GMT\"/></head><body onbeforeunload=\"\" onunload=\"\"><script language='javascript' type='text/javascript'>try\n\t\t\t\t{\n\t\t\t\t    var rurl = 'http://ww2.nock.me/?folio=7POYGN0G2'\n\t\t\t\t\twindow.top.location.replace(rurl);\n\t\t\t\t} catch(exception) {\n\t\t\t\t\tdocument.write(\"This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.\");\n\t\t\t\t}</script><noscript>This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.</noscript></body></html>", { date: 'Wed, 27 Jan 2016 00:40:42 GMT',
  //server: 'Apache',
  //'set-cookie': [ 'vsid=921vr2014008421511556; expires=Mon, 25-Jan-2021 00:40:42 GMT; path=/; domain=nock.me; httponly' ],
  //expires: 'Mon, 22 Jul 2002 11:12:01 GMT',
  //'cache-control': 'private, no-cache',
  //pragma: 'no-cache',
  //vary: 'Accept-Encoding,User-Agent',
  //'content-length': '762',
  //'content-type': 'text/html; charset=UTF-8',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'keep-alive' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.get('/userTable')
  //.query({"first_name":"findOrCreate()"})
  //.reply(200, "<html><head><meta http-equiv=\"refresh\" content=\"0;url=http://ww2.nock.me/?folio=7POYGN0G2\" /><META HTTP-EQUIV=\"CACHE-CONTROL\" CONTENT=\"NO-CACHE,NO_STORE\"><META HTTP-EQUIV=\"PRAGMA\" CONTENT=\"NO-CACHE\"/>\n\t\t\t<META HTTP-EQUIV=\"EXPIRES\" CONTENT=\"Mon, 22 Jul 2002 11:12:01 GMT\"/></head><body onbeforeunload=\"\" onunload=\"\"><script language='javascript' type='text/javascript'>try\n\t\t\t\t{\n\t\t\t\t    var rurl = 'http://ww2.nock.me/?folio=7POYGN0G2'\n\t\t\t\t\twindow.top.location.replace(rurl);\n\t\t\t\t} catch(exception) {\n\t\t\t\t\tdocument.write(\"This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.\");\n\t\t\t\t}</script><noscript>This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.</noscript></body></html>", { date: 'Wed, 27 Jan 2016 00:40:43 GMT',
  //server: 'Apache',
  //'set-cookie': [ 'vsid=911vr2014008431031584; expires=Mon, 25-Jan-2021 00:40:43 GMT; path=/; domain=nock.me; httponly' ],
  //expires: 'Mon, 22 Jul 2002 11:12:01 GMT',
  //'cache-control': 'private, no-cache',
  //pragma: 'no-cache',
  //vary: 'Accept-Encoding,User-Agent',
  //'content-length': '762',
  //'content-type': 'text/html; charset=UTF-8',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'keep-alive' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"test_12","type":".create() with a list, returning values","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:40:59.792Z","updatedAt":"2016-01-27T00:40:59.792Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:44 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:44 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:44 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"test_29","type":".create() with a list, returning values","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:40:59.794Z","updatedAt":"2016-01-27T00:40:59.794Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:44 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:44 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:44 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.get('/userTable')
  //.query({"first_name":"findOrCreate()"})
  //.reply(200, "<html><head><meta http-equiv=\"refresh\" content=\"0;url=http://ww2.nock.me/?folio=7POYGN0G2\" /><META HTTP-EQUIV=\"CACHE-CONTROL\" CONTENT=\"NO-CACHE,NO_STORE\"><META HTTP-EQUIV=\"PRAGMA\" CONTENT=\"NO-CACHE\"/>\n\t\t\t<META HTTP-EQUIV=\"EXPIRES\" CONTENT=\"Mon, 22 Jul 2002 11:12:01 GMT\"/></head><body onbeforeunload=\"\" onunload=\"\"><script language='javascript' type='text/javascript'>try\n\t\t\t\t{\n\t\t\t\t    var rurl = 'http://ww2.nock.me/?folio=7POYGN0G2'\n\t\t\t\t\twindow.top.location.replace(rurl);\n\t\t\t\t} catch(exception) {\n\t\t\t\t\tdocument.write(\"This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.\");\n\t\t\t\t}</script><noscript>This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.</noscript></body></html>", { date: 'Wed, 27 Jan 2016 00:40:44 GMT',
  //server: 'Apache',
  //'set-cookie': [ 'vsid=907vr2014008445226566; expires=Mon, 25-Jan-2021 00:40:44 GMT; path=/; domain=nock.me; httponly' ],
  //expires: 'Mon, 22 Jul 2002 11:12:01 GMT',
  //'cache-control': 'private, no-cache',
  //pragma: 'no-cache',
  //vary: 'Accept-Encoding,User-Agent',
  //'content-length': '762',
  //'content-type': 'text/html; charset=UTF-8',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'keep-alive' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"test_2","type":".create() test create a list","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:40:59.982Z","updatedAt":"2016-01-27T00:40:59.982Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:44 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:44 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:44 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.get('/userTable')
  //.query({"first_name":"model%20findOrCreate()"})
  //.reply(200, "<html><head><meta http-equiv=\"refresh\" content=\"0;url=http://ww2.nock.me/?folio=7POYGN0G2\" /><META HTTP-EQUIV=\"CACHE-CONTROL\" CONTENT=\"NO-CACHE,NO_STORE\"><META HTTP-EQUIV=\"PRAGMA\" CONTENT=\"NO-CACHE\"/>\n\t\t\t<META HTTP-EQUIV=\"EXPIRES\" CONTENT=\"Mon, 22 Jul 2002 11:12:01 GMT\"/></head><body onbeforeunload=\"\" onunload=\"\"><script language='javascript' type='text/javascript'>try\n\t\t\t\t{\n\t\t\t\t    var rurl = 'http://ww2.nock.me/?folio=7POYGN0G2'\n\t\t\t\t\twindow.top.location.replace(rurl);\n\t\t\t\t} catch(exception) {\n\t\t\t\t\tdocument.write(\"This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.\");\n\t\t\t\t}</script><noscript>This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.</noscript></body></html>", { date: 'Wed, 27 Jan 2016 00:40:44 GMT',
  //server: 'Apache',
  //'set-cookie': [ 'vsid=919vr2014008447719827; expires=Mon, 25-Jan-2021 00:40:44 GMT; path=/; domain=nock.me; httponly' ],
  //expires: 'Mon, 22 Jul 2002 11:12:01 GMT',
  //'cache-control': 'private, no-cache',
  //pragma: 'no-cache',
  //vary: 'Accept-Encoding,User-Agent',
  //'content-length': '762',
  //'content-type': 'text/html; charset=UTF-8',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'keep-alive' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"test_0","type":".create() with a list, returning values","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:40:59.790Z","updatedAt":"2016-01-27T00:40:59.790Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:45 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:45 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:45 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"test_21","type":".create() with a list, returning values","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:40:59.793Z","updatedAt":"2016-01-27T00:40:59.793Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:45 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:45 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:45 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });


//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.get('/userTable')
  //.query({"first_name":"findOrCreate()","last_name":"search%20criteria"})
  //.reply(200, "<html><head><meta http-equiv=\"refresh\" content=\"0;url=http://ww2.nock.me/?folio=7POYGN0G2\" /><META HTTP-EQUIV=\"CACHE-CONTROL\" CONTENT=\"NO-CACHE,NO_STORE\"><META HTTP-EQUIV=\"PRAGMA\" CONTENT=\"NO-CACHE\"/>\n\t\t\t<META HTTP-EQUIV=\"EXPIRES\" CONTENT=\"Mon, 22 Jul 2002 11:12:01 GMT\"/></head><body onbeforeunload=\"\" onunload=\"\"><script language='javascript' type='text/javascript'>try\n\t\t\t\t{\n\t\t\t\t    var rurl = 'http://ww2.nock.me/?folio=7POYGN0G2'\n\t\t\t\t\twindow.top.location.replace(rurl);\n\t\t\t\t} catch(exception) {\n\t\t\t\t\tdocument.write(\"This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.\");\n\t\t\t\t}</script><noscript>This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.</noscript></body></html>", { date: 'Wed, 27 Jan 2016 00:40:45 GMT',
  //server: 'Apache',
  //'set-cookie': [ 'vsid=914vr2014008453712545; expires=Mon, 25-Jan-2021 00:40:45 GMT; path=/; domain=nock.me; httponly' ],
  //expires: 'Mon, 22 Jul 2002 11:12:01 GMT',
  //'cache-control': 'private, no-cache',
  //pragma: 'no-cache',
  //vary: 'Accept-Encoding,User-Agent',
  //'content-length': '762',
  //'content-type': 'text/html; charset=UTF-8',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'keep-alive' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.get('/userTable')
  //.query({"first_name":"findOrCreate()","last_name":"array"})
  //.reply(200, "<html><head><meta http-equiv=\"refresh\" content=\"0;url=http://ww2.nock.me/?folio=7POYGN0G2\" /><META HTTP-EQUIV=\"CACHE-CONTROL\" CONTENT=\"NO-CACHE,NO_STORE\"><META HTTP-EQUIV=\"PRAGMA\" CONTENT=\"NO-CACHE\"/>\n\t\t\t<META HTTP-EQUIV=\"EXPIRES\" CONTENT=\"Mon, 22 Jul 2002 11:12:01 GMT\"/></head><body onbeforeunload=\"\" onunload=\"\"><script language='javascript' type='text/javascript'>try\n\t\t\t\t{\n\t\t\t\t    var rurl = 'http://ww2.nock.me/?folio=7POYGN0G2'\n\t\t\t\t\twindow.top.location.replace(rurl);\n\t\t\t\t} catch(exception) {\n\t\t\t\t\tdocument.write(\"This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.\");\n\t\t\t\t}</script><noscript>This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.</noscript></body></html>", { date: 'Wed, 27 Jan 2016 00:40:46 GMT',
  //server: 'Apache',
  //'set-cookie': [ 'vsid=922vr2014008462107061; expires=Mon, 25-Jan-2021 00:40:46 GMT; path=/; domain=nock.me; httponly' ],
  //expires: 'Mon, 22 Jul 2002 11:12:01 GMT',
  //'cache-control': 'private, no-cache',
  //pragma: 'no-cache',
  //vary: 'Accept-Encoding,User-Agent',
  //'content-length': '762',
  //'content-type': 'text/html; charset=UTF-8',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'keep-alive' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.get('/userTable')
  //.query({"first_name":"Mark","last_name":"Vegetables"})
  //.reply(200, "<html><head><meta http-equiv=\"refresh\" content=\"0;url=http://ww2.nock.me/?folio=7POYGN0G2\" /><META HTTP-EQUIV=\"CACHE-CONTROL\" CONTENT=\"NO-CACHE,NO_STORE\"><META HTTP-EQUIV=\"PRAGMA\" CONTENT=\"NO-CACHE\"/>\n\t\t\t<META HTTP-EQUIV=\"EXPIRES\" CONTENT=\"Mon, 22 Jul 2002 11:12:01 GMT\"/></head><body onbeforeunload=\"\" onunload=\"\"><script language='javascript' type='text/javascript'>try\n\t\t\t\t{\n\t\t\t\t    var rurl = 'http://ww2.nock.me/?folio=7POYGN0G2'\n\t\t\t\t\twindow.top.location.replace(rurl);\n\t\t\t\t} catch(exception) {\n\t\t\t\t\tdocument.write(\"This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.\");\n\t\t\t\t}</script><noscript>This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.</noscript></body></html>", { date: 'Wed, 27 Jan 2016 00:40:46 GMT',
  //server: 'Apache',
  //'set-cookie': [ 'vsid=902vr2014008465203076; expires=Mon, 25-Jan-2021 00:40:46 GMT; path=/; domain=nock.me; httponly' ],
  //expires: 'Mon, 22 Jul 2002 11:12:01 GMT',
  //'cache-control': 'private, no-cache',
  //pragma: 'no-cache',
  //vary: 'Accept-Encoding,User-Agent',
  //'content-length': '762',
  //'content-type': 'text/html; charset=UTF-8',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'keep-alive' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"findOrCreate_0","type":"findOrCreateEach([])","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:09.208Z","updatedAt":"2016-01-27T00:41:09.208Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:46 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:46 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:46 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"findOrCreate_3","type":"findOrCreateEach([])","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:09.208Z","updatedAt":"2016-01-27T00:41:09.208Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:46 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:46 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:46 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:09.381Z","updatedAt":"2016-01-27T00:41:09.381Z","arrList":[0,1,2,3]})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:46 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:46 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:46 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"avatar":{"type":"Buffer","data":[116,101,115,116,32,116,104,101,32,116,104,105,110,103,115]},"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:09.549Z","updatedAt":"2016-01-27T00:41:09.549Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:47 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:47 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:47 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"findOrCreate_2","type":"findOrCreateEach([])","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:09.208Z","updatedAt":"2016-01-27T00:41:09.208Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:47 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:47 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:47 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"status":true,"favoriteFruit":"blueberry","createdAt":"2016-01-27T00:41:09.754Z","updatedAt":"2016-01-27T00:41:09.754Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:47 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:47 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:47 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"dob":"2016-01-27T00:41:10.506Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:10.508Z","updatedAt":"2016-01-27T00:41:10.508Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:48 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:48 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:48 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"findOrCreate_1","type":"findOrCreateEach([])","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:09.208Z","updatedAt":"2016-01-27T00:41:09.208Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:47 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:47 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:47 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"percent":0.001,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:10.702Z","updatedAt":"2016-01-27T00:41:10.702Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:48 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:48 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:48 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"age":27,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:10.874Z","updatedAt":"2016-01-27T00:41:10.874Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:48 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:48 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:48 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"obj":{"foo":"bar"},"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:11.243Z","updatedAt":"2016-01-27T00:41:11.243Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:49 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:49 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:49 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"Foo","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:11.916Z","updatedAt":"2016-01-27T00:41:11.916Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:49 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:49 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:49 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"thetest","type":"case sensitivity","age":11,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:13.079Z","updatedAt":"2016-01-27T00:41:13.079Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:50 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:50 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:50 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"tHeOtherTest","type":"case sensitivity","age":13,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:13.079Z","updatedAt":"2016-01-27T00:41:13.079Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:51 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:51 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:51 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"tHeTest","type":"case sensitivity","age":10,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:13.079Z","updatedAt":"2016-01-27T00:41:13.079Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:51 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:51 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:51 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"zz zzbjfk test_findLike2../haer-h","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:13.266Z","updatedAt":"2016-01-27T00:41:13.266Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:51 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:51 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:51 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"asdgah4 test_findOneLike asg","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.295Z","updatedAt":"2016-01-27T00:41:14.295Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:51 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:51 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:51 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"average_user7","type":"average test","age":7,"percent":3.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.607Z","updatedAt":"2016-01-27T00:41:14.607Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"average_user3","type":"average test","age":3,"percent":1.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.607Z","updatedAt":"2016-01-27T00:41:14.607Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"average_user1","type":"average test","age":1,"percent":0.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.606Z","updatedAt":"2016-01-27T00:41:14.606Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"average_user5","type":"average test","age":5,"percent":2.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.607Z","updatedAt":"2016-01-27T00:41:14.607Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"average_user9","type":"average test","age":9,"percent":4.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.608Z","updatedAt":"2016-01-27T00:41:14.608Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"short_xx3ah4aj8xrxh!!!r contains query test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.808Z","updatedAt":"2016-01-27T00:41:14.808Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"long_xx3ah4aj8xrxh!!!r contains query test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.989Z","updatedAt":"2016-01-27T00:41:14.989Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"type":"Dynamic Contains testxxxtest","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:15.181Z","updatedAt":"2016-01-27T00:41:15.181Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"THETEST","type":"case sensitivity","age":12,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:13.079Z","updatedAt":"2016-01-27T00:41:13.079Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"average_user6","type":"average test","age":6,"percent":3,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.607Z","updatedAt":"2016-01-27T00:41:14.607Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"average_user2","type":"average test","age":2,"percent":1,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.606Z","updatedAt":"2016-01-27T00:41:14.606Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"test_8","type":".create() with a list, returning values","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:40:59.791Z","updatedAt":"2016-01-27T00:40:59.791Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:37 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:37 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:37 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"test_17","type":".create() with a list, returning values","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:40:59.792Z","updatedAt":"2016-01-27T00:40:59.792Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:37 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:37 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:37 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"test_4","type":".create() with a list, returning values","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:40:59.791Z","updatedAt":"2016-01-27T00:40:59.791Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:37 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:37 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:37 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"endsWith query test xxj8xa4hPFDH_short","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:15.366Z","updatedAt":"2016-01-27T00:41:15.366Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:53 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:53 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:53 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"endsWith query test xxj8xa4hPFDH_long","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:16.462Z","updatedAt":"2016-01-27T00:41:16.462Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:54 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:54 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:54 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"zz 340ajsdha test_findLike -- aw40gasdha","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:13.266Z","updatedAt":"2016-01-27T00:41:13.266Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"average_user4","type":"average test","age":4,"percent":2,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.607Z","updatedAt":"2016-01-27T00:41:14.607Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"average_user8","type":"average test","age":8,"percent":4,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.607Z","updatedAt":"2016-01-27T00:41:14.607Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"type":"Dynamic EndsWith testxxj8xrxh!!!r","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:17.017Z","updatedAt":"2016-01-27T00:41:17.017Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:54 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:54 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:54 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan test","age":40,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.792Z","updatedAt":"2016-01-27T00:41:21.792Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan test","age":41,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.792Z","updatedAt":"2016-01-27T00:41:21.792Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan test","age":42,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.792Z","updatedAt":"2016-01-27T00:41:21.792Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan_dates_user3","type":"greaterThan dates test","dob":"2013-11-04T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.965Z","updatedAt":"2016-01-27T00:41:21.965Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan_dates_user8","type":"greaterThan dates test","dob":"2013-11-09T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.966Z","updatedAt":"2016-01-27T00:41:21.966Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan_dates_user6","type":"greaterThan dates test","dob":"2013-11-07T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.966Z","updatedAt":"2016-01-27T00:41:21.966Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan_dates_user1","type":"greaterThan dates test","dob":"2013-11-02T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.965Z","updatedAt":"2016-01-27T00:41:21.965Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan_dates_user9","type":"greaterThan dates test","dob":"2013-11-10T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.966Z","updatedAt":"2016-01-27T00:41:21.966Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan_dates_user4","type":"greaterThan dates test","dob":"2013-11-05T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.965Z","updatedAt":"2016-01-27T00:41:21.965Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"1 greaterThan_strings_user","type":"greaterThan strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.157Z","updatedAt":"2016-01-27T00:41:22.157Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"6 greaterThan_strings_user","type":"greaterThan strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.158Z","updatedAt":"2016-01-27T00:41:22.158Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"9 greaterThan_strings_user","type":"greaterThan strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.159Z","updatedAt":"2016-01-27T00:41:22.159Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"4 greaterThan_strings_user","type":"greaterThan strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.158Z","updatedAt":"2016-01-27T00:41:22.158Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"0 greaterThan_strings_user","type":"greaterThan strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.157Z","updatedAt":"2016-01-27T00:41:22.157Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"7 greaterThan_strings_user","type":"greaterThan strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.158Z","updatedAt":"2016-01-27T00:41:22.158Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"2 greaterThan_strings_user","type":"greaterThan strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.158Z","updatedAt":"2016-01-27T00:41:22.158Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan_dates_user7","type":"greaterThan dates test","dob":"2013-11-08T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.966Z","updatedAt":"2016-01-27T00:41:21.966Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan_dates_user2","type":"greaterThan dates test","dob":"2013-11-03T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.965Z","updatedAt":"2016-01-27T00:41:21.965Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual test","age":41,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.413Z","updatedAt":"2016-01-27T00:41:22.413Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual test","age":42,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.413Z","updatedAt":"2016-01-27T00:41:22.413Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"5 greaterThan_strings_user","type":"greaterThan strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.158Z","updatedAt":"2016-01-27T00:41:22.158Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual_dates_user3","type":"greaterThanOrEqual dates test","dob":"2013-11-04T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.605Z","updatedAt":"2016-01-27T00:41:22.605Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual_dates_user8","type":"greaterThanOrEqual dates test","dob":"2013-11-09T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.605Z","updatedAt":"2016-01-27T00:41:22.605Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual_dates_user6","type":"greaterThanOrEqual dates test","dob":"2013-11-07T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.605Z","updatedAt":"2016-01-27T00:41:22.605Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual_dates_user1","type":"greaterThanOrEqual dates test","dob":"2013-11-02T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.604Z","updatedAt":"2016-01-27T00:41:22.604Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual_dates_user9","type":"greaterThanOrEqual dates test","dob":"2013-11-10T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.605Z","updatedAt":"2016-01-27T00:41:22.605Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual_dates_user4","type":"greaterThanOrEqual dates test","dob":"2013-11-05T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.605Z","updatedAt":"2016-01-27T00:41:22.605Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual test","age":40,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.412Z","updatedAt":"2016-01-27T00:41:22.412Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"1 greaterThanOrEqual_strings_user","type":"greaterThanOrEqual strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.877Z","updatedAt":"2016-01-27T00:41:22.877Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"6 greaterThanOrEqual_strings_user","type":"greaterThanOrEqual strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.877Z","updatedAt":"2016-01-27T00:41:22.877Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual_dates_user7","type":"greaterThanOrEqual dates test","dob":"2013-11-08T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.605Z","updatedAt":"2016-01-27T00:41:22.605Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual_dates_user2","type":"greaterThanOrEqual dates test","dob":"2013-11-03T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.605Z","updatedAt":"2016-01-27T00:41:22.605Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"8 greaterThanOrEqual_strings_user","type":"greaterThanOrEqual strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.877Z","updatedAt":"2016-01-27T00:41:22.877Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"4 greaterThanOrEqual_strings_user","type":"greaterThanOrEqual strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.877Z","updatedAt":"2016-01-27T00:41:22.877Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"3 greaterThanOrEqual_strings_user","type":"greaterThanOrEqual strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.877Z","updatedAt":"2016-01-27T00:41:22.877Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"9 greaterThanOrEqual_strings_user","type":"greaterThanOrEqual strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.878Z","updatedAt":"2016-01-27T00:41:22.878Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"2 greaterThanOrEqual_strings_user","type":"greaterThanOrEqual strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.877Z","updatedAt":"2016-01-27T00:41:22.877Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"7 greaterThanOrEqual_strings_user","type":"greaterThanOrEqual strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.877Z","updatedAt":"2016-01-27T00:41:22.877Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"8 greaterThan_strings_user","type":"greaterThan strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.158Z","updatedAt":"2016-01-27T00:41:22.158Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"groupBy_user4","type":"groupBy test","age":4,"percent":2,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.151Z","updatedAt":"2016-01-27T00:41:23.151Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"groupBy_user9","type":"groupBy test","age":9,"percent":4.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.152Z","updatedAt":"2016-01-27T00:41:23.152Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"groupBy_user2","type":"groupBy test","age":2,"percent":1,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.151Z","updatedAt":"2016-01-27T00:41:23.151Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"groupBy_user7","type":"groupBy test","age":7,"percent":3.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.152Z","updatedAt":"2016-01-27T00:41:23.152Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"groupBy_user1","type":"groupBy test","age":1,"percent":0.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.151Z","updatedAt":"2016-01-27T00:41:23.151Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"groupBy_user6","type":"groupBy test","age":6,"percent":3,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.151Z","updatedAt":"2016-01-27T00:41:23.151Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"groupBy_user0","type":"groupBy test","age":0,"percent":0,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.150Z","updatedAt":"2016-01-27T00:41:23.150Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"groupBy_user5","type":"groupBy test","age":5,"percent":2.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.151Z","updatedAt":"2016-01-27T00:41:23.151Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"something else","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.463Z","updatedAt":"2016-01-27T00:41:23.463Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"IN_query_test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.463Z","updatedAt":"2016-01-27T00:41:23.463Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.get('/userTable2')
  //.query({"first_name":"baz"})
  //.reply(200, "<html><head><meta http-equiv=\"refresh\" content=\"0;url=http://ww2.nock.me/?folio=7POYGN0G2\" /><META HTTP-EQUIV=\"CACHE-CONTROL\" CONTENT=\"NO-CACHE,NO_STORE\"><META HTTP-EQUIV=\"PRAGMA\" CONTENT=\"NO-CACHE\"/>\n\t\t\t<META HTTP-EQUIV=\"EXPIRES\" CONTENT=\"Mon, 22 Jul 2002 11:12:01 GMT\"/></head><body onbeforeunload=\"\" onunload=\"\"><script language='javascript' type='text/javascript'>try\n\t\t\t\t{\n\t\t\t\t    var rurl = 'http://ww2.nock.me/?folio=7POYGN0G2'\n\t\t\t\t\twindow.top.location.replace(rurl);\n\t\t\t\t} catch(exception) {\n\t\t\t\t\tdocument.write(\"This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.\");\n\t\t\t\t}</script><noscript>This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.</noscript></body></html>", { date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //server: 'Apache',
  //'set-cookie': [ 'vsid=908vr2014008613129620; expires=Mon, 25-Jan-2021 00:41:01 GMT; path=/; domain=nock.me; httponly' ],
  //expires: 'Mon, 22 Jul 2002 11:12:01 GMT',
  //'cache-control': 'private, no-cache',
  //pragma: 'no-cache',
  //vary: 'Accept-Encoding,User-Agent',
  //'content-length': '762',
  //'content-type': 'text/html; charset=UTF-8',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'keep-alive' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan test","age":40,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.987Z","updatedAt":"2016-01-27T00:41:23.987Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan test","age":41,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.987Z","updatedAt":"2016-01-27T00:41:23.987Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan test","age":42,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.987Z","updatedAt":"2016-01-27T00:41:23.987Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"groupBy_user8","type":"groupBy test","age":8,"percent":4,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.152Z","updatedAt":"2016-01-27T00:41:23.152Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan_dates_user1","type":"lessThan dates test","dob":"2013-11-02T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.204Z","updatedAt":"2016-01-27T00:41:24.204Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan_dates_user6","type":"lessThan dates test","dob":"2013-11-07T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.205Z","updatedAt":"2016-01-27T00:41:24.205Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan_dates_user5","type":"lessThan dates test","dob":"2013-11-06T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.205Z","updatedAt":"2016-01-27T00:41:24.205Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan_dates_user0","type":"lessThan dates test","dob":"2013-11-01T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.204Z","updatedAt":"2016-01-27T00:41:24.204Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan_dates_user7","type":"lessThan dates test","dob":"2013-11-08T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.206Z","updatedAt":"2016-01-27T00:41:24.206Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan_dates_user2","type":"lessThan dates test","dob":"2013-11-03T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.205Z","updatedAt":"2016-01-27T00:41:24.205Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:01 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:01 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan_dates_user3","type":"lessThan dates test","dob":"2013-11-04T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.205Z","updatedAt":"2016-01-27T00:41:24.205Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual test","age":42,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.485Z","updatedAt":"2016-01-27T00:41:24.485Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan_dates_user8","type":"lessThan dates test","dob":"2013-11-09T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.206Z","updatedAt":"2016-01-27T00:41:24.206Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual test","age":43,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.485Z","updatedAt":"2016-01-27T00:41:24.485Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual_dates_user6","type":"lessThanOrEqual dates test","dob":"2013-11-07T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.666Z","updatedAt":"2016-01-27T00:41:24.666Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual_dates_user0","type":"lessThanOrEqual dates test","dob":"2013-11-01T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.666Z","updatedAt":"2016-01-27T00:41:24.666Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual_dates_user0","type":"greaterThanOrEqual dates test","dob":"2013-11-01T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.604Z","updatedAt":"2016-01-27T00:41:22.604Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual_dates_user7","type":"lessThanOrEqual dates test","dob":"2013-11-08T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.666Z","updatedAt":"2016-01-27T00:41:24.666Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual_dates_user1","type":"lessThanOrEqual dates test","dob":"2013-11-02T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.666Z","updatedAt":"2016-01-27T00:41:24.666Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual test","age":40,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.485Z","updatedAt":"2016-01-27T00:41:24.485Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual_dates_user2","type":"lessThanOrEqual dates test","dob":"2013-11-03T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.666Z","updatedAt":"2016-01-27T00:41:24.666Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual_dates_user8","type":"lessThanOrEqual dates test","dob":"2013-11-09T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.667Z","updatedAt":"2016-01-27T00:41:24.667Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual_dates_user9","type":"lessThanOrEqual dates test","dob":"2013-11-10T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.667Z","updatedAt":"2016-01-27T00:41:24.667Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual_dates_user3","type":"lessThanOrEqual dates test","dob":"2013-11-04T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.666Z","updatedAt":"2016-01-27T00:41:24.666Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual_dates_user4","type":"lessThanOrEqual dates test","dob":"2013-11-05T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.666Z","updatedAt":"2016-01-27T00:41:24.666Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"3 greaterThan_strings_user","type":"greaterThan strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.158Z","updatedAt":"2016-01-27T00:41:22.158Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan_dates_user9","type":"lessThan dates test","dob":"2013-11-10T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.206Z","updatedAt":"2016-01-27T00:41:24.206Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual test","age":43,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.415Z","updatedAt":"2016-01-27T00:41:22.415Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan_dates_user0","type":"greaterThan dates test","dob":"2013-11-01T04:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.965Z","updatedAt":"2016-01-27T00:41:21.965Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan test","age":43,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.793Z","updatedAt":"2016-01-27T00:41:21.793Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"24g LIKE query test asdcxbzbasg","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.910Z","updatedAt":"2016-01-27T00:41:24.910Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"0 greaterThanOrEqual_strings_user","type":"greaterThanOrEqual strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.877Z","updatedAt":"2016-01-27T00:41:22.877Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual test","age":41,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.485Z","updatedAt":"2016-01-27T00:41:24.485Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan_dates_user4","type":"lessThan dates test","dob":"2013-11-05T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.205Z","updatedAt":"2016-01-27T00:41:24.205Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"limit_user0","type":"limit test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.463Z","updatedAt":"2016-01-27T00:41:35.463Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"limit_user5","type":"limit test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.464Z","updatedAt":"2016-01-27T00:41:35.464Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"limit_user3","type":"limit test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.464Z","updatedAt":"2016-01-27T00:41:35.464Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"limit_user8","type":"limit test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.464Z","updatedAt":"2016-01-27T00:41:35.464Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"limit_user9","type":"limit test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.464Z","updatedAt":"2016-01-27T00:41:35.464Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"limit_user4","type":"limit test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.464Z","updatedAt":"2016-01-27T00:41:35.464Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"max_user6","type":"max test","age":9007,"percent":9004,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.722Z","updatedAt":"2016-01-27T00:41:35.722Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"max_user0","type":"max test","age":9001,"percent":9001,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.721Z","updatedAt":"2016-01-27T00:41:35.721Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"max_user8","type":"max test","age":9009,"percent":9005,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.722Z","updatedAt":"2016-01-27T00:41:35.722Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"max_user2","type":"max test","age":9003,"percent":9002,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.721Z","updatedAt":"2016-01-27T00:41:35.721Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"max_user7","type":"max test","age":9008,"percent":9004.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.722Z","updatedAt":"2016-01-27T00:41:35.722Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"max_user1","type":"max test","age":9002,"percent":9001.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.721Z","updatedAt":"2016-01-27T00:41:35.721Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"min_user4","type":"min test","age":-4,"percent":-2,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.951Z","updatedAt":"2016-01-27T00:41:35.951Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"min_user2","type":"min test","age":-2,"percent":-1,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.951Z","updatedAt":"2016-01-27T00:41:35.951Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"limit_user1","type":"limit test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.463Z","updatedAt":"2016-01-27T00:41:35.463Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"limit_user6","type":"limit test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.464Z","updatedAt":"2016-01-27T00:41:35.464Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"min_user8","type":"min test","age":-8,"percent":-4,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.952Z","updatedAt":"2016-01-27T00:41:35.952Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"min_user9","type":"min test","age":-9,"percent":-4.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.952Z","updatedAt":"2016-01-27T00:41:35.952Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"min_user3","type":"min test","age":-3,"percent":-1.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.951Z","updatedAt":"2016-01-27T00:41:35.951Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"max_user9","type":"max test","age":9010,"percent":9005.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.722Z","updatedAt":"2016-01-27T00:41:35.722Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"max_user4","type":"max test","age":9005,"percent":9003,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.722Z","updatedAt":"2016-01-27T00:41:35.722Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"min_user0","type":"min test","age":0,"percent":0,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.950Z","updatedAt":"2016-01-27T00:41:35.950Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"min_user5","type":"min test","age":-5,"percent":-2.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.951Z","updatedAt":"2016-01-27T00:41:35.951Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"not ! test","age":41,"email":"41@test.com","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.128Z","updatedAt":"2016-01-27T00:41:36.128Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"not ! test","age":42,"email":"42@test.com","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.128Z","updatedAt":"2016-01-27T00:41:36.128Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"not ! test","age":43,"email":"43@test.com","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.128Z","updatedAt":"2016-01-27T00:41:36.128Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"min_user7","type":"min test","age":-7,"percent":-3.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.951Z","updatedAt":"2016-01-27T00:41:35.951Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"OR_user0","last_name":"contains_user0","title":"contains_title0","type":"or test","age":0,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.289Z","updatedAt":"2016-01-27T00:41:36.289Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"OR_user1","last_name":"contains_user1","title":"contains_title1","type":"or test","age":1,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.289Z","updatedAt":"2016-01-27T00:41:36.289Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"OR_user2","last_name":"contains_user2","title":"contains_title2","type":"or test","age":2,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.289Z","updatedAt":"2016-01-27T00:41:36.289Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.get('/userTable2')
  //.query({"or":""})
  //.reply(200, "<html><head><meta http-equiv=\"refresh\" content=\"0;url=http://ww2.nock.me/?folio=7POYGN0G2\" /><META HTTP-EQUIV=\"CACHE-CONTROL\" CONTENT=\"NO-CACHE,NO_STORE\"><META HTTP-EQUIV=\"PRAGMA\" CONTENT=\"NO-CACHE\"/>\n\t\t\t<META HTTP-EQUIV=\"EXPIRES\" CONTENT=\"Mon, 22 Jul 2002 11:12:01 GMT\"/></head><body onbeforeunload=\"\" onunload=\"\"><script language='javascript' type='text/javascript'>try\n\t\t\t\t{\n\t\t\t\t    var rurl = 'http://ww2.nock.me/?folio=7POYGN0G2'\n\t\t\t\t\twindow.top.location.replace(rurl);\n\t\t\t\t} catch(exception) {\n\t\t\t\t\tdocument.write(\"This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.\");\n\t\t\t\t}</script><noscript>This page has moved, <A HREF='http://ww2.nock.me/?folio=7POYGN0G2'>Click here</A> to go there.</noscript></body></html>", { date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //server: 'Apache',
  //'set-cookie': [ 'vsid=919vr2014008741703984; expires=Mon, 25-Jan-2021 00:41:14 GMT; path=/; domain=nock.me; httponly' ],
  //expires: 'Mon, 22 Jul 2002 11:12:01 GMT',
  //'cache-control': 'private, no-cache',
  //pragma: 'no-cache',
  //vary: 'Accept-Encoding,User-Agent',
  //'content-length': '762',
  //'content-type': 'text/html; charset=UTF-8',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'keep-alive' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"groupBy_user3","type":"groupBy test","age":3,"percent":1.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.151Z","updatedAt":"2016-01-27T00:41:23.151Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"select_user","last_name":"select_name_2","email":"select_email","title":"select_title","age":32,"type":"select test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.871Z","updatedAt":"2016-01-27T00:41:36.871Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"select_user","last_name":"select_name_7","email":"select_email","title":"select_title","age":37,"type":"select test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.872Z","updatedAt":"2016-01-27T00:41:36.872Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"select_user","last_name":"select_name_3","email":"select_email","title":"select_title","age":33,"type":"select test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.872Z","updatedAt":"2016-01-27T00:41:36.872Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"select_user","last_name":"select_name_8","email":"select_email","title":"select_title","age":38,"type":"select test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.872Z","updatedAt":"2016-01-27T00:41:36.872Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"select_user","last_name":"select_name_5","email":"select_email","title":"select_title","age":35,"type":"select test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.872Z","updatedAt":"2016-01-27T00:41:36.872Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"select_user","last_name":"select_name_1","email":"select_email","title":"select_title","age":31,"type":"select test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.871Z","updatedAt":"2016-01-27T00:41:36.871Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"select_user","last_name":"select_name_6","email":"select_email","title":"select_title","age":36,"type":"select test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.872Z","updatedAt":"2016-01-27T00:41:36.872Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"OR_user3","last_name":"contains_user3","title":"contains_title3","type":"or test","age":3,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.290Z","updatedAt":"2016-01-27T00:41:36.290Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"skip_user3","type":"skip test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.070Z","updatedAt":"2016-01-27T00:41:37.070Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"skip_user0","type":"skip test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.069Z","updatedAt":"2016-01-27T00:41:37.069Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"skip_user7","type":"skip test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.070Z","updatedAt":"2016-01-27T00:41:37.070Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"skip_user8","type":"skip test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.070Z","updatedAt":"2016-01-27T00:41:37.070Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"skip_user4","type":"skip test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.070Z","updatedAt":"2016-01-27T00:41:37.070Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"skip_user2","type":"skip test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.069Z","updatedAt":"2016-01-27T00:41:37.069Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"select_user","last_name":"select_name_9","email":"select_email","title":"select_title","age":39,"type":"select test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.872Z","updatedAt":"2016-01-27T00:41:36.872Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"select_user","last_name":"select_name_4","email":"select_email","title":"select_title","age":34,"type":"select test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.872Z","updatedAt":"2016-01-27T00:41:36.872Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"skip_user1","type":"skip test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.069Z","updatedAt":"2016-01-27T00:41:37.069Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"skip_user9","type":"skip test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.070Z","updatedAt":"2016-01-27T00:41:37.070Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"skip_user5","type":"skip test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.070Z","updatedAt":"2016-01-27T00:41:37.070Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sort_user2","type":"sort test","dob":"2016-01-29T00:41:37.287Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.291Z","updatedAt":"2016-01-27T00:41:37.291Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sort_user6","type":"sort test","dob":"2016-02-02T00:41:37.287Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.291Z","updatedAt":"2016-01-27T00:41:37.291Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"skip_user6","type":"skip test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.070Z","updatedAt":"2016-01-27T00:41:37.070Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sort_user3","type":"sort test","dob":"2016-01-30T00:41:37.287Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.291Z","updatedAt":"2016-01-27T00:41:37.291Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sort_user7","type":"sort test","dob":"2016-02-03T00:41:37.287Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.291Z","updatedAt":"2016-01-27T00:41:37.291Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sort_user0","type":"sort test","dob":"2016-01-27T00:41:37.287Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.291Z","updatedAt":"2016-01-27T00:41:37.291Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sort_user4","type":"sort test","dob":"2016-01-31T00:41:37.287Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.291Z","updatedAt":"2016-01-27T00:41:37.291Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sort_user1","type":"sort test","dob":"2016-01-28T00:41:37.287Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.291Z","updatedAt":"2016-01-27T00:41:37.291Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sort_user8","type":"sort test","dob":"2016-02-04T00:41:37.287Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.292Z","updatedAt":"2016-01-27T00:41:37.292Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"bob","last_name":"foo","type":"sort test multi","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.468Z","updatedAt":"2016-01-27T00:41:37.468Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:15 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sort_user9","type":"sort test","dob":"2016-02-05T00:41:37.287Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.292Z","updatedAt":"2016-01-27T00:41:37.292Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:15 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sort_user5","type":"sort test","dob":"2016-02-01T00:41:37.287Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.291Z","updatedAt":"2016-01-27T00:41:37.291Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:15 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"short_xxj8xrxh!!!r startsWith query test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.657Z","updatedAt":"2016-01-27T00:41:37.657Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:15 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"foo","last_name":"smith","type":"sort test multi","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.467Z","updatedAt":"2016-01-27T00:41:37.467Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:15 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"joe","last_name":"smith","type":"sort test multi","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.468Z","updatedAt":"2016-01-27T00:41:37.468Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:15 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"long_xxj8xrxh!!!r startsWith query test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:37.878Z","updatedAt":"2016-01-27T00:41:37.878Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:15 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"type":"xxj8xrxh!!!rDynamic StartsWith test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:38.317Z","updatedAt":"2016-01-27T00:41:38.317Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:15 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:15 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sum_user3","type":"sum test","age":3,"percent":1.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:38.525Z","updatedAt":"2016-01-27T00:41:38.525Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:16 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sum_user4","type":"sum test","age":4,"percent":2,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:38.525Z","updatedAt":"2016-01-27T00:41:38.525Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:16 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sum_user0","type":"sum test","age":0,"percent":0,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:38.524Z","updatedAt":"2016-01-27T00:41:38.524Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:16 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sum_user9","type":"sum test","age":9,"percent":4.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:38.525Z","updatedAt":"2016-01-27T00:41:38.525Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:16 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sum_user8","type":"sum test","age":8,"percent":4,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:38.525Z","updatedAt":"2016-01-27T00:41:38.525Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:16 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sum_user6","type":"sum test","age":6,"percent":3,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:38.525Z","updatedAt":"2016-01-27T00:41:38.525Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:16 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sum_user1","type":"sum test","age":1,"percent":0.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:38.524Z","updatedAt":"2016-01-27T00:41:38.524Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:16 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sum_user2","type":"sum test","age":2,"percent":1,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:38.524Z","updatedAt":"2016-01-27T00:41:38.524Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:16 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sum_user7","type":"sum test","age":7,"percent":3.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:38.525Z","updatedAt":"2016-01-27T00:41:38.525Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:16 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"sum_user5","type":"sum test","age":5,"percent":2.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:38.525Z","updatedAt":"2016-01-27T00:41:38.525Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:16 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThanOrEqual_dates_user5","type":"lessThanOrEqual dates test","dob":"2013-11-06T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:24.666Z","updatedAt":"2016-01-27T00:41:24.666Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:02 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:02 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThan_dates_user5","type":"greaterThan dates test","dob":"2013-11-06T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:21.966Z","updatedAt":"2016-01-27T00:41:21.966Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:59 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:59 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"max_user3","type":"max test","age":9004,"percent":9002.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.721Z","updatedAt":"2016-01-27T00:41:35.721Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:18 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:18 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:18 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"select_user","last_name":"select_name_0","email":"select_email","title":"select_title","age":30,"type":"select test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.870Z","updatedAt":"2016-01-27T00:41:36.870Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:16 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:16 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"lessThan test","age":43,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:23.988Z","updatedAt":"2016-01-27T00:41:23.988Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:03 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:03 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:03 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable', {"first_name":"test_25","type":".create() with a list, returning values","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:40:59.793Z","updatedAt":"2016-01-27T00:40:59.793Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable\">http://nock.me/userTable</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:44 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:44 GMT',
  //'content-type': 'text/html',
  //'content-length': '1066',
  //expires: 'Wed, 27 Jan 2016 00:40:44 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"average_user0","type":"average test","age":0,"percent":0,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:14.606Z","updatedAt":"2016-01-27T00:41:14.606Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:40:52 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:40:52 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"not ! test","age":40,"email":"40@test.com","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:36.128Z","updatedAt":"2016-01-27T00:41:36.128Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"limit_user7","type":"limit test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.464Z","updatedAt":"2016-01-27T00:41:35.464Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"limit_user2","type":"limit test","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.464Z","updatedAt":"2016-01-27T00:41:35.464Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"min_user6","type":"min test","age":-6,"percent":-3,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.951Z","updatedAt":"2016-01-27T00:41:35.951Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"max_user5","type":"max test","age":9006,"percent":9003.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.722Z","updatedAt":"2016-01-27T00:41:35.722Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:13 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:13 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"24gdddaga4 LIKE query test with sign asdcxbzbasg","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:29.456Z","updatedAt":"2016-01-27T00:41:29.456Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:09 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:09 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:09 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"min_user1","type":"min test","age":-1,"percent":-0.5,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:35.950Z","updatedAt":"2016-01-27T00:41:35.950Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:14 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:14 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"greaterThanOrEqual_dates_user5","type":"greaterThanOrEqual dates test","dob":"2013-11-06T05:00:00.000Z","favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.605Z","updatedAt":"2016-01-27T00:41:22.605Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });

//nock('http://nock.me:80', {"encodedQueryParams":true})
  //.post('/userTable2', {"first_name":"5 greaterThanOrEqual_strings_user","type":"greaterThanOrEqual strings test","dob":null,"favoriteFruit":"blueberry","status":false,"createdAt":"2016-01-27T00:41:22.877Z","updatedAt":"2016-01-27T00:41:22.877Z"})
  //.reply(502, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n<HTML><HEAD><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=iso-8859-1\">\n<TITLE>ERROR: The requested URL could not be retrieved</TITLE>\n<STYLE type=\"text/css\"><!--BODY{background-color:#ffffff;font-family:verdana,sans-serif}PRE{font-family:sans-serif}--></STYLE>\n</HEAD><BODY>\n<H1>ERROR</H1>\n<H2>The requested URL could not be retrieved</H2>\n<HR noshade size=\"1px\">\n<P>\nWhile trying to retrieve the URL:\n<A HREF=\"http://nock.me/userTable2\">http://nock.me/userTable2</A>\n<P>\nThe following error was encountered:\n<UL>\n<LI>\n<STRONG>\nRead Error\n</STRONG>\n</UL>\n\n<P>\nThe system returned:\n<PRE><I>    (104) Connection reset by peer</I></PRE>\n\n<P>\nAn error condition occurred while reading data from the network.  Please\nretry your request.\n<P>Your cache administrator is <A HREF=\"mailto:root\">root</A>. \n\n<BR clear=\"all\">\n<HR noshade size=\"1px\">\n<ADDRESS>\nGenerated Wed, 27 Jan 2016 00:41:00 GMT by cache_server (squid/2.6.STABLE21)\n</ADDRESS>\n</BODY></HTML>\n", { server: 'squid/2.6.STABLE21',
  //date: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'content-type': 'text/html',
  //'content-length': '1068',
  //expires: 'Wed, 27 Jan 2016 00:41:00 GMT',
  //'x-squid-error': 'ERR_READ_ERROR 104',
  //'x-cache': 'MISS from cache_server',
  //'x-cache-lookup': 'MISS from cache_server:3128',
  //via: '1.0 cache_server:3128 (squid/2.6.STABLE21)',
  //connection: 'close' });
