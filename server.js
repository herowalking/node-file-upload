/**
 * Created by Lincoln on 6/19/2017.
 */

var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        if(pathname === '/favicon.ico') {

        } else {
            console.log("Request for " + pathname + " recevied.");
            var postData = "";
            request.setEncoding("utf8");
            request.addListener("data", function(posDataChunk) {
                postData += posDataChunk;
                console.log("Received POST data chunk " + postData);
            });
            request.addListener("end", function () {
                route(handle, pathname, response, postData);
            });
        }
    }

    http.createServer(onRequest).listen(8090, function(){
        console.log("Server is starting on port 8090.");
    });
}

exports.start = start;