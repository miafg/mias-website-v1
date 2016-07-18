/**
 * Created by mgalli200 on 7/13/16.
 */
app.controller('photosCtrl', function($scope) {
    $scope.aspen = [];
    $scope.twinSisters = [];
    $scope.crestedButte = [];
    $scope.arizona = [];
    $scope.mesaVerde = [];
    var dirAsp = "app/img/aspen/";
    var dirTwinSis = "app/img/twin\ sisters/";
    var dirCrested = "app/img/crested\ butte/";
    var dirArizona = "app/img/arizona/";
    var dirMesaVerde = "app/img/mesa\ verde/";
    for (var i = 1; i < 15; i++) {
        if (i < 5) {
            $scope.aspen.push(dirAsp + "img" + i + ".jpg");
        }
        if (i < 4) {
            $scope.twinSisters.push(dirTwinSis + "img" + i + ".jpg");
        }
        if (i < 6) {
            $scope.arizona.push(dirArizona + "img" + i + ".jpg");
        }
        if (i < 9) {
            $scope.mesaVerde.push(dirMesaVerde + "img" + i + ".jpg");
        }
        $scope.crestedButte.push(dirCrested + "img" + i + ".jpg");
    }
});