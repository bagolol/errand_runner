// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var example = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
var cities = [
    {
        city : 'Pick up my bag',
        desc : 'I bought a bag and need it picked up from this shop',
        lat : 51.520323,
        long : -0.071961
    },
    {
        city : 'Buy me chocolate',
        desc : 'I need chocolate from this shop',
        lat : 51.515984,
        long : -0.070484
    },
    {
        city : 'Bring me my wine',
        desc : 'I need wine delivered to me',
        lat : 52.242452,
        long : -0.889882
    },
    {
        city : 'Shopping',
        desc : 'I need someone to do my shopping',
        lat : 52.247234,
        long : -0.893567
    },
    {
        city : 'Pick up my wallet',
        desc : 'I left my wallet in this bar, please bring it to me',
        lat : 52.241874,
        long : -0.883568
    }
];

