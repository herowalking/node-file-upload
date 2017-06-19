/**
 * Created by Lincoln on 6/19/2017.
 */

var server = require('./server');
var router = require('./router');
// var requestHandlers = require('./requestHandlers');
var requestHandlers = require('./postHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
server.start(router.route, handle);