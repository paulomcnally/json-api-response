var jar = require('../lib/json-api-response');


var error = jar.error(1,'Example','Error generado por el sistema');

console.log( error );


var response = jar.response( {"text": "demo"} );

console.log( response );


var responseFail = jar.response( "Respuesta" );

console.log( responseFail );