angular.module("portfolio").directive("footerDirective", function() {
  return {
    restrict: "E",
    templateUrl: "../views/directivesViews/footer.html",
    controller: function($scope, $window) {
      // window.location = 'file.doc';
      console.log($window.open);
      $scope.file = "./docs/resume.docx";
      $scope.download = function () {
        $window.open($scope.file);
      };
    }
  };
});
