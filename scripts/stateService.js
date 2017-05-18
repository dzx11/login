angular.module('myApp').service('stateService', function () {
    var service = {};
    
    service.loggedIn = false;
    service.loginAvatar = '';//avatar url
    service.loginName = '';
    service.setLogin = setLogin;
    
    return service;
    
    function setLogin (login) {
        //set the login name and loggedin state
        service.loginName = login;
        service.loggedIn = true;
    }
});