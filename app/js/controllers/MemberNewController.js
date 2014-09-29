angular.module("app").controller('MemberNewController', function($scope, $resource, $location) {
    $scope.title = "New member";

    var Members = $resource("http://localhost:3000/members");
    var nm = new Members();
    $scope.saveMember = function(){
        nm.ime = $scope.naziv;
        nm.prezime = $scope.opis;
        nm.$save(function(){
            $location.path("/members");
        });
    };
});
