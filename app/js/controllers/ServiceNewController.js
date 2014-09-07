angular.module("app").controller('ServiceNewController', function($scope, $resource, $location) {
    $scope.title = "New Service";
    var ServiceNew = $resource("http://localhost:3000/services");

    var ns = new ServiceNew();
    console.log("new service; ",ns);

    $scope.saveService = function(){
        ns.naziv = $scope.naziv;
        ns.opis = $scope.opis;
        ns.trajanje = $scope.trajanje;
        ns.cijena = $scope.cijena;
        ns.$save();
    };
});
