const key = 'AIzaSyDlGFg3gqtgkFkoAAkiFT3gtrS0WZnmuvA'
let currentLat, currentLon, infoWindow, pos

stopMarker.drawSubwayMarkers()
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7, lng: -74},
      zoom: 15
    });
    infoWindow = new google.maps.InfoWindow
}
if (navigator.geolocation) {
    console.log('Geolocation is supported!');
    navigator.geolocation.getCurrentPosition((position) => {
        pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        infoWindow.setPosition(pos)
        infoWindow.setContent('You are located here!')
        infoWindow.open(map)
        map.setCenter(pos)
        }, () => {
            handleLocationError(true, infoWindow, map.getCenter())
        })
}
else {
    console.log('Geolocation is not supported for this Browser/OS.');
}


