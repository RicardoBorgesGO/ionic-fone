angular.module('starter.controllers', [])

.controller('RamalCtrl', function($scope, $http) {
  $http.get('/api/voip/ramal').then(function(response) {
    $scope.ramais = response.data;
    $scope.contactImage = 'img/adam.jpg';
  });
})

.controller('ContatoFavoritoCtrl', function($scope, $http) {
  $http.get('/api/voip/contatoFavorito').then(function(response) {
    $scope.contatosFavoritos = response.data;
    $scope.contactImage = 'img/adam.jpg';
  });
})

.controller('ContatoFavoritoDetailCtrl', function($scope, $stateParams, $http) {
  $http.get('/api/voip/contatoFavorito/' + $stateParams.contatoFavoritoId).then(function(response) {
    $scope.contato = response.data;
  });
})

.controller('TelefoneCtrl', function($scope) {})

.controller('NewContactCtrl', function($scope) {})

.controller('ContatoInternoCtrl', function($scope, $http, Utils) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  /*$scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };*/

  $http.get('/api/voip/contatoInterno').then(function(response) {
    $scope.contatosInternos = response.data;
  });
})

.controller('ContatoInternoDetailCtrl', function($scope, $stateParams, $http) {
  $http.get('/api/voip/contatoInterno/' + $stateParams.contatoInternoId).then(function(response) {
    $scope.contato = response.data;
  });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ContatoExternoDetailCtrl', function($scope, $stateParams, $http) {
  $http.get('/api/voip/contatoExterno/' + $stateParams.contatoExternoId).then(function(response) {
    $scope.contato = response.data;
  });
})

.controller('ContatoExternoCtrl', function($scope, $http, $location, Chats) {
  /*
  $scope.settings = {
    enableFriends: true
  };
  */

  $http.get('/api/voip/contatoExterno').then(function(response) {
    $scope.contatosExternos = response.data;
  });

  $scope.addContact = function() {
    $location.path('/tab/new');
  };

});
