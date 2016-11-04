import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity>
    <Entity id="main-camera" camera="userHeight: 1.6" look-controls wasd-controls="" {...props}>
      <Entity 
        cursor="fuse: true; fuseTimeout: 2000"
        objects=".clickable"
        position="0 0 -2"
        geometry="primitive: ring; radiusInner: 0.03; radiusOuter: 0.04"
        material="color: green; shader: flat"
      >
        <a-animation 
          begin="click"
          easing="ease-in"
          attribute="scale"
          fill="backwards"
          from="0.1 0.1 0.1"
          to="1 1 1"
          dur="200"/>
        <a-animation 
          begin="cursor-fusing"
          easing="linear"
          attribute="scale"
          fill="backwards"
          from="1 1 1"
          to="0.1 0.1 0.1"
          dur="2000"/>
      </Entity>
    </Entity>
  </Entity>
);
