angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/members', {
      templateUrl: 'members.html',
      controller: 'MembersController'
  });

  $routeProvider.when('/member-new', {
        templateUrl: 'member-new.html',
        controller: 'MemberNewController'
  });

  $routeProvider.when('/group-new', {
        templateUrl: 'group-new.html',
        controller: 'GroupNewController'
  });

  $routeProvider.when('/service-new', {
      templateUrl: 'service-new.html',
      controller: 'ServiceNewController'
  });


  $routeProvider.otherwise({ redirectTo: '/login' });

});
