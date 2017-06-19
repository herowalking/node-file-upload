/**
 * Created by Lincoln on 6/19/2017.
 */

var exec = require('child_process').exec;

function start(response) {
    console.log("Request handler 'start' was called.");
    // function sleep(milliseconds) {
    //     var startTime = new Date().getTime();
    //     while(new Date().getTime() < startTime + milliseconds);
    // }
    // sleep(10000);

    var content = "empty";
    exec('ipconfig', {encoding: 'Hero'}, function (error, stdout, stderr) {
        if(error) {
            console.log(error);
        } else {
            content = stdout || stderr;
            console.log(content);
        }
    });
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write(content);
    response.end();
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {'Content-type':'text/plain'});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;