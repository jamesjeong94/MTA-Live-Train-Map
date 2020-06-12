const getStartingStation = (stops) => {
  for (let i = 0; i < stops.length; i++) {
    if (
      stops[i]['North Direction Label'].length === 0 ||
      stops[i]['South Direction Label'].length === 0
    ) {
      return stops[i];
    }
  }
  return stops[0];
};

const calculateDistance = (stop1, stop2) => {
  let modX = stop1['GTFS Latitude'] - stop2['GTFS Latitude'];
  let modY = stop1['GTFS Longitude'] - stop2['GTFS Longitude'];
  let inner = modX ** 2 + modY ** 2;
  let distance = inner ** 0.5;
  return distance;
};

const stopsArraySorter = (entry, line) => {
  const stops = [...entry];
  let startingStation = getStartingStation(stops);
  const sortedStops = [];
  const recursiveSort = (stops, start) => {
    if (stops.length === 0) {
      return;
    }
    let closest = stops[0];
    let index = 0;
    for (let i = 0; i < stops.length; i++) {
      if (
        calculateDistance(closest, start) > calculateDistance(stops[i], start)
      ) {
        closest = stops[i];
        index = i;
      }
    }
    sortedStops.push(closest);
    stops.splice(index, 1);
    recursiveSort(stops, closest);
  };
  recursiveSort(stops, startingStation);
  return sortedStops;
};

export default stopsArraySorter;
