angular.module('myApp').service('stateService', function () {
    var service = {};
    
    service.loggedIn = false;
    service.loginName = '';
    
    return service;
});