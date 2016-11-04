import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';
import 'aframe-look-at-component';

const SelectableBox = (props) => (
  <Entity
    position={`${props.position.x} ${props.position.y} ${props.position.z}`}
    look-at="#main-camera"
  >
    <Entity>
      <Entity
        id={`selectableBox-${props.id}`}
        position="0 0 0.5"
        geometry='primitive: box; depth: 0.1; height: 1; width: 1'
        material={{color: props.color}}
        onClick={() => props.onSelect(props.id)}
        event-set="_event: mouseenter; material.color: yellowgreen"
      >
        {props.selected &&
          <a-animation
            attribute="material.opacity"
            from="1"
            to="0"
            dur="2000"
          />
        }
        {!props.selected &&
          <a-animation
            attribute="material.opacity"
            from="0"
            to="1"
            dur="1000"
          />
        }
      </Entity>
      <Entity
        geometry='primitive: box; depth: 0.05; height: 0.05; width: 0.05'
        material={{color: '#000'}}
      />
      <Entity
        position="0 0 -0.2"
        geometry='primitive: box; depth: 0.1; height: 0.6; width: 1'
        material={{color: props.color}}
        //onClick={() => props.onSelect(props.id)}
      />
      {props.selected &&
        <a-animation
          attribute="position"
          from="0 0 0"
          to="0 0 7"
          dur="2000"
        />
      }
      {!props.selected &&
        <a-animation
          attribute="position"
          from="0 0 7"
          to="0 0 0"
          dur="1000"
        />
      }
    </Entity>
  </Entity>
);

SelectableBox.proptypes = {
  id: PropTypes.number,
  position: PropTypes.object,
  color: PropTypes.string,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
}

export default SelectableBox;
