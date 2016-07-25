/**
 * Created by mgalli200 on 7/13/16.
 */
app.controller('contactCtrl', function($scope, $window) {
    $scope.photo = "app/img/hanging_lake.jpg";
    $scope.allFields = function() {
        var passes = true;
        var fillIn = document.getElementsByClassName("input");
        for (var i = 0; i < fillIn.length; i++) {
            var input = fillIn[i].value;
            var field = fillIn[i].name;
            if (field == "message") {
                console.log("THIS IS ThE MESSAGE:" + "**" + input + "**");
            }
            console.log(field);
            if (input.length == 0) {
                switch (field) {
                    case "firstname":
                        alert("Please fill in your first name");
                        break;
                    case "lastname":
                        alert("Please fill in your last name");
                        break;
                    case "email":
                        alert("Please fill in your email");
                        break;
                    case "_subject":
                        alert("Please provide a subject");
                        break;
                }
                passes = false;
                break;
            }
            if (field == "message" && (input == " " || input.length == 0)) {
                passes = false;
                alert("Please write a message")
            }
            if (field == "email" && !input.includes('@')) {
                alert("Please provide a valid email");
                passes = false;
                break;
            }
        }
        if (passes) {
            var submitButton = document.getElementById("submit");
            submitButton.setAttribute('type', 'submit');
        }

    };
});