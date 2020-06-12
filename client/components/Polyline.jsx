import React, { useEffect, useState } from 'react';

const Polyline = ({ markers, map, maps }) => {
  const [polyline, setPolyline] = useState(null);
  const renderPolyline = () => {
    if (polyline) {
      polyline.setMap(null);
    }
    let nonGeodesicPolyline = new maps.Polyline({
      path: markers,
      geodesic: false,
      strokeColor: 'black',
      strokeOpacity: 1,
      strokeWeight: 5,
    });
    setPolyline(nonGeodesicPolyline);
    nonGeodesicPolyline.setMap(map);
  };
  useEffect(() => {
    renderPolyline();
  }, [markers]);
  return null;
};

export default Polyline;
