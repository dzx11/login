angular.module('myApp').controller('pwResetCtrl', ['$scope', 'dataServiceMock', 'stateService', function ($scope, dataServiceMock, stateService) {
    
    //models
    $scope.login = '';
    //functions
    $scope.clickReset = clickReset;
    
    function clickReset () {
        dataServiceMock.checkLoginExists($scope.login).then(function(exists) {
            if (exists) {
                dataServiceMock.sendReset($scope.login);
                //display success message
            } else {
                //display account not found
            }
        });
    }
}]);