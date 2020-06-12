import React from 'react';
import { colors } from '../helpers/NavBarHelpers';

const Marker = (props) => {
  const { color, name, id } = props;
  console.log(color);
  const markerClassName = color ? `Marker ${colors[color]}` : 'Marker';
  return (
    <div
      className={markerClassName}
      style={{ cursor: 'pointer' }}
      title={name}
    />
  );
};

export default Marker;
