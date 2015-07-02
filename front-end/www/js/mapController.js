
example.controller('MapController', function($scope, $ionicSideMenuDelegate, $state, $stateParams) {

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };

function initialize() {

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
        var createMarker = function (info){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.lat, info.long),
                map: $scope.map,
                icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/pink.png',
                animation: google.maps.Animation.DROP,
                title: info.city
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
        }
        for (i = 0; i < cities.length; i++){
            createMarker(cities[i]);
        }
    };

    google.maps.event.addDomListener(window, 'load', initialize())

       $scope.formData = {};

    //Go to the guessing page
    $scope.onTouch = function(item,event){
        $scope.formData.save
        console.log($scope.formData);
    };

});


 

