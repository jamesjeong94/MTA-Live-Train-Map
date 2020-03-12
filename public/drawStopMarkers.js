//get data from googlemap.js

//parse through data
    //create info window
const drawStopMarkers = (subwayStopData) => {
    for(let stop in subwayStopData) {
        let markerLatLon = {
            lat:subwayStopData[stop]['GTFS Latitude'],
            lon:subwayStopData[stop]['GTFS Longitude']
        }
        let title = (subwayStopData[stop]['Stop Name'])
        console.log(markerLatLon)
        let marker = new google.maps.Marker({
            position: markerLatLon,
            title: title
        })
        marker.setMap(map)
    }
}

exports.drawStopMarkers = drawStopMarkers