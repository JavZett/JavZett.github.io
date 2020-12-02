import React from 'react';
import GoogleMaps from 'simple-react-google-maps';

export const Mapa = () => {
  return (
    <div className="mapa">
      <GoogleMaps
        apiKey={'AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik'}
        style={{ height: '65vh', width: '100%' }}
        className="mapa-mapa-cetis"
        zoom={13}
        center={{ lat: 19.499500675736567, lng: -99.12393689195976 }}
      />
    </div>
  );
};
