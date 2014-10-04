angular.module("app").controller('MemberNewController', function($scope, $resource, $location) {
    $scope.title = "New member";

    var Members = $resource("http://localhost:3000/members");
    var nm = new Members();

    var groups = $resource("http://localhost:3000/groups");
    $scope.groups = groups.query();

    $scope.saveMember = function(){
        nm.ime = $scope.ime;
        nm.prezime = $scope.prezime;
        nm.grupa_id = $scope.grupa.id;
        nm.mobitel = $scope.mobitel;
        nm.$save(function(){
            $location.path("/members");
        });
    };
});
