// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ion-floating-menu'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

//Filters
.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('telefone', {
    url: '/telefone',
    templateUrl: 'templates/telefone.html'
  })

  .state('ramal', {
    url: '/ramal',
    templateUrl: 'templates/ramal.html',
    controller: 'RamalCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.contatoFavorito', {
    url: '/contatoFavorito',
    views: {
      'tab-contatoFavorito': {
        templateUrl: 'templates/tab-contatoFavorito.html',
        controller: 'ContatoFavoritoCtrl'
      }
    }
  })

  .state('tab.contatoFavorito-detail', {
    url: '/contatoFavorito/:contatoFavoritoId',
    views: {
      'tab-contatoFavorito': {
        templateUrl: 'templates/contato-detail.html',
        controller: 'ContatoFavoritoDetailCtrl'
      }
    }
  })

  .state('tab.contatoInterno', {
      url: '/contatoInterno',
      views: {
        'tab-contatoInterno': {
          templateUrl: 'templates/tab-contatoInterno.html',
          controller: 'ContatoInternoCtrl'
        }
      }
    })

    .state('tab.contatoExterno-detail', {
      url: '/contatoExterno/:contatoExternoId',
      views: {
        'tab-contatoExterno': {
          templateUrl: 'templates/contato-detail.html',
          controller: 'ContatoExternoDetailCtrl'
        }
      }
    })

    .state('tab.contatInterno-detail', {
      url: '/contatoInterno/:contatoInternoId',
      views: {
        'tab-contatoInterno': {
          templateUrl: 'templates/contato-detail.html',
          controller: 'ContatoInternoDetailCtrl'
        }
      }
    })

    .state('tab.new', {
      url: '/new',
      views: {
        'tab-contatoExterno': {
          templateUrl: 'templates/new.html',
          controller: 'NewContactCtrl'
        }
      }
    })

  .state('tab.contatoExterno', {
    url: '/contatoExterno',
    views: {
      'tab-contatoExterno': {
        templateUrl: 'templates/tab-contatoExterno.html',
        controller: 'ContatoExternoCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/contatoFavorito');

});