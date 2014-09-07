angular.module("app").controller('MemberNewController', function($scope, $resource, $location) {
    $scope.title = "New Member";
    var MemberNew = $resource("http://localhost:3000/members");
    var nm = new MemberNew({ime: $scope.ime, prezime:$scope.prezime});

    $scope.saveMember = function(){
        nm.$save();
    };
});
