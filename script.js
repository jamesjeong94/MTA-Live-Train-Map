<<<<<<< HEAD
const GtfsRealTimeBindings = require('gtfs-realtime-bindings')
const request = require('request')
const apiKey = '282ebf9d15c7efa63bd01707b0ac86fc'
const orangeLineFeed = `http://datamine.mta.info/mta_esi.php?key=${apiKey}&feed_id=21`
const requestSettngs = {
    method: 'GET',
    url: orangeLineFeed,
    encoding: null
}

request(requestSettngs, (error, response, body) => {
    if (!error && response.statusCode === 200){
        let feed = GtfsRealTimeBindings.transit_realtime.FeedMessage.decode(body);
        let position = GtfsRealTimeBindings.transit_realtime
        console.log(position);
        feed.entity.forEach((entity) => {
            if (entity.tripUpdate){
                //console.log('printing',entity.tripUpdate)
            }
        })
    }
})

console.log(orangeLineFeed)
=======
const GtfsRealTimeBindings = require('gtfs-realtime-bindings')
const request = require('request')
const apiKey = '282ebf9d15c7efa63bd01707b0ac86fc'
const orangeLineFeed = `http://datamine.mta.info/mta_esi.php?key=${apiKey}&feed_id=21`
const requestSettngs = {
    method: 'GET',
    url: orangeLineFeed,
    encoding: null
}

request(requestSettngs, (error, response, body) => {
    if (!error && response.statusCode === 200){
        let feed = GtfsRealTimeBindings.transit_realtime.FeedMessage.decode(body);
        let position = GtfsRealTimeBindings.transit_realtime
        console.log(position);
        feed.entity.forEach((entity) => {
            if (entity.tripUpdate){
                //console.log('printing',entity.tripUpdate)
            }
        })
    }
})

console.log(orangeLineFeed)
>>>>>>> a28ac86eaafbc26d1bf7a3ecc3c2519647bd84bc
