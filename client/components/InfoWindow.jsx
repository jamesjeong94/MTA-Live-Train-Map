import React from 'react';

const InfoWindow = (props) => {
  return (
    <div className='infoWindow'>
      <div className='bold'>{props.stopInfo['Stop Name']}</div>
      <button className='center infoBtn' onClick={props.closeInfoWindow}>
        X
      </button>
    </div>
  );
};

export default InfoWindow;
