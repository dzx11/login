var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/login.html"
    })
    .when("/register", {
        templateUrl : "templates/register.html"
    })
    .when("/pw_reset", {
        templateUrl : "templates/pw_reset.html"
    })
    .when("/login_success", {
        templateUrl : "templates/login_success.html"
    })
    .otherwise({
        templateUrl : "templates/login.html"
    });
});
