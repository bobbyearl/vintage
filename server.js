var express = require('express'),
    restful = require('node-restful'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = restful.mongoose,
    app = express();

// Needed to expose API
app.use(bodyParser());
app.use(methodOverride());

// Connect to our database
mongoose.connect('mongodb://localhost/vintage');

// Users API
var Users = restful.model('users', mongoose.Schema({
  githubId: String,
  githubName: String
}));
Users.methods(['get', 'put', 'post', 'delete']);

// Movies API
var Movies = restful.model('movies', mongoose.Schema({
  info: String,
  medium: String,
  condition: String
}));
Movies.methods(['get', 'put', 'post', 'delete']);

// Expose API
Users.register(app, '/api/users');
Movies.register(app, '/api/movies');

// Expose app
app.use(express.static(__dirname + '/app'));

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});