const fs = require('fs');
const path = require('path');

const rawStopInfoPath = path.resolve(__dirname, '../../data/rawStopInfo.json');

const stopsData = fs.readFileSync(rawStopInfoPath);
const stopsDataParsed = JSON.parse(stopsData.toString());

const lineInStationCheck = function (stop, subwayLine) {
  let stopRegex = new RegExp(`[${stop}]`, 'g');
  let matchParse = subwayLine.match(stopRegex);
  if (matchParse) {
    return true;
  } else {
    return false;
  }
};

module.exports = getStopData = function (userInputLine) {
  let result = {};
  for (let stop in stopsDataParsed) {
    if (
      lineInStationCheck(stopsDataParsed[stop]['Daytime Routes'], userInputLine)
    ) {
      result[stop] = stopsDataParsed[stop];
    }
  }
  return Object.values(result);
};
