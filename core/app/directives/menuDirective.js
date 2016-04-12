angular.module("portfolio").directive("menuDirective", function () {
  return {
    restrict: "E",
    templateUrl:"../views/directivesViews/menu.html",
    controller:"menuCtrl"
  };
});
