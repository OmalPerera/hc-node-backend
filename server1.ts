import http from "http";
import { app } from './src/app';

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '3001';


/**
 * Create HTTP server.
 */

const server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log('HC Web Server started on : http://localhost:' + port);
});