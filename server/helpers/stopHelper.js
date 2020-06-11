import fs from 'fs';

const stopsData = fs.readFileSync('data/rawStopInfo.json');
const stopsDataParsed = JSON.parse(stopsData.toString());

const stopColorCoding = {
  orange: ['B', 'D', 'F', 'M'],
  blue: ['A', 'C', 'E'],
  lightgreen: ['G'],
  green: ['4', '5', '6'],
  yellow: ['N', 'Q', 'R'],
  gray: ['L '],
  red: ['1', '2', '3'],
  brown: ['J', 'Z'],
  purple: ['7 '],
};

const colorInStationCheck = function (stop, subwayColor) {
  let newSubwayColor = stopColorCoding[subwayColor].join('');
  let stopRegex = new RegExp(`[${stop}][^\s]`, 'g');
  let matchParse = newSubwayColor.match(stopRegex);
  if (matchParse) {
    return true;
  } else {
    return false;
  }
};

//let userInputColor = 'gray'

export const getStopData = function (userInputColor) {
  let result = {};
  for (let stop in stopsDataParsed) {
    if (
      colorInStationCheck(
        stopsDataParsed[stop]['Daytime Routes'],
        userInputColor
      )
    ) {
      result[stop] = stopsDataParsed[stop];
    }
  }
  return result;
};
