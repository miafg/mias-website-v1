/**
 * Created by mgalli200 on 7/13/16.
 */
app.controller('homeCtrl', function($scope) {
    $scope.homepageImg1 = "app/img/img1.jpg";
    $scope.homepageImg2 = "app/img/img2.jpg";
    $scope.homepageImg3 = "app/img/img3.jpg";
    $scope.homepageImg4 = "app/img/img4.jpg";
    navHome();

});

var navHome = function() {
    var containers = document.getElementsByClassName("container");
    for (var i = 0; i < containers.length; i++) {
        var current = containers.item(i);
        var text = current.getElementsByClassName("pageName").item(0).textContent;
        switch (text) {
            case "about me":
                current.addEventListener('click', function() {
                    window.location.href = "#/aboutme";
                });
                break;
            case "experience":
                current.addEventListener('click', function() {
                    window.location.href = "#/experience";
                });
                break;
            case "photos":
                current.addEventListener('click', function() {
                    window.location.href = "#/photos";
                });
                break;
            case "contact":
                current.addEventListener('click', function() {
                    window.location.href = "#/contact";
                });
                break;
            default:
                break;
        }
    }
};