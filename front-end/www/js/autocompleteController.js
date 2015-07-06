appCtrl.controller('AccountCtrl', function($scope) {

var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  postal_code: 'short_name'
};

  // ionic.Platform.ready(function(){
  //   autocomplete = new google.maps.places.Autocomplete(
  //     /** @type {HTMLInputElement} */
  //     (document.getElementById('autocomplete')), {
  //       types: ['geocode']
  //     })
  //    google.maps.event.addListener(autocomplete, 'place_changed', function() {
  //     fillInAddress();
  //   })
  // })

  // $scope.geolocate = function() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var geolocation = new google.maps.LatLng(
  //         position.coords.latitude, position.coords.longitude);
  //       var circle = new google.maps.Circle({
  //         center: geolocation,
  //         radius: position.coords.accuracy
  //       });
  //       // autocomplete.setBounds(circle.getBounds());
  //     });
  //   }
  // }

  // function fillInAddress() {
  //   // Get the place details from the autocomplete object.
  //   var place = autocomplete.getPlace();

  //   for (var component in componentForm) {
  //     document.getElementById(component).value = '';
  //     document.getElementById(component).disabled = false;
  //   }
  //   console.log(place.address_components)
  //     // Get each component of the address from the place details
  //     // and fill the corresponding field on the form.
  //   for (var i = 0; i < place.address_components.length; i++) {
  //     var addressType = place.address_components[i].types[0];
  //     if (componentForm[addressType]) {
  //       var val = place.address_components[i][componentForm[addressType]];
  //       document.getElementById(addressType).value = val;
  //     }
  //   }
  // }

  $scope.codeAddress = function() {
    var stnumber = document.getElementById('street_number').value
    var route = document.getElementById('route').value
    var city = document.getElementById('locality').value
    var postcode = document.getElementById('postal_code').value
    var address = stnumber + ' ' + route + ' ' + city + ' ' + postcode
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
        $scope.taskData.lat = latitude;
        $scope.taskData.long = longitude;
        console.log($scope.taskData);

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };


  $scope.taskData = {}
  $scope.newTask = function() {
    console.log($scope.taskData)
  }
})