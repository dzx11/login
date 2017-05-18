angular.module('myApp').service('dataServiceMock', ['$q', function ($q) {
    var service = {};
    service.checkLoginExists = checkLoginExists;
    service.checkPW = checkPW;
    service.getAvatar = getAvatar;
    service.sendReset = sendReset;
    
    return service;
    
    function checkLoginExists (login) {
        //return a promise with true value if login exists,
        //false otherwise
        var deferred = $q.defer();
        if (login) {
            deferred.resolve(true);
        } else {
            deferred.resolve(false);
        }
        return deferred.promise;
    }
    
    function checkPW (login, pw) {
        //return a promise with true value if pw correct,
        //false if pw incorrect
        //mock: always return true if login & password length > 0
        var deferred = $q.defer();
        if (login.length > 0 && pw.length > 0) {
            deferred.resolve(true);
        } else {
            deferred.resolve(false);
        }
        return deferred.promise;
    }
    
    function getAvatar (login) {
        //retrieves the avatar for a login
        //mock: return mock if login length > 0
        var deferred = $q.defer();
        if (login.length > 0) {
            deferred.resolve('sample_avatar.png');
        } else {
            deferred.reject('missing login');
        }
        return deferred.promise;
    }
    
    function sendReset(login) {
        //return a promise with true value if login exists,
        //false otherwise
        //mock: always return true for login length > 0
        var deferred = $q.defer();
        if (login.length > 0) {
            deferred.resolve(true);
        } else {
            deferred.resolve(false);
        }
        return deferred.promise;
    }
}]);