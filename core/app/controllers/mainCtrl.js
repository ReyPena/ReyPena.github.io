angular.module("portfolio").controller("mainCtrl", function ($scope, $window) {

  console.log("hey rey");
  angular.element($window).bind("scroll", function(event) {
  console.log(event);
});
});
