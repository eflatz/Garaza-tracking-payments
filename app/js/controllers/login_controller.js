angular.module("app").controller('LoginController', function($scope, $location, AuthenticationService) {
  $scope.credentials = { username: "eflatz", password: "emilio" };

  var onLoginSuccess = function() {
    $location.path('/home');
  };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials).success(onLoginSuccess);
  };
});
