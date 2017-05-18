var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
    })
    .when("/register", {
        templateUrl : "templates/register.html",
        controller: "registrationCtrl"
    })
    .when("/pw_reset", {
        templateUrl : "templates/pw_reset.html",
        controller: "pwResetCtrl"
    })
    .when("/login_success", {
        templateUrl : "templates/login_success.html",
        controller: "successLoginCtrl",
    })
    .otherwise({
        redirectTo : "/"
    });
});
