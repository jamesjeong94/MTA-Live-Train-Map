const key = 'AIzaSyDlGFg3gqtgkFkoAAkiFT3gtrS0WZnmuvA'



if (navigator.geolocation) {
    console.log('Geolocation is supported!');
}
else {
    console.log('Geolocation is not supported for this Browser/OS.');
}

const initialUserPermissions = function () {
    let startPos
    let nudge = document.getElementById('nudge')
    
    let showNudgeBanner = function () {
        nudge.style.display = 'block';
    }

    let hideNudgeBanner = function () {
        nudge.style.display = 'none';
    }

    let nudgeTimeoutId = setTimeout(showNudgeBanner,5000)

    let geoSuccess = function (position) {
        hideNudgeBanner()
        clearTimeOut(nudgeTimeoutId)

        startPos = position
        document.getElementById('startLat').innerHTML = startPos.coords.latitude
        document.getElementById('startLon').innerHTML = startPos.coords.longitude
    }
    let geoError = function (error) {
        switch(error.code) {
            case error.TIME:
                showNudgeBanner();
                break;
        }
    }
    if (nudgeUserInput === 'allow'){
        geoSuccess()
    }
    else if (nudgeUserInput === 'deny'){
        geoError
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 10

    });
  }
