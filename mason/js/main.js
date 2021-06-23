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

    requestToken();
});

function requestToken() {
    var res_access_token = ""; // ex) access_token: "......"
    var res_refresh_token= ""; // ex) refresh_token: "......"
    var res_token_type   = ""; // ex) token_type: "Bearer"
    var res_expires_in   = ""; // ex) expires_in: 3600
    var res_scope        = ""; // ex) scope: "read"
    var res_userinfo     = {};

    // Make header & payload
    var accessTokenRequest_headers = {};
    accessTokenRequest_headers.Authorization = 'Basic ' + ibase64(_s_client_id + ':' + _s_client_secret);
    var accessTokenRequest_data = "grant_type=authorization_code&code=" + _p_code + "&redirect_uri=" + encodeURIComponent( _s_redirect_uri );

}