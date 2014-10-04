angular.module("app").controller('GroupNewController', function($scope, $resource, $location) {
    $scope.title = "New group";

    var Groups = $resource("http://localhost:3000/groups");
    var Services = $resource("http://localhost:3000/services");

    $scope.services = Services.query();
    var ng = new Groups();
    $scope.saveGroup = function(){
        ng.naziv = $scope.naziv;
        ng.opis = $scope.opis;
        ng.usluga_id = $scope.usluga_id;
        ng.termin_dan = $scope.termin_dan;
        ng.termin_sat = $scope.termin_sat;
        ng.$save(function(){
            $location.path("/groups");
        });
    };
});
