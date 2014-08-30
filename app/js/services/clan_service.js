angular.module("app").factory("BookService", function($q, $http) {

  var getMembers = function() {
    return $http.get('/members');
  };

  return { getMembers: getMembers };
});
