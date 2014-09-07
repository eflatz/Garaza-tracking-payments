angular.module("app").controller('GroupNewController', function($scope, $resource, $location) {
    $scope.title = "New Member";
    var GroupNew = $resource("http://localhost:3000/groups");
    var ng = new GroupNew();

    $scope.saveGroup = function(){
        ng.$save();
    };
});
