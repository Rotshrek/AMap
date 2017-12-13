(function () {
    "use strict";

    var app = angular.module("map", []);

    app.controller("mapController", ["$scope", 
        function ($scope) {

            var mapOptions = {
                zoom: 7,
                center: new google.maps.LatLng(-30.455, -75.655),
                mapTypeId: google.maps.MapTypeId.TERRAIN
            };

            $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

            var directionsService = new google.maps.DirectionsService();

            var geocoder = new google.maps.Geocoder();

            var infoWindow = new google.maps.InfoWindow();

            $scope.openInfoWindow = function (e, selectedMarker) {
                e.preventDefault();
                google.maps.event.trigger(selectedMarker, 'click');
            }

        }]);
})();