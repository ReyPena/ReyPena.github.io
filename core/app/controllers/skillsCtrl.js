angular.module("portfolio").controller("skillsCtrl", function($scope, skillsService) {

  $scope.myTechs = skillsService.mytechs;

  // $scope.cardAction = function(tech) {
  //   var idx = $scope.myTechs.indexOf(tech);
  //   $scope.myTechs[idx].showMe = !skillsService.mytechs[idx].showMe;
  // };

});
