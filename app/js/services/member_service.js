angular.module("app").factory("MemberService", function($q, $http) {

  var getMembers = function() {
    return $http.get('/members');
  };

  return { getMembers: getMembers };
});
