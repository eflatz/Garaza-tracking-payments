angular.module("app").controller('LoginController', function($rootScope, $scope, $location, AuthenticationService) {
  $scope.credentials = { username: "eflatz", password: "emilio" };

  var onLoginSuccess = function() {
    $rootScope.isLogged = true;
    $location.path('/home');
  };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials).success(onLoginSuccess);
  };
});
