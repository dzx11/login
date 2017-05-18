angular.module('myApp').controller('loginCtrl', ['$location', '$scope', 'dataServiceMock', 'stateService', function ($location, $scope, dataServiceMock, stateService) {
    
    
    //models
    $scope.login = '';
    $scope.pw = '';
    //functions
    $scope.clickRegister = clickRegister;
    
    init();
    function clickRegister () {
        if ($scope.login.length > 0) {
            $location.path('register');
        } else {
            //display error message
        }
    }
    
    function init () {
        if (stateService.loggedIn) {
            //if we are already logged in, redirect to success page
            $location.path('/login_success');
        }
    }
}]);