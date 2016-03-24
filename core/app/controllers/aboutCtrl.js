angular.module("portfolio").controller("aboutCtrl", function($scope, $timeout, aboutService) {

  $scope.myTechs = aboutService.mytechs;

  $scope.show = true;

  var result = document.getElementsByClassName("ng-enter");

  $scope.cardAction = function(index) {
    $scope.show = !$scope.show;
    $scope.myTechs[index].showMe = !$scope.show;
  };

});
