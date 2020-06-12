const axios = require('axios');
const queryString = require('query-string');
const gtfs = require('gtfs-realtime-bindings');
require('dotenv').config();

const lines = {
  A: 26,
  B: 21,
  C: 26,
  D: 21,
  E: 26,
  F: 21,
  G: 31,
  J: 36,
  L: 2,
  M: 21,
  N: 16,
  Q: 16,
  R: 16,
  S: 1,
  Z: 36,
  '1': 1,
  '2': 1,
  '3': 1,
  '4': 1,
  '5': 1,
  '6': 1,
  '7': 51,
};

const getLiveTrainStream = (line) => {
  const feedID = lines[line];
  const host = 'http://datamine.mta.info/mta_esi.php?';
  const params = queryString.stringify({
    key: process.env.GTFSKey,
    feed_id: feedID,
  });
  const endpoint = host + params;
  axios({
    method: 'GET',
    url: endpoint,
    responseType: 'arraybuffer',
    responseEncoding: 'binary',
  })
    .then(({ data }) => {
      const feed = gtfs.transit_realtime.FeedMessage.decode(data);
      feed.entity.forEach((entity) => {
        if (entity.tripUpdate) {
          const lastUpdate =
            entity.tripUpdate.stopTimeUpdate[
              entity.tripUpdate.stopTimeUpdate.length - 1
            ];
          console.log(entity);
          console.log(lastUpdate);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getLiveTrainStream;

getLiveTrainStream(6);
