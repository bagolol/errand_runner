appCtrl.controller('Map2Ctrl', function($scope, $ionicLoading, $compile, $http, $stateParams, Tasks) {

$scope.tasks = []

// 

  ionic.Platform.ready(function() {

    $scope.updateMap = function(){
      $http.get('http://localhost:3000/tasks', {
      headers: {
                 'Authorization': window.localStorage['auth_token']
               }
               }).
    success(function(data, status, headers, config) {
      for (var i = 0; i < data.tasks.length; i++) {
        $scope.tasks.push(data.tasks[i])
      }
      $scope.placeMarkers()
      console.log($scope.tasks)
      $scope.task = $scope.tasks[$stateParams.taskId]
      console.log($scope.task)
    }).
    error(function(data, status, headers, config) {
    })
    }

    $scope.updateMap()
    

    navigator.geolocation.getCurrentPosition(function(pos) {
      newLocation = (new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      map.setCenter(newLocation)
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map,
        title: "My Location",
        icon: ('https://maps.gstatic.com/mapfiles/ms2/micons/lightblue.png')
      });
    });

    var myLatlng = new google.maps.LatLng(51.517399, -0.073590);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map2"), mapOptions);

    $scope.map = map;
  

  $scope.centerOnMe = function() {
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });
  };


  $scope.map = map;
  $scope.markers = [];
  var infoWindow = new google.maps.InfoWindow();
  $scope.createMarker = function(info) {
    console.log(info)
      var marker = new google.maps.Marker({
      position: new google.maps.LatLng(info.lat, info.lon),
      map: $scope.map,
      icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/pink.png',
      animation: google.maps.Animation.DROP,
      title: info.title
    });

    marker.content = '<div class="infoWindowContent">' + info.description + '</div>';
    marker.accept = '<a href="#/tab/task" ng-click="initialize()">Show more information</a>'
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content + marker.accept);
      infoWindow.open($scope.map, marker);
    });
    $scope.markers.push(marker);
  }

$scope.placeMarkers = function(){
  for (i = 0; i < $scope.tasks.length; i++) {
    $scope.createMarker($scope.tasks[i]);
  }
}



// var markPath = new google.maps.Polyline({
//     path: coordinates,
//     geodesic: true,
//     strokeColor: '#FF0000',
//     strokeOpacity: 1.0,
//     strokeWeight: 2
//   });

//   markPath.setMap(map);


google.maps.event.addDomListener(window, 'load', $scope.initialize);
 });

});