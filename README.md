# json-api-response

API responses in JSON format | NodeJS Module

## Installation:
    npm install json-api-response

## Implemented on express

    var jar = require('json-api-response');
    var express = require('express');
    var app = express();
    
    app.use( jar.express );
    
    app.get('/error',function(req,res){
       res.jarError(1,'ExampleException','This is an error');
    });
    
    app.get('/response',function(req,res){
       res.jarResponse({"foo":"bar"});
    });
    
    app.listen(8080);

## On express automatic set headers

    curl -i http://127.0.0.1:8080/error
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json
    Content-Length: 100
    Date: Sat, 22 Feb 2014 23:36:56 GMT
    Connection: keep-alive
    
    {
      "error": {
        "message": "This is an error",
        "type": "ExampleException",
        "code": 1
      }
    }

## Status Code Example (only on express)
See [http://expressjs.com/api.html#res.status](http://expressjs.com/api.html#res.status)
    
    res.jarResponse( { "foot": "bar" }, 201 );
    res.jarError( 1, 'exception', 'message', 404 );

## Include:

    var jar = require('json-api-response');

## Error example:

    var error = jar.error(1,'ExampleException','This is an error');
    console.log( error );

## Result:

    {
      "error": {
        "message": "This is an error",
        "type": "ExampleException",
        "code": 1
      }
    }

## Response example:

    var response = jar.response( {"foo": "bar"} );
    console.log( response );

## Result:

    {
      "foo": "bar"
    }

## Invalid response format example:

    var responseFail = jar.response( "response" );
    console.log( responseFail );

## Result:

    {
      "error": {
        "message": "An object is required.",
        "type": "InternalException",
        "code": 1000
      }
    }

## Contributors:

* [yorkie](https://github.com/yorkie)