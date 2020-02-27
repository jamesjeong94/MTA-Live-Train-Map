const GtfsRealTimeBindings = require('gtfs-realtime-bindings')
const request = require('request')
let key = '282ebf9d15c7efa63bd01707b0ac86fc'
let orangeLineFeed = `http://datamine.mta.info/mta_esi.php?key=${key}&feed_id=21`
const requestSettngs = {
    method: 'GET',
    url: orangeLineFeed,
    encoding: null
}

request(requestSettngs, (error, response, body) => {
    if (!error && response.statusCode === 200){
        let feed = GtfsRealTimeBindings.transit_realtime.FeedMessage.decode(body);
        feed.entity.forEach((entity) => {
            console.log(entity.trip_update)
            if (entity.trip_update){
                console.log(entity.trip_update)
            }
        })
    }
})

console.log(orangeLineFeed)
