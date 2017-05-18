angular.module('myApp').controller('successLoginCtrl', ['$scope', 'dataServiceMock', 'stateService', function ($scope, dataServiceMock, stateService) {
    $scope.avatarImg = "sample_avatar.png";
    $scope.userName = "test123";
}]);