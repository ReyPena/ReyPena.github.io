angular.module("portfolio").service("aboutService", function ($http, $q) {

  var deferred = $q.defer();

  $http.get("../json/thechnologies.json").then(function (data) {
    deferred.resolve(data);
  });

  this.getTech = function () {
    return deferred.promise;
  };

});
