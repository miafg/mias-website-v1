/**
 * Created by mgalli200 on 6/10/16.
 */
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })
        .when('/photos', {
            templateUrl: 'photos.html',
            controller: 'photosCtrl'
        })
        .when('/aboutme', {
            templateUrl: 'aboutMe.html',
            controller: 'aboutmeCtrl'
        })
        .when('/interests', {
            templateUrl: 'interests.html',
            controller: 'interestsCtrl'
        })
        .when('/experience', {
            templateUrl: 'experience.html',
            controller: 'experienceCtrl'
        })
        .otherwise({redirectTo: '/'});
});