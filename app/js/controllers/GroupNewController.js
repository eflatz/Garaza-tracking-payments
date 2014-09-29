angular.module("app").controller('GroupNewController', function($scope, $resource, $location) {
    $scope.title = "New group";

    var Groups = $resource("http://localhost:3000/groups");
    var ng = new Groups();
    $scope.saveGroup = function(){
        ng.naziv = $scope.naziv;
        ng.opis = $scope.opis;
        ng.$save(function(){
            $location.path("/groups");
        });
    };
});
