
app.controller('myCtrl', ['$scope', function($scope) {
	$scope.title = "Welcome to Mia's Website";
	$scope.homepageImg = "../img/maroon_bells.jpg";
	$scope.goToAboutMe = function() {
		$state.go("aboutMe.html");

	}
}]);

