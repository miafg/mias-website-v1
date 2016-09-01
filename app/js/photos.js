/**
 * Created by mgalli200 on 7/13/16.
 */
app.controller('photosCtrl', function($scope) {
    $scope.aspen = [];
    $scope.twinSisters = [];
    $scope.crestedButte = [];
    $scope.arizona = [];
    $scope.mesaVerde = [];
    $scope.albert = [];
    $scope.conundrum = [];
    $scope.grays = [];
    $scope.holyCross = [];
    $scope.austria = [];
    var dirAsp = "app/img/aspen/";
    var dirTwinSis = "app/img/twin\ sisters/";
    var dirCrested = "app/img/crested\ butte/";
    var dirArizona = "app/img/arizona/";
    var dirMesaVerde = "app/img/mesa\ verde/";
    var dirAlbert = "app/img/albert/";
    var dirConundrum = "app/img/conundrum/";
    var dirGrays = "app/img/grays\ and\ torreys/";
    var dirHolyCross = "app/img/mt\ holy\ cross/";
    var dirAustria = "app/img/austria/";
    for (var i = 1; i < 25; i++) {
        if (i < 4) {
            $scope.twinSisters.push(dirTwinSis + "img" + i + ".jpg");
        }
        if (i < 5) {
            $scope.aspen.push(dirAsp + "img" + i + ".jpg");
        }
        if (i < 6) {
            $scope.arizona.push(dirArizona + "img" + i + ".jpg");
        }
        if (i < 8) {
            $scope.grays.push(dirGrays + "img" + i + ".jpg");
            $scope.conundrum.push(dirConundrum + "img" + i + ".jpg");
        }
        if (i < 9) {
            $scope.mesaVerde.push(dirMesaVerde + "img" + i + ".jpg");
        }
        if (i < 11) {
            $scope.albert.push(dirAlbert + "img" + i + ".jpg");
        }
        if (i < 15) {
            $scope.crestedButte.push(dirCrested + "img" + i + ".jpg");
        }
        if (i < 17) {
            $scope.holyCross.push(dirHolyCross + "img" + i + ".jpg");
        }
        if (i < 25) {
            $scope.austria.push(dirAustria + "img" + i + ".jpg");
        }
    }
    
});