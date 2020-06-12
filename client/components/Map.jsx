import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Polyline from './Polyline.jsx';
import Marker from './Marker.jsx';

import stopsArraySorter from '../helpers/stopsArraySorter.js';

const Map = (props) => {
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [mapLoaded, changeMapLoad] = useState(false);
  let stops = props.stops.map((stop, index) => {
    return (
      <Marker
        stopInfo={stop}
        color={props.line}
        key={index}
        lat={stop['GTFS Latitude']}
        lng={stop['GTFS Longitude']}
      />
    );
  });

  const onMapLoaded = (map, maps) => {
    setMap(map);
    setMaps(maps);
    changeMapLoad(true);
  };

  const setMarkerState = () => {
    const sortedStops = stopsArraySorter(props.stops);
    const coords = sortedStops.map((stop) => {
      return {
        lat: stop['GTFS Latitude'],
        lng: stop['GTFS Longitude'],
      };
    });
    setMarkers(coords);
  };

  useEffect(() => {
    setMarkerState();
  }, [props.stops]);

  function createMapOptions(maps) {
    return {
      clickableIcons: false,
    };
  }

  return (
    <div className='Map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDlGFg3gqtgkFkoAAkiFT3gtrS0WZnmuvA' }}
        defaultCenter={{ lat: 40.7128, lng: -74.006 }}
        defaultZoom={12}
        options={createMapOptions}
        clickableIcons={false}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => onMapLoaded(map, maps)}>
        {stops}
        {mapLoaded && (
          <Polyline
            maps={maps}
            map={map}
            markers={markers}
            options={{
              geodesic: false,
              strokeColor: '#e4e4e4',
              strokeOpacity: 0.7,
              strokeWeight: 3,
            }}
          />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
