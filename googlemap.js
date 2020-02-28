const key = 'AIzaSyDlGFg3gqtgkFkoAAkiFT3gtrS0WZnmuvA'
let currentLat, currentLon

if (navigator.geolocation) {
    console.log('Geolocation is supported!');
}
else {
    console.log('Geolocation is not supported for this Browser/OS.');
}


const initialUserPermissions = function () {
    console.log("init!")
    let startPos
    let nudge = document.getElementById('nudge')
    
    let showNudgeBanner = function () {
        nudge.style.display = 'block';
    }

    let hideNudgeBanner = function () {
        nudge.style.display = 'none';
    }

    let nudgeTimeoutId = setTimeout(showNudgeBanner,5000)

    var geoSuccess = function (position) {
        hideNudgeBanner()
        clearTimeOut(nudgeTimeoutId)

        startPos = position
        document.getElementById('startLat').innerHTML = startPos.coords.latitude
        document.getElementById('startLon').innerHTML = startPos.coords.longitude
    }
    var geoError = function (error) {
        switch(error.code) {
            case error.TIME:
                showNudgeBanner();
                break;
        }
    }
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
    window.removeEventListener('click',initialUserPermissions)
}

window.addEventListener("click", initialUserPermissions);



function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40, lng: 40},
      zoom: 10
    });
  }
