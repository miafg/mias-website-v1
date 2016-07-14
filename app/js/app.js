/**
 * Created by mgalli200 on 6/10/16.
 */
var app = angular.module('myApp', ['ngRoute']);

window.onload = function () {
    nav();
}

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/html/home.html',
            controller: 'homeCtrl'
        })
        .when('/photos', {
            templateUrl: 'app/html/photos.html',
            controller: 'photosCtrl'
        })
        .when('/aboutme', {
            templateUrl: 'app/html/aboutMe.html',
            controller: 'aboutmeCtrl'
        })
        .when('/contact', {
            templateUrl: 'app/html/contact.html',
            controller: 'contactCtrl'
        })
        .when('/experience', {
            templateUrl: 'app/html/experience.html',
            controller: 'experienceCtrl'
        })
        .otherwise({redirectTo: '/'});
}]);

var nav = function() {
    var buttons = document.getElementsByClassName("menu");
    for (var i = 0; i < buttons.length; i++) {
        var current = buttons.item(i);
        var text = current.textContent;
        //console.log(text);
        switch (text) {
            case "About Me":
                current.addEventListener('click', function() {
                    window.location.href = '#/aboutme';
                });
                break;
            case "Experience":
                current.addEventListener('click', function () {
                   window.location.href = '#/experience';
                });
                break;
            case "Photos":
                current.addEventListener('click', function () {
                    window.location.href = '#/photos';
                });
                break;
            case "Contact":
                current.addEventListener('click', function() {
                    window.location.href= '#/contact';
                });
                break;
            default:
                break;
        }
    }
    var mainTitle = document.getElementsByClassName("mainTitle").item(0).addEventListener('click', function() {
        window.location.href = "#/";
    });
};
