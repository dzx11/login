angular.module('myApp').controller('loginCtrl', ['$location', '$scope', 'dataServiceMock', 'stateService', function ($location, $scope, dataServiceMock, stateService) {
    
    
    //models
    $scope.login = '';
    $scope.pw = '';
    //functions
    $scope.clickRegister = clickRegister;
    $scope.showLoginError = showLoginError;
    
    var hasAttemptedLogin = false;
    
    init();
    function clickRegister () {
        if ($scope.login.length > 0) {
            $location.path('register');
        } else {
            hasAttemptedLogin = true;
        }
    }
    
    function showLoginError () {
        if ($scope.login.length <= 0 && hasAttemptedLogin) {
            return true;
        } else {
            return false;
        }
    }
        
    
    function init () {
        if (stateService.loggedIn) {
            //if we are already logged in, redirect to success page
            $location.path('/login_success');
        }
    }
}]);