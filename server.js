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
        }
    }
}