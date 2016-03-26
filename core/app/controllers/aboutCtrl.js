angular.module("portfolio").controller("aboutCtrl", function($scope, aboutService) {

  $scope.myTechs = aboutService.mytechs;

  $scope.show = false;

  var result = document.getElementsByClassName("ng-enter");

  $scope.cardAction = function(index) {
    $scope.myTechs[index].showMe = !aboutService.mytechs[index].showMe;
  };

});
