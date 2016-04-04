angular.module("portfolio").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "../views/routeViews/home/home.html"
    })
    .state("projects", {
      url: "/projects",
      templateUrl: "../views/routeViews/projects/projects.html",
      controller: "projecstCtrl"
    })
    .state("about", {
      url: "/about",
      templateUrl: "../views/routeViews/about/about.html",
      controller: "aboutCtrl"
    })
    .state("experience", {
      url: "/experience",
      templateUrl: "../views/routeViews/experience/experience.html",
    });

  $urlRouterProvider
    .otherwise("/");

  $locationProvider.html5Mode({
    enabled: true
    // requireBase: false
  });
});
