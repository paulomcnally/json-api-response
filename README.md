json-api-response
=================

API responses in JSON format | NodeJS Module

## Install:
    npm install json-api-response

## Include:
    var jar = require('json-api-response');

## Error example:
    var error = jar.error(1,'Example','Error generado por el sistema');
    console.log( error );

## Result:
    {"error":{"message":"Error generado por el sistema","type":"Example","code":1}}

## Response example:
    var response = jar.response( {"text": "demo"} );
    console.log( response );

## Result:
    {"text":"demo"}

## Invalid response format example:
    var responseFail = jar.response( "Respuesta" );
    console.log( responseFail );

## Result:
    {"error":{"message":"Es requerido un objeto.","type":"Interno","code":1000}}