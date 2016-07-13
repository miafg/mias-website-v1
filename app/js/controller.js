
app.controller('myCtrl', ['$scope', function($scope) {
	$scope.title = "Mia Froehling Gallier";
	
	$scope.goToAboutMe = function() {
		$state.go("aboutMe.html");

	}
}]);

