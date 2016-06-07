angular.module("portfolio")

.directive('navbar', function(){
  return {
    restrict: "EA",
    templateUrl: "app/shared/navbar/navbar.html"
  };

})
