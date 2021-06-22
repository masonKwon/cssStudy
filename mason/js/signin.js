

function requestAuthorization() {
    var siginInURL =
        config.authorization_uri +
        '?response_type=code' +
        '&scope=' + config.scope +
        '&client_id=' + encodeURI(config.client_id) +
        '&redirect_uri=' + encodeURI(config.redirect_uri) +
        '&state=';
    location.href = siginInURL;
}