angular.module("portfolio").controller("projecstCtrl", function($scope, $sce, projectsService) {

  $scope.projects = projectsService.myProjects;

  $scope.trustSrc = function(src) {
    if (src){
      return $sce.trustAsResourceUrl(src);
    }
    else if (!src){
      return "./assets/img/no-url.png";
    }
  };

  $scope.webShow = function(index) {
    $scope.projects[index].show = !projectsService.myProjects[index].show;
  };

});
