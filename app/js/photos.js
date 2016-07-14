/**
 * Created by mgalli200 on 7/13/16.
 */
app.controller('photosCtrl', function($scope) {
    $scope.photos = [];
    var dir = "app/img/photosPage/";
    for (var i = 1; i < 15; i++) {
        $scope.photos.push(dir + "img" + i + ".jpg");
    }
});