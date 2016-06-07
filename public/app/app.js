angular.module("portfolio", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/components/home/home.html',
      controller: 'homeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/components/about/about.html',
      controller: 'aboutCtrl'
    })
    .state('work', {
      url: '/work',
      templateUrl: 'app/components/work/work.html',
      controller: 'workCtrl'
    });


    $urlRouterProvider.otherwise('/home');
});
