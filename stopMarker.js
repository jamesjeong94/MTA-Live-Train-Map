const fs = require('fs')

const stopsData = fs.readFileSync('data/stopInfo.json')
const stopsDataParsed = JSON.parse(stopsData.toString())

const stopColorCoding = {
    orange: ['B','D','F','M'],
    blue: ['A','C','E'],
    lightgreen: ['G'],
    green: ['4','5','6'],
    yellow: ['N','Q','R'],
    gray: ['L'],
    red: ['1','2','3'],
    brown: ['J','Z'],
    purple: ['7']
}

const colorInStationCheck = function(stop,subwayColor) {
    let newSubwayColor = stopColorCoding[subwayColor].join("")
    //console.log(stop)
    let stopRegex = new RegExp(`[${stop}][^\s]`,'g')
    let matchParse = newSubwayColor.match(stopRegex)
    if (matchParse){
        return true
    }
    else{
        return false
    }
}

let userInputColor = 'orange'
//let userInputColor = document.getElementById('subwayLine')

const drawSubwayMarkers = function(){
    for(let stop in stopsDataParsed){
        if(colorInStationCheck(stopsDataParsed[stop]['Daytime Routes'],userInputColor))
            console.log(stopsDataParsed[stop]['Stop Name'],stopsDataParsed[stop]['Daytime Routes'])
            console.log(`Latitude: ${stopsDataParsed[stop]['GTFS Latitude']}`)
            console.log(`Longitude: ${stopsDataParsed[stop]['GTFS Longitude']}`)
    }
}

module.exports = {
    drawSubwayMarkers: drawSubwayMarkers
}