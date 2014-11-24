angular.module("app").controller('MembersController', function($scope, $resource, $location) {
    $scope.title = "Members";
    // mandatory for row edit directive
    $scope.read = true;
    $scope.predicateMembers = 'grupa_id';

    var members = $resource("http://localhost:3000/members", {}, {'update':{method:'PUT', isArray:false}});
    var groups = $resource("http://localhost:3000/groups", {});
    $scope.groups = groups.query();
    $scope.members = members.query();
    $scope.groupDesc = function(groupId){
        var g = _.filter($scope.groups, function(obj){
            return obj.id == groupId;
        });
        return g[0].opis;
    };


    // called from row edit directive
    $scope.resourceUpdate = function(members){
        members.$update();
    };

    // called from row edit directive
    $scope.resourceDelete = function(members){
        members.$delete({id:member.id});
    };
});