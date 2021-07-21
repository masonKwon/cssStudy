/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
    var jQuery;
    var registeredInModuleLoader;
    if (typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
            registeredInModuleLoader = true;
    }
    if (typeof exports === 'object') {
            try {
                    jQuery = require('jquery');
            } catch(e) {}
            module.exports = factory();
            registeredInModuleLoader = true;
    }
    if (!registeredInModuleLoader) {
            var OldCookies = window.Cookies;
            var api = window.Cookies = factory(window.jQuery);
            api.noConflict = function () {
                    window.Cookies = OldCookies;
                    return api;
            };
    }
}(function () {
    function extend () {
            var i = 0;
            var result = {};
            for (; i < arguments.length; i++) {
                    var attributes = arguments[ i ];
                    for (var key in attributes) {
                            result[key] = attributes[key];
                    }
            }
            return result;
    }

    function decode (s) {
            return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }

    function init (converter) {
            function api() {}

            function set (key, value, attributes) {
                    if (typeof document === 'undefined') {
                            return;
                    }

                    attributes = extend({
                            path: '/'
                    }, api.defaults, attributes);

                    if (typeof attributes.expires === 'number') {
                            attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
                    }

                    // We're using "expires" because "max-age" is not supported by IE
                    attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

                    try {
                            var result = JSON.stringify(value);
                            if (/^[\{\[]/.test(result)) {
                                    value = result;
                            }
                    } catch (e) {}

                    value = converter.write ?
                        converter.write(value, key) :
                        encodeURIComponent(String(value));
                    // .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

                    key = encodeURIComponent(String(key));
                    // .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                    // .replace(/[\(\)]/g, escape);

                    var stringifiedAttributes = '';
                    for (var attributeName in attributes) {
                            if (!attributes[attributeName]) {
                                    continue;
                            }
                            stringifiedAttributes += '; ' + attributeName;
                            if (attributes[attributeName] === true) {
                                    continue;
                            }

                            // Considers RFC 6265 section 5.2:
                            // ...
                            // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                            //     character:
                            // Consume the characters of the unparsed-attributes up to,
                            // not including, the first %x3B (";") character.
                            // ...
                            stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
                    }

                    return (document.cookie = key + '=' + value + stringifiedAttributes);
            }

            function get (key, json) {
                    if (typeof document === 'undefined') {
                            return;
                    }

                    var jar = {};
                    // To prevent the for loop in the first place assign an empty array
                    // in case there are no cookies at all.
                    var cookies = document.cookie ? document.cookie.split('; ') : [];
                    var i = 0;

                    for (; i < cookies.length; i++) {
                            var parts = cookies[i].split('=');
                            var cookie = parts.slice(1).join('=');

                            if (!json && cookie.charAt(0) === '"') {
                                    cookie = cookie.slice(1, -1);
                            }

                            try {
                                    var name = decode(parts[0]);
                                    cookie = (converter.read || converter)(cookie, name) ||
                                        decode(cookie);

                                    if (json) {
                                            try {
                                                    cookie = JSON.parse(cookie);
                                            } catch (e) {}
                                    }

                                    jar[name] = cookie;

                                    if (key === name) {
                                            break;
                                    }
                            } catch (e) {}
                    }

                    return key ? jar[key] : jar;
            }

            api.set = set;
            api.get = function (key) {
                    return get(key, false /* read as raw */);
            };
            api.getJSON = function (key) {
                    return get(key, true /* read as json */);
            };
            api.remove = function (key, attributes) {
                    set(key, '', extend(attributes, {
                            expires: -1
                    }));
            };

            api.defaults = {};

            api.withConverter = init;

            if ( $ ) {
                    $.cookie = api;
                    $.removeCookie = api.remove;
            }

            return api;
    }

    return init(function () {});
}));

var config = {
    authorization_uri   :   'https://oauth2-dev.irm.kr/AuthServer/web/authorize',
    token_uri           :   'https://oauth2-dev.irm.kr/AuthServer/rest/oauth2/token',
    sign_out_uri        :   'https://oauth2-dev.irm.kr/AuthServer/web/signout',
    scope               :   'refreshToken',
    client_id           :   'cssstudy',
    client_secret       :   'cssstudy',
    redirect_uri        :   'https://masonkwon.github.io/cssStudy/mason/main.html',
    host_uri            :   'https://masonkwon.github.io/cssStudy/mason/test2.html',
    resource_server_uri :   'https://xdsserver-dev.irm.kr'
}


/**
* Simple Base64 encoding
* @param {string} s
* @returns {string}
*/
const ibase64 = function(s) {
    return window.btoa(unescape(encodeURIComponent(s)));
};


/*
* iutilSetCookie
* @param {string} cookie_name : Cookie key name
* @param {string} cookie_value : Cookie value
* @param {Date} cookie_expire : Expire date
*/
function iutilSetCookie(cookie_name, cookie_value, cookie_expire, cookie_domain){
    let _ret = true;

    if( cookie_name == null || cookie_name == undefined ){
            _ret = false;
    }

    if( cookie_expire == null || cookie_expire == undefined ){
            cookie_expire = new Date(new Date().getTime() + 3600 * 1000); // 1 hour
    }

    if( cookie_domain == null || cookie_domain == undefined ){
            cookie_domain = "/";
    }

    if( _ret ){
            // Cookies.set(cookie_name, cookie_value, {expires: cookie_expire}, cookie_domain);
            document.cookie = cookie_name +"="+ cookie_value + ";expires="+ cookie_expire +";path="+ cookie_domain;
    }

    return _ret;
}
