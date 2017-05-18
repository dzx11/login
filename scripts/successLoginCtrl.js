angular.module('myApp').controller('successLoginCtrl', ['$location', '$scope', 'dataServiceMock', 'stateService', function ($location, $scope, dataServiceMock, stateService) {
    
    init();
    function init () {
        if (stateService.loggedIn) {
            $scope.avatarImg = stateService.loginAvatar;
            $scope.userName = stateService.loginName;
        } else {
            $location.path('/');//redirect to login page
        }
    }
}]);