angular.module('myApp').controller('registrationCtrl', ['$location', '$log', '$scope', 'dataServiceMock', 'stateService', function ($location, $log, $scope, dataServiceMock, stateService) {
    
    //models
    $scope.login = '';
    $scope.pw = '';
    //functions
    $scope.clickLogin = clickLogin;
    $scope.clickReset = clickReset;
    
    function clickLogin () {
        if (!$scope.login.length) {
            //display error message
        } else {
            dataServiceMock.checkPW($scope.login, $scope.pw).then(function(isCorrect) {
                if (isCorrect) {
                    stateService.setLogin($scope.login);
                    //get the avatar and save it
                    dataServiceMock.getAvatar($scope.login).then(function (result) {
                        stateService.loginAvatar = result;
                    }).catch(function (error) {
                        $log.error(error);//log the error
                    }).finally(function () {
                        $location.path('login_success');
                    });
                } else {
                    //display error message
                }
            }).catch(function(error) {
                $log.error(error);//log the server error
            });
        }
    }
    
    function clickReset () {
        $location.path('pw_reset');//redirect to reset
    }
}]);