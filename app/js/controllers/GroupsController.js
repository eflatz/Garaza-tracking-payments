angular.module("app").controller('GroupsController', function($scope, $resource, $location) {
    $scope.title = "Groups";
    // mandatory for row edit directive
    $scope.read = true;
    $scope.predicate = 'termin_dan';

    var groups = $resource("http://localhost:3000/groups", {}, {'update':{method:'PUT', isArray:false}});
    $scope.groups = groups.query();

    // called from row edit directive
    $scope.resourceUpdate = function(group){
         group.$update();
    };

    // called from row edit directive
    $scope.resourceDelete = function(group){
        group.$delete({id:group.id});
    };
});