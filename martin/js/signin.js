function requestAuthorization() {
    // console.log("wow login!");
    // var goToLogin = 
    //     config.authorization_uri;
        // console.log(goToLogin);
        // '?response_type=code'
        // '&client_id'
        // '&state'

    var siginInURL =
        config.authorization_uri +
        '?response_type=code' +
        '&scope=' + config.scope +
        '&client_id=' + encodeURI(config.client_id) +
        '&redirect_uri=' + encodeURI(config.redirect_uri) +
        '&state=';
    location.href = siginInURL;

    // _init();
}