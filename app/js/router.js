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

  $routeProvider.when('/members/:memberId', {
      templateUrl: 'member-details.html',
      controller: 'MemberDetailController'
  });

  $routeProvider.when('/facilitator-new', {
        templateUrl: 'facilitator-new.html',
        controller: 'FacilitatorNewController'
  });

  $routeProvider.when('/facilitators', {
      templateUrl: 'facilitators.html',
      controller: 'FacilitatorsController'
  });

  $routeProvider.when('/member-new', {
      templateUrl: 'member-new.html',
      controller: 'MemberNewController'
  });

  $routeProvider.when('/groups', {
      templateUrl: 'groups.html',
      controller: 'GroupsController'
  });

  $routeProvider.when('/group-new', {
        templateUrl: 'group-new.html',
        controller: 'GroupNewController'
  });

  $routeProvider.when('/events', {
      templateUrl: 'events.html',
      controller: 'EventsController'
  });

  $routeProvider.when('/event-new', {
      templateUrl: 'event-new.html',
      controller: 'EventNewController'
  });

  $routeProvider.when('/service-new', {
      templateUrl: 'service-new.html',
      controller: 'ServiceNewController'
  });

  $routeProvider.when('/services', {
      templateUrl: 'services.html',
      controller: 'ServicesController'
  });

  $routeProvider.when('/messages', {
      templateUrl:'messages.html',
      controller: 'MessagesController'
  });




  $routeProvider.otherwise({ redirectTo: '/home' });

});
