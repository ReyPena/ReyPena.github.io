angular.module("portfolio").controller("aboutCtrl", function ($scope, aboutService) {

  var promise = aboutService.getTech();

  promise.then(function (data) {
    $scope.techs = data;
    console.log($scope.techs);
  });

  $scope.cardInfo = true;

  $scope.cardAction = function () {
    console.log("click");
    return $scope.cardInfo = !$scope.cardInfo;
  };

});
