angular.module("portfolio").controller("mainCtrl", function ($scope, $window, $document, $location, $state, $rootScope) {

  angular.element($window).bind("scroll", function(event) {
    console.log($document[0].scrollingElement.scrollHeight -  5);
    // scroll to the botom
    if ($document[0].scrollingElement.scrollHeight - ($window.innerHeight + $document[0].scrollingElement.scrollTop) < 1) {
      console.log($location.path());
      switch ($location.path()) {
        case "/":
          $state.go("about");
          window.scrollTo(0, 1);
          break;
        case "/about":
          $state.go("projects");
          window.scrollTo(0, 1);
          break;
        case "/projects":
          $state.go("experience");
          window.scrollTo(0, 1);
          break;
      }
    }
    // scroll to the top
    if ($document[0].scrollingElement.scrollTop < 1) {
      console.log($location.path());
      switch ($location.path()) {
        case "/experience":
          $state.go("projects");
          window.scrollTo(0, $document[0].scrollingElement.scrollHeight - 8);
          break;
        case "/projects":
          $state.go("about");
          window.scrollTo(0, $document[0].scrollingElement.scrollHeight - 8);
          break;
        case "/about":
          $state.go("home");
          window.scrollTo(0, $document[0].scrollingElement.scrollHeight - 8);
          break;
      }
    }
  });
});
