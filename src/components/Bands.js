import React from 'react';

const Bands = props => {
  return (
    <div>
      {props.bands.map((band) => {
        return <li key={band.name}>{band.name}</li>
      })}
    </div>
  );

};

export default Bands;