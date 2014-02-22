var jar = require('../lib/json-api-response');


var error = jar.error(1,'ExampleException','This is a error');

console.log('Error example');
console.log( error );


var response = jar.response( {"foo": "bar"} );

console.log('Response example');
console.log( response );


var responseFail = jar.response( "response" );

console.log('Fail example');
console.log( responseFail );

// express
var express = require('express');
var app = express();

app.use( jar.express );

app.get('/error',function(req,res){
   res.jarError(1,'ExampleException','This is a error');
});

app.get('/response',function(req,res){
   res.jarResponse({"foo":"bar"});
});

app.listen(8080);