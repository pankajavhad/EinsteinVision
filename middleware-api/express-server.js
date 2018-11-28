const express     = require('express');
const multipart   = require('connect-multiparty');
const fileUpload  = require('./file-upload');
let jsonData = require('./data.json');

function createServer() {
  const app                 = express();
  const multipartMiddleware = multipart();

  app.use(express.static(__dirname + '/../filedrop-ui/build'));

  app.post('/file-upload', multipartMiddleware, fileUpload);

  app.get("/pics", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).send(jsonData);
  });

  app.use(logErrors);
  app.use(clientErrorHandler);
  app.use(errorHandler);

  app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

  return app;
}

module.exports = createServer;


function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  var isJSON = req.headers['content-type'] === 'application/json';
  if (isJSON) {
    res.status(500);
    res.send({ error: err.message });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.send(err.message);
}