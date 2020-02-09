const http = require('http');
const app = require('./src/app');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3001');

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Create HTTP server.
 */

var server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, function () {
    console.log('HC Web Server started on : http://localhost:' + port);
});