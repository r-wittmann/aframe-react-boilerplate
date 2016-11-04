import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Sky from './components/Sky';
import Floor from './components/Floor';
import SelectableBox from './components/SelectableBox';

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      cameraPosition: '0 0 0',
      selectedBox: -1,
      selectableBoxList: [{
        color: 'red',
      },{
        color: 'red',
      },{
        color: 'red',
      },{
        color: 'red',
      },{
        color: 'red',
      },{
        color: 'red',
      }]
    };
    this.selectBox = this.selectBox.bind(this);
  }

  calculatePosition(index, boxCount) {
    const distance = 10;
    const visionAngle = 100;
    const x = distance * Math.cos((2 * (index + 0.5) * Math.PI / boxCount) / (360 / visionAngle) + (180 - visionAngle) * Math.PI / 360);
    const y = 1.6;
    const z = -distance *  Math.sin((2 * (index + 0.5) * Math.PI / boxCount)/ (360 / visionAngle) + (180 - visionAngle) * Math.PI / 360);
    return {x: x, y: y, z: z};
  }

  selectBox(id) {
    this.setState({
      deselectedBox: this.state.selectedBox,
      selectedBox: id,
    });
  }

  render () {
    return (
      <Scene>
        <Camera position={this.state.cameraPosition} />

        <Sky src="url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)"/>

        <Floor />

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        <Entity light={{type: 'directional', intensity: 0.5}} position='1 1 -1'/>

        {this.state.selectableBoxList.map((box, index) => 
          <SelectableBox
            key={index}
            id={index}
            position={this.calculatePosition(index, this.state.selectableBoxList.length)}
            color={box.color}
            onSelect={this.selectBox}
            selected={index === this.state.selectedBox}
          />
        )}

      </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));
