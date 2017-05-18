angular.module('myApp').service('dataServiceMock', ['$q', function ($q) {
    var service = {};
    service.checkPW = checkPW;
    
    return service;
    
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
}]);