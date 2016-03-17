angular.module("portfolio").config(function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "../views/routeViews/home/home.html"
    })
    .state("projects", {
      url: "/projects",
      templateUrl: "../views/routeViews/projects/projects.html",
    })
    .state("experience", {
      url: "/experience",
      templateUrl: "../views/routeViews/experience/experience.html",
    })
    .state("about", {
      url: "/about",
      templateUrl: "../views/routeViews/about/about.html",
    });

  $urlRouterProvider
    .otherwise("/");

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $uiViewScrollProvider.useAnchorScroll();
});
