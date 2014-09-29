angular.module("app").controller('ServicesController', function($scope, $resource, $location) {
    $scope.title = "Services";
    // mandatory for row edit directive
    $scope.read = true;

    var services = $resource("http://localhost:3000/services", {}, {'update':{method:'PUT', isArray:false}});
    $scope.services = services.query();

    // called from row edit directive
    $scope.resourceUpdate = function(service){
         service.$update();
    };

    // called from row edit directive
    $scope.resourceDelete = function(service){
        service.$delete({id:service.id});
    };
});