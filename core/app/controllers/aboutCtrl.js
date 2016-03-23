angular.module("portfolio").controller("aboutCtrl", function ($scope, aboutService) {

  $scope.myTechs = aboutService.mytechs;

  $scope.show = true;

  $scope.cardAction = function (index) {

    $scope.show = !$scope.show;
    return $scope.myTechs[index].showMe = !$scope.show;
  };

});
