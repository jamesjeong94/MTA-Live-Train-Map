

let currentLat, currentLon, infoWindow, pos

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
const subwayLineSubmission = document.getElementById('subwayLineSelection')
const subwayLineSelected = document.getElementById('subwayLine')

subwayLineSubmission.addEventListener('submit',(e) => {
    e.preventDefault()
    const requestedSubway = subwayLineSelected.options[subwayLineSelected.selectedIndex].value
    console.log(requestedSubway)
    fetch(`/mta?subwayline=${requestedSubway}`).then((response) => {
        response.json().then((data) => {
            if (data.error){
                console.log(data.error)
            }
            else{
                console.log(data)
            }
        })
    })

})