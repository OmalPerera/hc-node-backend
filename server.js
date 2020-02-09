/*jshint es3: false, -W024*/
/*global require, module, console, __dirname, global, setTimeout, process, JSON*/

(function () {
	'use strict';

	// load the DI and Container Registry
	var CoolBeans = require('CoolBeans');
	global.DIRegistry = new CoolBeans('./app/utils/diregistry.util.json');

	// load needed dependencies
	var http = global.DIRegistry.get('http');
	var https = global.DIRegistry.get('https');
	var mongoose = global.DIRegistry.get('mongoose');
	var bodyParser = global.DIRegistry.get('bodyParser');
	var favicon = global.DIRegistry.get('servefavicon');
	var express = global.DIRegistry.get('express');
	var hcServerApp = global.DIRegistry.get('hcServerApp');
	var appConfigs = global.DIRegistry.get('AppConfigs');
	var appStartUp = global.DIRegistry.get('AppStartUp');
	var appMailer = global.DIRegistry.get('AppMailer');
	var imagesRoute = global.DIRegistry.get('ImagesRoute');
	var locationRoute = global.DIRegistry.get('LocationRoute');
	var productRoute = global.DIRegistry.get('ProductRoute');
	var userRoute = global.DIRegistry.get('UserRoute');
	var orderRoute = global.DIRegistry.get('OrderRoute');
	var recipeRoute = global.DIRegistry.get('RecipeRoute');
	var staticContentRoute = global.DIRegistry.get('StaticContentRoute');
	var couponCodeRoute = global.DIRegistry.get('CouponCodeRoute');
	var paymentRoute = global.DIRegistry.get('PaymentRoute');
	var competitionModelRoute = global.DIRegistry.get('CompetitionModelRoute');
	var adminRoute = global.DIRegistry.get('AdminRoute');
	var tmallRoute = global.DIRegistry.get('TmallRoute');
	var jdRoute = global.DIRegistry.get('JDRoute');
	var yhdRoute = global.DIRegistry.get('YHDRoute');

	// set maximum socket connections
	http.globalAgent.maxSockets = Infinity;
	https.globalAgent.maxSockets = Infinity;

	// create server
	var server = http.createServer(hcServerApp);

	// logger
	var logger = global.DIRegistry.get('Logger');
	logger.init();

	// handling uncaught exceptions
	process.on('uncaughtException', function (error) {
		if (error !== undefined) {
			if (error.code === 'ECONNRESET') {
				// safely handling ECONNRESET type exceptions
			}
			else {
				logger.error('Unhandled Exception: ' + JSON.stringify(error) + ((error.stack !== undefined) ? '\nStack Trace: ' + JSON.stringify(error.stack) : ''));
				appMailer.sendErrorMail('Unhandled Exception: ' + JSON.stringify(error) + ((error.stack !== undefined) ? '\nStack Trace: ' + JSON.stringify(error.stack) : ''), 'EXCEPTION');
			}
		}
		else {
			logger.error('Unhandled Exception: Unknown Error');
			appMailer.sendErrorMail('Unhandled Exception: ' + JSON.stringify(error) + ((error.stack !== undefined) ? '\nStack Trace: ' + JSON.stringify(error.stack) : ''), 'EXCEPTION');
		}
	});

	// socket io connector
	var socketIOConnector = global.DIRegistry.get('SocketIOConnector');
	socketIOConnector.init(server);
	socketIOConnector.on('connection', function () {
		console.log('Client Connected');
	});

	// connect to mongodb and capturing connection events for logging
	var dbOptions = {
		server: {
			socketOptions: {
				keepAlive: 1
			}
		}
	};
	var connectToDB = function () {
		mongoose.connect(appConfigs.databaseUrl, dbOptions);
	};
	connectToDB();

	mongoose.connection.on('connected', function () {
		logger.info('Connected to DB');
	});

	mongoose.connection.on('error', function (error) {
		logger.error(error);
		mongoose.connection.close();
		setTimeout(function () {
			logger.info('Re-connecting to the DB');
			connectToDB();
		}, 5000);
	});

	// configure body-parser
	hcServerApp.use(bodyParser.json({ extended: true, limit: '50mb' }));
	hcServerApp.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

	// enable CORS
	hcServerApp.all('*', function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
		next();
	});

	// API routing
	hcServerApp.use('/api/v' + appConfigs.apiVersion, locationRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, productRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, userRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, orderRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, recipeRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, staticContentRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, couponCodeRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, paymentRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, competitionModelRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, adminRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, tmallRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, jdRoute);
	hcServerApp.use('/api/v' + appConfigs.apiVersion, yhdRoute);

	// image folder routing
	hcServerApp.use('/images', imagesRoute);

	// favicon
	hcServerApp.use(favicon(__dirname + '/public/app/images/hclogo.png'));

	// public views routing
	hcServerApp.use('/font', express.static(__dirname + '/public/app/font'));
	hcServerApp.use(express.static(__dirname + '/public'));
	hcServerApp.use(function (req, res) {
		return res.redirect(req.protocol + '://' + req.get('Host') + '/#' + req.url);
	});

	// start server
	module.exports = hcServerApp;
	server.listen(appConfigs.serverPort, function () {
		console.log('HC Web Server started on port ' + appConfigs.serverPort);
		appMailer.sendServerStartedMail();
		appStartUp.initializeAppStartUp();
	});
}());
