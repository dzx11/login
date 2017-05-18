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
        var deferred = $q.defer();
        if (login && pw) {
            deferred.resolve(true);
        } else {
            deferred.resolve(false);
        }
        return deferred.promise;
    }
    
    function getAvatar (login) {
        //retrieves the avatar for a login
        var deferred = $q.defer();
        if (login) {
            deferred.resolve('sample_avatar.png');
        } else {
            deferred.reject('missing login');
        }
        return deferred.promise;
    }
    
    function sendReset(login) {
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
}]);