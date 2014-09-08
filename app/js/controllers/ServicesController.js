angular.module("app").controller('ServicesController', function($scope, $resource, ServicesResource, $location) {
    $scope.title = "Services";
    $scope.read = true;
    $scope.write = true;
    $scope.edit = false;

    var services = $resource("http://localhost:3000/services");
    $scope.services = services.query();

    var selectedServiceId;
    $scope.serviceUpdate = function(sid){
        var serviceToUpdate = services.get({id:sid});
        var sr = ServicesResource.update({});
    };

    $scope.serviceEdit = function(){
       $scope.read = false;
       $scope.edit = true;
    };

    $scope.serviceDelete = function(){

    };



});