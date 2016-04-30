var app;
(function(){
  app = angular.module('api', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');
    $mdThemingProvider.theme('success-toast');
    $mdThemingProvider.theme('error-toast');
    
    $mdThemingProvider.alwaysWatchTheme(true);
  })  
})();

app.controller('mainController', function($scope, $mdToast){

    $scope.api = api;

    $scope.api.onSuccess = function(message){
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top right')
            .hideDelay(2500)
            .theme("success-toast")
        );
    };

    $scope.api.onError = function(message){
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top right')
            .hideDelay(2500)
            .theme("error-toast")
        );
    };

    $scope.api.onSuccess('Connecting ....');

    $scope.toggleRelay = function() {
        $scope.api.toggleRelay($scope.api.isOn);
    };

    $scope.api.updateUI = function(){
        $scope.$apply();
    };

});