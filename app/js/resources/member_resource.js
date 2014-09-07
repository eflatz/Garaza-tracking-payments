angular.module("app").factory("MemberResource", function($q, $resource) {
  return $resource('http://localhost:3000/members');
});
