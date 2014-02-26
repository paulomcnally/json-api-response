var path = require('path');
var fs = require('fs');

var jar = function(){

    var self = this;

    /**
     *
     * @type {boolean}
     */
    self.isExpress = false;

    /**
     *
     * @type {string}
     */
    self.langFile = 'en';

    /**
     *
     * @type {number}
     */
    self.space = 2;

    /**
     *
     * @type {null}
     */
    self.replacer = null;

    /**
     *
     * @type {number}
     */
    self.errorCode = 1000;

    /**
     *
     * @param fileName
     */
    self.setLang = function( fileName ){
        self.langFile = fileName;
        self.getLang();
    }

    /**
     * get lang file and parse
     */
    self.getLang = function(){
        var pathFile = path.resolve(__dirname, './i18n/' + self.langFile + '.json');
        self.lang = JSON.parse( fs.readFileSync(pathFile,'utf8') );
    }

    /**
     * initial function
     */
    self.init = function(  ){
        self.getLang();
    }

    /**
     *
     * @param code
     * @param type
     * @param message
     * @returns {*}
     */
    self.error = function(code, type, message, status) {
        status = status || 200;

        var obj = {};
        obj.error = {};
        obj.error.message = message;
        obj.error.type = type;
        obj.error.code = code;

        var out = JSON.stringify( obj, self.replacer, self.space )

        return self.setHeaders( out, status );
    }

    /**
     *
     * @param obj
     * @returns {*}
     */
    self.response = function ( obj, status ) {
        status = status || 200;

        if( (typeof obj == "object") ){

            var out = JSON.stringify( obj, self.replacer, self.space )

            return self.setHeaders( out, status );

        }
        else{
            return self.error(self.errorCode, self.lang.ErrorExceptionTitle, self.lang.ErrorExceptionText, status);
        }
    }

    /**
     *
     * @param out
     */
    self.setHeaders = function( out, status ){
        if( self.isExpress ){
            self.res.set({
                'Content-Type': 'application/json',
                'Content-Length': out.length
            });

            self.res.set('Content-Type', 'application/json');
            self.res.json( status, JSON.parse( out ) );
            return null;
        }
        else{
            return out;
        }
    }

    /**
     *
     * @param req
     * @param res
     * @param next
     */
    self.express = function( req, res, next ){

        self.isExpress = true;
        self.res = res;
        self.req = req;

        res.jarError = self.error;
        res.jarResponse = self.response;
        next();
    }

    /**
     * Initialize
     */
    self.init();

}

module.exports = new jar();