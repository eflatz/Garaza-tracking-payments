angular.module("app").controller('MembersController', function($scope, $resource, $location) {
    $scope.title = "Members";
    // mandatory for row edit directive
    $scope.read = true;

    var services = $resource("http://localhost:3000/members", {}, {'update':{method:'PUT', isArray:false}});
    $scope.services = services.query();

    // called from row edit directive
    $scope.resourceUpdate = function(members){
        members.$update();
    };

    // called from row edit directive
    $scope.resourceDelete = function(members){
        members.$delete({id:member.id});
    };
});