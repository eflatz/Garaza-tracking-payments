angular.module("app").controller('FacilitatorsController', function($scope, $resource, $location) {
    $scope.title = "Facilitators";
    // mandatory for row edit directive
    $scope.read = true;

    var facilitators = $resource("http://localhost:3000/facilitators", {}, {'update':{method:'PUT', isArray:false}});
    $scope.facilitators = facilitators.query();

    // called from row edit directive
    $scope.resourceUpdate = function(facilitators){
        facilitators.$update();
    };

    // called from row edit directive
    $scope.resourceDelete = function(facilitators){
        facilitators.$delete({id:facilitators.id});
    };
});