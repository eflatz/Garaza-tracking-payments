angular.module("app").controller('MembersController', function($scope, $resource, $location) {
    $scope.title = "Members";
    $scope.members = $resource("localhost:3000/members");

    $scope.newMember = function(){
        $location.path('/new-member');
    };
});