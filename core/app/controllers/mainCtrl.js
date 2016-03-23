angular.module("portfolio").controller("mainCtrl", function ($scope, $window, $document, $location, $state, $rootScope) {

  console.log(
    ".------------------." + "\n" +
    "| .--------------. |" + "\n" +
    "| |  _______     | |" + "\n" +
    "| | |_   __ \\    | |" + "\n" +
    "| |   | |__) |   | |" + "\n" +
    "| |   |  __ /    | |" + "\n" +
    "| |  _| |  \\ \\_  | |" + "\n" +
    "| | |____| |___| | |" + "\n" +
    "| |              | |" + "\n" +
    "| '--------------' |" + "\n" +
    "'------------------'" + "\n" +
    "|  email: zonickblack@gmail.com                     |" + "\n" +
    "|  inkedin: https://www.linkedin.com/in/reypena   |" + "\n" +
    "|  github: https://github.com/ReyPena             |" + "\n" + "\n" +
    "Hello my name is Rey im a web developer, and a passionate designer who is enthusiastic about embracing new technologies and carefully crafting elegant web applications." + "\n" +
    "I'm an autodidactic person who is independent, looking for an opportunity to gain employment with a company or institution that offers me a consistently positive atmosphere to learn and implement new technologies for the betterment of myself and the organization."
  );

  // angular.element($window).bind("scroll", function(event) {
  //   console.log($document[0].scrollingElement.scrollHeight -  5);
  //   // scroll to the botom
  //   if ($document[0].scrollingElement.scrollHeight - ($window.innerHeight + $document[0].scrollingElement.scrollTop) < 1) {
  //     console.log($location.path());
  //     switch ($location.path()) {
  //       case "/":
  //         $state.go("about");
  //         window.scrollTo(0, 1);
  //         break;
  //       case "/about":
  //         $state.go("projects");
  //         window.scrollTo(0, 1);
  //         break;
  //       case "/projects":
  //         $state.go("experience");
  //         window.scrollTo(0, 1);
  //         break;
  //     }
  //   }
  //   // scroll to the top
  //   if ($document[0].scrollingElement.scrollTop < 1) {
  //     console.log($location.path());
  //     switch ($location.path()) {
  //       case "/experience":
  //         $state.go("projects");
  //         window.scrollTo(0, $document[0].scrollingElement.scrollHeight - 8);
  //         break;
  //       case "/projects":
  //         $state.go("about");
  //         window.scrollTo(0, $document[0].scrollingElement.scrollHeight - 8);
  //         break;
  //       case "/about":
  //         $state.go("home");
  //         window.scrollTo(0, $document[0].scrollingElement.scrollHeight - 8);
  //         break;
  //     }
  //   }
  // });
});
