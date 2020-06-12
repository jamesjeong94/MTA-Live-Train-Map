import React, { useState } from 'react';
import InfoWindow from './InfoWindow.jsx';
import { colors } from '../helpers/NavBarHelpers';

const Marker = (props) => {
  const [showInfo, changeShowInfo] = useState(false);
  const { color, name, id } = props;
  const markerClassName = color ? `Marker ${colors[color]}` : 'Marker';
  const handleClick = () => {
    changeShowInfo(!showInfo);
  };
  const infoWindow = showInfo ? (
    <InfoWindow closeInfoWindow={handleClick} stopInfo={props.stopInfo} />
  ) : null;
  return (
    <>
      <div
        className={markerClassName}
        style={{ cursor: 'pointer' }}
        title={name}
        onClick={handleClick}
      />
      {infoWindow}
    </>
  );
};

export default Marker;
