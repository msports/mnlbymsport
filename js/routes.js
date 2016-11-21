angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.stand', {
    url: '/standing',
    views: {
      'tab2': {
        templateUrl: 'templates/stand.html',
        controller: 'standCtrl'
      }
    }
  })

  .state('tabsController.topScore', {
    url: '/topscore',
    views: {
      'tab4': {
        templateUrl: 'templates/topScore.html',
        controller: 'topScoreCtrl'
      }
    }
  })

  .state('tabsController.highLight', {
    url: '/watch',
    views: {
      'tab3': {
        templateUrl: 'templates/highLight.html',
        controller: 'highLightCtrl'
      }
    }
  })

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('fixtures', {
    url: '/fixtures',
    templateUrl: 'templates/fixtures.html',
    controller: 'fixturesCtrl'
  })

$urlRouterProvider.otherwise('/page1/home')

  

});