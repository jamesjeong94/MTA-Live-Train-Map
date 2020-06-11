import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = (props) => {
  return (
    <div className='Map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDlGFg3gqtgkFkoAAkiFT3gtrS0WZnmuvA' }}
        defaultCenter={{ lat: 40.7128, lng: -74.006 }}
        defaultZoom={12}></GoogleMapReact>
    </div>
  );
};

export default Map;
