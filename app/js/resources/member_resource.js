angular.module("app").factory("MemberResource", function($q, $resource) {
  return $resource('/members');
});
