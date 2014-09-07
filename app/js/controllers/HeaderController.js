angular.module("app").controller('HeaderController', function($rootScope,$scope, $location, AuthenticationService) {
    $scope.title = "Header";

    var onLogoutSuccess = function(response) {
        $location.path('/login');
        $rootScope.isLogged = false;
    };

    $scope.logout = function() {
        AuthenticationService.logout().success(onLogoutSuccess);
    };
});