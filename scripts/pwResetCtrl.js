angular.module('myApp').controller('pwResetCtrl', ['$scope', '$timeout', 'dataServiceMock', 'stateService', function ($scope, $timeout, dataServiceMock, stateService) {
    
    //models
    $scope.login = '';
    $scope.usedLogin = '';//for info messages
    //functions
    $scope.clickReset = clickReset;
    $scope.copy = angular.copy; //needed in template
    $scope.showLengthError = showLengthError;
    $scope.showNotFound = false; //login has not been found
    $scope.showSuccess = false; //pw has been reset
    
    var hasAttemptedReset = false;
    
    function clickReset () {
        var timer1, timer2;
        hasAttemptedReset = true;
        if ($scope.login.length > 0) {
            dataServiceMock.checkLoginExists($scope.login).then(function(exists) {
                $scope.usedLogin = angular.copy($scope.login);
                if (exists) {
                    $timeout.cancel(timer1);//prevent old timers from causing glitches
                    dataServiceMock.sendReset($scope.login);
                    //display success message
                    $scope.showSuccess = true;
                    timer1 = $timeout(function () {
                        //hide after x seconds
                        $scope.showSuccess = false;
                    }, 4000);
                } else {
                    $timeout.cancel(timer2);//prevent old timers from causing glitches
                    $scope.showNotFound = true;
                    timer2 = $timeout(function () {
                        //hide after x seconds
                        $scope.showNotFound = false;
                    }, 4000);
                }
            });
        } else {
            return;//show error message
        }
    }
    
    function showLengthError ()  {
        if (hasAttemptedReset && $scope.login.length < 1) {
            return true;
        } else {
            return false;
        }
    }
}]);