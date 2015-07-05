appCtrl.controller('MapCtrl', function($scope, $ionicLoading, $compile) {

var tasks = [{
  title: 'Pick up my bag',
  description: 'I bought a bag and need it picked up from this shop',
  lat: 51.517399,
  long: -0.073590
}]


  ionic.Platform.ready(function() {

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
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);



    //Marker + infowindow + angularjs compiled ng-click
    // var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
    // var compiled = $compile(contentString)($scope);

    // var infowindow = new google.maps.InfoWindow({
    //   content: compiled[0]
    // });

    // var marker = new google.maps.Marker({
    //   position: myLatlng,
    //   map: map,
    //   title: 'Uluru (Ayers Rock)'
    // });

    // google.maps.event.addListener(marker, 'click', function() {
    //   infowindow.open(map, marker);
    // });

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

  $scope.clickTest = function() {
    alert('Example of infowindow with ng-click')
  };

  $scope.map = map;
  $scope.markers = [];
  var infoWindow = new google.maps.InfoWindow();
  var createMarker = function(info) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(info.lat, info.long),
      map: $scope.map,
      icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/pink.png',
      animation: google.maps.Animation.DROP,
      title: info.title
    });

  

    marker.content = '<div class="infoWindowContent">' + info.description + '</div>';
    marker.accept = '<button onclick="Accept()">Accept</button>'
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content + marker.accept);
      infoWindow.open($scope.map, marker);
    });
    $scope.markers.push(marker);
  }

  for (i = 0; i < tasks.length; i++) {
    createMarker(tasks[i]);
  }

google.maps.event.addDomListener(window, 'load', $scope.initialize);
 });

});

  function Accept(){
      console.log("Task has been accepted");
        //   for (var i = 0; i < markers.length; i++) {
        //     if (markers[i].id == id) {
        //         //Remove the marker from Map                  
        //         markers[i].setMap(null);
 
        //         //Remove the marker from array.
        //         markers.splice(i, 1);
        //         return;
        //     }
        // }
    };


