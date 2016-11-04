import React from 'react';
import { Entity } from 'aframe-react';

const Floor = () => (
  <Entity 
    geometry='primitive: plane; height: 20; width: 20'
    material={{color: '#262826'}}
    rotation="-90 0 0"
  />
);

export default Floor;
