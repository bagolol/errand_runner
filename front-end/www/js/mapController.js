example.controller('MapController', function($scope, $ionicSideMenuDelegate, $state, $stateParams, $http) {

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  var placeSearch, autocomplete;
  var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  function initialize() {

    autocomplete = new google.maps.places.Autocomplete(
      /** @type {HTMLInputElement} */
      (document.getElementById('autocomplete')), {
        types: ['geocode']
      });
    // When the user selects an address from the dropdown,
    // populate the address fields in the form.
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      fillInAddress();
    });
  }
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


  $scope.map = map;
  $scope.markers = [];
  var infoWindow = new google.maps.InfoWindow();
  var createMarker = function(info) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(info.lat, info.long),
      map: $scope.map,
      icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/pink.png',
      animation: google.maps.Animation.DROP,
      title: info.city
    });
    marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
      infoWindow.open($scope.map, marker);
    });
    $scope.markers.push(marker);
  }
  for (i = 0; i < cities.length; i++) {
    createMarker(cities[i]);
  }

  google.maps.event.addDomListener(window, 'load', initialize())

  $scope.formData = {};
  $scope.userData = {};


  //Go to the guessing page
  $scope.onTouch = function(item, event) {
    $scope.formData.save
  };

   $scope.onClick = function(item, event) {
    $scope.userData.save
  };



  $scope.geolocate = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }
  $scope.codeAddress = function() {
    var stnumber = document.getElementById('street_number').value
    var route = document.getElementById('route').value
    var country = document.getElementById('country').value
    var postcode = document.getElementById('postal_code').value
    var address = stnumber + route + country + postcode
    console.log(address)
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        console.log(latitude);
        console.log(longitude);
        $scope.formData.lat = latitude;
        $scope.formData.long = longitude;
        console.log($scope.formData);

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  $scope.userAddress = function() {
    var address = $scope.userData.address
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        console.log(latitude);
        console.log(longitude);
        $scope.userData.lat = latitude;
        $scope.userData.long = longitude;
        console.log($scope.userData);

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }


  // Our form data for creating a new post with ng-model

  $scope.newUser = function() {
    var user = new User($scope.userData);
    user.$save();
  }

  function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    }
    console.log(place.address_components)
      // Get each component of the address from the place details
      // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
      }
    }
  }

  $http.post('http://localhost:3000/users', $scope.userData).
  success(function(data, status, headers, config) {
    console.log()
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


});