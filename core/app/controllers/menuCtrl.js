angular.module("portfolio").controller("menuCtrl", function ($scope, $location) {
  $scope.isActive = function (destination) {
    return destination === $location.path();
  };
});
