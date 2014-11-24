angular.module("app").controller('EventsController', function($scope, $resource, $location) {
    $scope.title = "Events";
    // mandatory for row edit directive
    $scope.read = true;

    var events = $resource("http://localhost:3000/events", {}, {'update':{method:'PUT', isArray:false}});
    var groups = $resource("http://localhost:3000/groups");

    $scope.groups = groups.query();
});