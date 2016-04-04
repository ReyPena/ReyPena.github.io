angular.module("portfolio").directive("footerDirective", function() {
  return {
    restrict: "E",
    templateUrl: "../views/directivesViews/footer.html",
    controller: function($scope, $window) {
      $scope.file = "./assets/docs/resume.pdf";
      $scope.download = function () {
        $window.open($scope.file);
      };
    }
  };
});
