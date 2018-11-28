const path     = require('path');
const sendImageToVisionApi = require('./send-image-to-vision-api');
const fs = require("fs");
const pify = require('pify');
let jsonData = require('./data.json');

// Mutable variable to support rewire in tests.
var Episode7 = require('episode-7');

function fileUpload(request, response, next) {
  const filePath = request.files.file.path;
  const fileName = request.files.file.name;
  const fileExt  = path.extname(filePath).replace(/^\./,'');
  const modelId    = process.env.CUSTOM_MODEL_ID || '3WXT36J7FGQ3PE4BXD5DV6M5M4';
  const pvsUrl     = process.env.EINSTEIN_VISION_URL || 'https://api.einstein.ai/';
  const accountId  = process.env.EINSTEIN_VISION_ACCOUNT_ID || 'avhadpankaj@gmail.com';
  const privateKey = process.env.EINSTEIN_VISION_PRIVATE_KEY || fs.readFileSync(__dirname +'/key.pm','utf8');
  const jwtToken   = process.env.EINSTEIN_VISION_TOKEN;

  //get base64 Image Data
  let fileData = base64_encode(filePath);

  var tmp_path = filePath;
  var target_path = './filedrop-ui/src/assets/' + request.files.file.name;
  fs.rename(tmp_path, target_path, function(err) {
      if (err) throw err;
      fs.unlink(tmp_path, function() {
          if (err) throw err;
        //   res.send('File uploaded to: ' + target_path);
      });
  });
  return Episode7.run(sendImageToVisionApi,
               pvsUrl,
               fileData,
               fileExt,
               modelId,
               accountId,
               privateKey,
               jwtToken)
    .then(function(predictions) {
        //response.setHeader('Content-Type', 'application/json'); 
        response.header("Access-Control-Allow-Credentials", true);
        response.header("Access-Control-Allow-Origin", request.headers.origin);
        response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        response.header(
            "Access-Control-Allow-Headers",
            "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
        );

        response.status(200).send(predictions);
        let newPrediction = {};
        newPrediction.id = jsonData[jsonData.length-1] ? jsonData[jsonData.length-1].id++:0;
        newPrediction.name = fileName;
        newPrediction.epiIndex = JSON.parse(predictions).probabilities.find(o => o.label === 'Beaches').probability.toFixed(2);
        jsonData.push(newPrediction);
        let data = JSON.stringify(jsonData);  
        fs.writeFileSync('./middleware-api/data.json', data);  

    })
    .catch( error => next(error));
}

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

module.exports = fileUpload;