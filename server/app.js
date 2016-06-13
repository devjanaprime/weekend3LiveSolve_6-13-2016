var express=require('express');
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
// for POST functionality
var urlencodedParser=bodyParser.urlencoded( { extended: false } );
// include our module
var mathProwler=require('../modules/mathProwler');

// spin up server
app.listen( 3000, 'localhost', function( req, res ){
  console.log( 'server is listening on port 3000' );
});

// static files come from here
app.use( express.static( "public" ) );

//base url
app.get('/', function( req, res ){
  // server side logs show up in terminal
  console.log( 'in base url');
  // write something to the page
  res.sendFile( path.resolve( 'views/index.html' ) );
});

//calcNow
app.post('/calcNow', urlencodedParser, function( req, res ){
  // server side logs show up in terminal
  console.log( 'in calcNow');
  console.log( 'req.body - x: ' + req.body.x + ', y: ' + req.body.y + ', operator: ' + req.body.operation );
  // let's send to a module
  var serverSideAnswer = mathProwler( req.body );
  // return to client in a res.send
  /// req/res must be strings
  res.send( serverSideAnswer.toString() );
});
