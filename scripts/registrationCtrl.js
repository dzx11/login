angular.module('myApp').controller('registrationCtrl', ['$location', '$log', '$scope', '$timeout', 'dataServiceMock', 'stateService', function ($location, $log, $scope, $timeout, dataServiceMock, stateService) {
    
    //models
    $scope.login = '';
    $scope.loginError = 'Login needs to be at least 1 character.';
    $scope.pw = '';
    $scope.pwError = 'Password is incorrect';
    //functions
    $scope.clickLogin = clickLogin;
    $scope.clickReset = clickReset;
    $scope.showLoginError = showLoginError;
    $scope.showPWError = false;
    
    var hasAttemptedLogin = false;
    
    function clickLogin () {
        var timer;
        hasAttemptedLogin = true;
        if ($scope.login.length < 1) {
            //display error message
            return;
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
                    //display error message for x seconds
                    $scope.showPWError = true;
                    $timeout.cancel(timer);//prevent old timers from causing glitches
                    timer = $timeout(function () {
                        $scope.showPWError = false;
                    }, 4000);
                }
            }).catch(function(error) {
                $log.error(error);//log the server error
            });
        }
    }
    
    function clickReset () {
        $location.path('pw_reset');//redirect to reset
    }
    
    function showLoginError () {
        if ($scope.login.length <= 0 && hasAttemptedLogin) {
            return true;
        } else {
            return false;
        }
    }
}]);