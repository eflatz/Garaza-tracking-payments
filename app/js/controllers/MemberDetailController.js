angular.module("app").controller('MemberDetailController', function($scope, $resource, $routeParams, $location) {
    $scope.title = "Member details";
    // mandatory for row edit directive

    var members = $resource("http://localhost:3000/members", {}, {'update':{method:'PUT', isArray:false}});
    var groups = $resource("http://localhost:3000/groups", {});
    members.query({}, function(data){
        $scope.member = _.first(_.filter(data, function(mem){
            return mem.id == $routeParams.memberId;
        }));
    });
    $scope.group = groups.query({}, function(data) {
        $scope.group = _.first(_.filter(data, function (mem) {
            return mem.id == $scope.member.grupa_id;
        }));
    });
});