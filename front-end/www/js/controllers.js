appCtrl = angular.module('starter.controllers', [])

appCtrl.controller('DashCtrl', function($scope, $http) {
  $scope.userData = {}

  $scope.newUser = function(){
    console.log($scope.userData)
    var data = JSON.stringify({"user": $scope.userData})
    console.log(data)
    var res = $http({
      method: 'POST',
      url: 'http://localhost:3000/users',
      headers: {'Content-Type': 'application/json'},
      data: data
    }).then(
      function() {
        console.log(':)');
      },
      function() {
        console.log(':(');
      });

  }
})

appCtrl.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

appCtrl.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})



