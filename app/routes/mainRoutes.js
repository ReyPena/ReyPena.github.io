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
    .state("skills", {
      url: "/skills",
      templateUrl: "../views/routeViews/skills/skills.html",
      controller: "skillsCtrl"
    })
    .state("experience", {
      url: "/experience",
      templateUrl: "../views/routeViews/experience/experience.html",
    });

  $urlRouterProvider
    .otherwise("/");

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
});
