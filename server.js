/**
 * Created by Lincoln on 6/19/2017.
 */

var http = require('http');
var url = require('url');

function start(route, handle) {
    console.log(route);
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("pathname: ", pathname);
        if(pathname === '/favicon.ico') {

        } else {
            console.log("Request for " + pathname + " received.");
            route(handle, pathname, response, request);
        }
    }

    http.createServer(onRequest).listen(8090, function(){
        console.log("Server is starting on port 8090.");
    });

}

exports.start = start;