const GtfsRealTimeBindings = require('gtfs-realtime-bindings')
const axios = require('axios').default
const fs = require('fs')

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

const getGtfsOfFeed = (url) => {
    axios({
        method: 'get',
        url,
        transformResponse: [(data) => {
            return  GtfsRealTimeBindings.FeedMessage.decode(data)
        }]
    })
        .catch((error) => {
            if(error.response){
                return console.log(error.response.data)
            }
        })
        .then((response) => {
            return console.log(response.data)
        })
};

getGtfsOfFeed(trainLineFeeds.orangeLine)

// request(requestSettngs, (error, response, body) => {
//     if (!error && response.statusCode === 200){
//         let feed = GtfsRealTimeBindings.transit_realtime.FeedMessage.decode(body);
//         let position = GtfsRealTimeBindings.transit_realtime
//         console.log(feed.entity);
//         feed.entity.forEach((entity) => {
//             if (entity.tripUpdate){
//                 //console.log('printing',entity.tripUpdate)
//             }
//         })
//     }
// })
