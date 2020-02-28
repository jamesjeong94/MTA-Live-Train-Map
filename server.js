const GtfsRealTimeBindings = require('gtfs-realtime-bindings')
const request = require('request')
const apiKey = '282ebf9d15c7efa63bd01707b0ac86fc'

const trainLineFeeds = {
    orangeLine: `http://datamine.mta.info/mta_esi.php?key=${apiKey}&feed_id=21`,
    redGreenSLine: `http://datamine.mta.info/mta_esi.php?key=${apiKey}&feed_id=1`,
    blueLine: `http://datamine.mta.info/mta_esi.php?key=${apiKey}&feed_id=26`,
    yellowLine: `http://datamine.mta.info/mta_esi.php?key=${apiKey}&feed_id=16`,
    lLine: `http://datamine.mta.info/mta_esi.php?key=${apiKey}&feed_id=2`,
    gLine: `http://datamine.mta.info/mta_esi.php?key=${apiKey}&feed_id=31`,
    brownLine: `http://datamine.mta.info/mta_esi.php?key=${apiKey}&feed_id=36`,
    purpleLine: `http://datamine.mta.info/mta_esi.php?key=${apiKey}&feed_id=51`
}

const requestSettngs = {
    method: 'GET',
    url: trainLineFeeds.orangeLine,
    encoding: null
}

let sampleWindow = document.getElementById("sampleWindow")

request(requestSettngs, (error, response, body) => {
    if (!error && response.statusCode === 200){
        let feed = GtfsRealTimeBindings.transit_realtime.FeedMessage.decode(body);
        let position = GtfsRealTimeBindings.transit_realtime
        console.log(feed.entity[0].tripUpdate);
        sampleWindow.innerHTML(JSON.stringify(feed.entity[0].tripUpdate))
        feed.entity.forEach((entity) => {
            if (entity.tripUpdate){
                //console.log('printing',entity.tripUpdate)
            }
        })
    }
})
