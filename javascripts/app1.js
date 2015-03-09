var a;
var b;

function getLocation() {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition;
    } else {
        return null;
    }
}

function initialize() {
    "use strict";
    var requestURL = "https://maps.googleapis.com/maps/api/geocode/json?address=600+Langsdorf+Dr,+Fullerton+,+CA";

    $.getJSON(requestURL, function(response) {
        a = response.results[0].geometry.location.lat;
        b = response.results[0].geometry.location.lng;
        passing(a, b);
    });


}

function passing(a, b) {
    var myLocation = null;

    if (myLocation === null)

    {
        var myLatLng = new google.maps.LatLng(a, b);
    } else {
        var myLatLng = new google.maps.LatLng(myLocation.coords.latitude, myLocation.coords.longitude);
    }

    var mapOptions = {
        center: myLatLng,
        zoom: 7
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello"
    });
}

google.maps.event.addDomListener(window, 'load', initialize);