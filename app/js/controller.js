
app.controller('myCtrl', ['$scope', function($scope) {
	$scope.title = "Welcome to Mia's Website";
	
	$scope.goToAboutMe = function() {
		$state.go("aboutMe.html");

	}
}]);

