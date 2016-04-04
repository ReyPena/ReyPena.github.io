angular.module("portfolio").controller("aboutCtrl", function($scope, aboutService) {

  $scope.myTechs = aboutService.mytechs;

  $scope.show = false;

  $scope.cardAction = function(tech) {
    var idx = $scope.myTechs.indexOf(tech)
    $scope.myTechs[idx].showMe = !aboutService.mytechs[idx].showMe;
  };

});
