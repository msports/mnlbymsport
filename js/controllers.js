angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading', function($scope, $stateParams, $http, $ionicLoading) {

  $scope.$on('$ionicView.enter', function(){
      $ionicLoading.show();

    $http.get('https://goldenlivescore.herokuapp.com/livescore').
  then(function(response) {
      $scope.livescore = response.data.livescore;
      $ionicLoading.hide();
  }, function(response) {

  });
 });
}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('standCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading', function($scope, $stateParams, $http, $ionicLoading) {

  $scope.$on('$ionicView.enter', function(){
      $ionicLoading.show();

    $http.get('https://goldenlivescore.herokuapp.com/standings/EPL').
  then(function(response) {
      $scope.stand = response.data;
      $ionicLoading.hide();
  }, function(response) {

  });
 });
}])
   
.controller('topScoreCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading', function($scope, $stateParams, $http, $ionicLoading) {

  $scope.$on('$ionicView.enter', function(){
      $ionicLoading.show();

    $http.get('https://goldenlivescore.herokuapp.com/scorers/EPL').
  then(function(response) {
      $scope.scorer = response.data;
      $ionicLoading.hide();
  }, function(response) {

  });
 });
}])
   
.controller('highLightCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('fixturesCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading', function($scope, $stateParams, $http, $ionicLoading) {

  $scope.$on('$ionicView.enter', function(){
      $ionicLoading.show();

    $http.get('https://msportapi.herokuapp.com/fixtures').
  then(function(response) {
      $scope.fixture = response.data;
      $ionicLoading.hide();
  }, function(response) {

  });
 });
}])
 