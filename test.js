var express = require('express'),
    restful = require('node-restful'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = restful.mongoose;
var app = express();

app.use(bodyParser());
//app.use(express.query());

mongoose.connect("mongodb://localhost/resources");

var Resource = app.resource = restful.model('resource', mongoose.Schema({
    title: 'string',
    year: 'number',
  }))
  .methods(['get', 'post', 'put', 'delete']);

Resource.register(app, '/resources');

app.listen(3000);