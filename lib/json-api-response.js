/**
 * @param code
 * @param type
 * @param message
 * @return JSON error message
 */
function error(c, t, m) {
    var obj = {};
    obj.error = {};
    obj.error.message = m;
    obj.error.type = t;
    obj.error.code = c;
    return JSON.stringify( obj );
};


/**
 * @param code
 * @param type
 * @param message
 * @return JSON error message
 */
module.exports.error = function( code, type, message ){
    return error(code, type, message);
}

module.exports.response = function ( obj ) {
    function out( o ) {
        if( (typeof o == "object") ){
            return JSON.stringify( o, null, 4 );
        }
        else{
            return error(1000, "Interno", "Es requerido un objeto.");
        }
    };

    return out( obj );
}
