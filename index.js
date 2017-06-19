/**
 * Created by Lincoln on 6/19/2017.
 */

var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');

server.start(router.route, handle);