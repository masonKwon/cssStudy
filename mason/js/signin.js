

function requestAuthorization() {
    var siginInURL =
        config.authorization_uri +
        '?response_type=code' +
        '&scope=' + config.scope +
        '&client_id=' + encodeURI(config.client_id) +
        '&redirect_uri=' + encodeURI(config.redirect_uri) +
        '&state=';
    location.href = siginInURL;

    _init();
}

function _init() {
    console.log('irm init called');
    getAccessToken(function(token) {
        //console.log('getAccessToken Handler, token: ', token);

        var headers = {};

        if(!isNull(token)) {
            headers.Authorization = 'Bearer ' + token; // no colon ':' after Bearer
        }

        $.ajaxSetup({
            headers: headers
            , cache: false
        });
    });
}

function getAccessToken(handler) {
    // console.log('getAccessToken called');
    var cookie_key = getAccessTokenName($.irm.config.client_id);    // e.g. best_image_client_id
    var tokenFromParam =  getParameterByName('access_token');                // be careful! it is access_token

    if( isNull(tokenFromParam) ) {

        var tokenFromCookie = Cookies.get(cookie_key);
        if( !isNull(tokenFromCookie) ){

            // console.log('token from cookie exists');

            if(handler) {
                handler(tokenFromCookie);
            } else {
                return tokenFromCookie;
            }
        }

    } else {
        /**
         * add expires
         * 2017-01-17 made by matthew
         * @type {Date}
         */
        var expireTime = new Date(new Date().getTime() + (Number(getParameterByName('expires_in')) - 1 * 60 ) * 1000);
        Cookies.set(cookie_key, tokenFromParam, {
            expires: expireTime
        });

        /**
         * old source
         * 2017-01-17 주석처리
         */
        // Cookies.set(cookie_key, tokenFromParam);

        if(handler) {
            handler(tokenFromParam);
        } else {
            return tokenFromParam;
        }

    }
}