$(function() {
    console.log( "main ready!" );
    //u = url
    var u = location.href;
    var path="",query="",params;

    path = u.substr(0 , u.indexOf("?"));
    query = u.substr(u.indexOf("?") + 1);
    params= query.split('&');

    console.log("ms_console path : ", path);
    console.log("ms_console query : ", query);
    console.log("ms_console params : ", params);

    var _p_state = params[0].split('=');
    var _p_lang = params[1].split('=');
    var _p_code = params[2].split('=');

    requestToken(_p_state[1], _p_code[1]);
});

function requestToken(_p_state, _p_code) {

    console.log("ms_console state : ", state);
    console.log("ms_console lang : ", lang);
    console.log("ms_console code : ", code);

    var res_access_token = ""; // ex) access_token: "......"
    var res_refresh_token= ""; // ex) refresh_token: "......"
    var res_token_type   = ""; // ex) token_type: "Bearer"
    var res_expires_in   = ""; // ex) expires_in: 3600
    var res_scope        = ""; // ex) scope: "read"
    var res_userinfo     = {};

    // Make header & payload
    var accessTokenRequest_headers = {};
    accessTokenRequest_headers.Authorization = 'Basic ' + ibase64(config.client_id + ':' + config.client_secret);
    var accessTokenRequest_data = "grant_type=authorization_code&code=" + _p_code + "&redirect_uri=" + encodeURIComponent( config.redirect_uri );


    $.ajax({
        // async: false,
        method: 'GET',
        contentType: 'application/x-www-form-urlencoded',
        url: config.token_uri,
        dataType: 'json',
        cors: true ,
        crossDomain: true,
        crossOrigin: true,
        // xhrFields: {
        //     withCredentials: true
        // },
        data: accessTokenRequest_data,
        headers: accessTokenRequest_headers,
        beforeSend: function(xhr, obj){
            // xhr.withCredentials = true;
            if (beforesend && typeof beforesend === 'function') {
                beforesend(xhr, obj);
            }
        },
        success : function (res_tok) {
            res_access_token = res_tok.access_token;
            res_refresh_token = res_tok.refresh_token;
            res_token_type = res_tok.token_type;
            res_expires_in = res_tok.expires_in;
            res_scope = res_tok.scope;

            console.log("ms_console res_tok : ", res_tok)

            var requestUserinfo_header.Authorization = 'Bearer '+ res_access_token;

            $.ajax({
                // async: false,
                method: 'GET',
                contentType: 'multipart/form-data',
                url: config.resource_server_uri+"/api/user_myself",
                dataType: 'json',
                cors: true ,
                crossDomain: true,
                crossOrigin: true,
                // xhrFields: {
                //     withCredentials: true
                // },
                data: {
                    include_inside_vgroups : true,
                    include_outside_vgroups : true
                },
                headers: requestUserinfo_header,
                beforeSend: function(xhr, obj){
                    // xhr.withCredentials = true;
                    if (beforesend && typeof beforesend === 'function') {
                        beforesend(xhr, obj);
                    }
                },
                success : function (res_usr) {
                    console.log("ms_console res_usr : ", res_usr)

                    var _oauth_key_name = _s_client_id + '_access_token';
                    var _expireTime = new Date(new Date().getTime() + res_expires_in * 1000);
                    var _json_user = res_usr.user;
                    _json_user.vgroup_list.sort(function (a, b) {
                        return a.vgroup_name < b.vgroup_name ? -1 : a.vgroup_name > b.vgroup_name ? 1:0;
                    });

                    res_userinfo.user_name    = encodeURIComponent(_json_user.user_name);
                    res_userinfo.email        = _json_user.email;
                    res_userinfo.nick_name    = "";
                    res_userinfo.user_key     = _json_user.user_key;
                    res_userinfo.token        = res_access_token;
                    res_userinfo.tokenRef     = res_refresh_token;
                    res_userinfo.tokenType    = res_token_type;
                    res_userinfo.expire       = _expireTime;
                    res_userinfo.created_dttm = _json_user.created_dttm;
                    res_userinfo.action_id_list=[];
                    res_userinfo.vgroup_list  = _json_user.vgroup_list;
                    res_userinfo.inside_vgroup_list  = _json_user.inside_vgroup_list;
                    res_userinfo.outside_vgroup_list  = _json_user.outside_vgroup_list;

                    setUserInfo(res_userinfo);
                }
            });
        }
    });
}

function setUserInfo(user_info){
    //
    if( typeof __g_logon_type_token == "undefined" ){
        var __g_logon_type_token = window.__g_logon_type_token; // Read from window.
    }
    if( typeof __g_logon_type_cookie == "undefined" ){
        var __g_logon_type_cookie = window.__g_logon_type_cookie; // Read from window.
    }

    var _user_email = user_info.email;
    if( _user_email.indexOf("@") >= 0 ){
        _user_email = encodeURIComponent(_user_email); // @ => %40
    }

    // 2020-08-04 15:00, stephen
    if( __g_logon_type_token == true ){
        var _s_isStorage = iutilStorageAvailable(this.storage_name);
        if (_s_isStorage) {
            iutilStorageSet(this.storage_name, 'ss_ui', JSON.stringify(user_info));
            iutilStorageSet(this.storage_name, 'isAccess', user_info.user_key);
            iutilStorageSet(this.storage_name, 'email', _user_email);
        }
    }
    // End

    // 2020-08-04 11:45, stephen
    if( __g_logon_type_cookie == true ){
        // Make the array for ActionID
        var _actionid = [];
        var _actionid_txt = "";
        for( var _tmp_i = 0; _tmp_i < user_info.action_id_list.length; _tmp_i++ ){
            _actionid.push(user_info.action_id_list[_tmp_i].action_id);
        }
        if( _actionid.length == 1 ){
            _actionid_txt = _actionid[0];
        } else if( _actionid.length > 1 ){
            _actionid_txt = _actionid.join(",");
        }

        iutilSetCookie('isAccess', user_info.user_key, user_info.expire);
        iutilSetCookie('email', _user_email, user_info.expire);
        iutilSetCookie('ActionID', _actionid_txt, user_info.expire );
        iutilSetCookie('user_name', user_info.user_name, user_info.expire );
        iutilSetCookie('authority', 'admin', user_info.expire );
        // Cookies for IRM OAuth 1.0
        iutilSetCookie(NetConfig.getClient_id() +'_access_token', user_info.token, user_info.expire);
    }
    // End
}
