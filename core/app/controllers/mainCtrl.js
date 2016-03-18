angular.module("portfolio").controller("mainCtrl", function ($scope, $window, $document, $location, $state) {

  angular.element($window).bind("scroll", function(event) {
    if ($document[0].scrollingElement.scrollHeight - ($window.innerHeight + $document[0].scrollingElement.scrollTop) < 1) {
      console.log($location.path());
      switch ($location.path()) {
        case "/":
          $state.go("about");
          break;
        case "/about":
          $state.go("projects");
          break;
        case "/porjects":
          $state.go("experience");
          break;
      }
    }
  });
});
