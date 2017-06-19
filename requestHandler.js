/**
 * Created by Lincoln on 6/19/2017.
 */

var startHandler = require('./startHandler');
var uploadHandler = require('./uploadHandler');
var showHandler = require('./showHandler');

var handle = {};
handle['/'] = startHandler.start;
handle['/start'] = startHandler.start;
handle['/upload'] = startHandler.upload;
handle['/show'] = startHandler.show;

exports.handle = handle;