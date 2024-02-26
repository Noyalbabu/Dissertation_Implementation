import React from 'react';
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import sky from '../Images/sky.jpg';
import lake from '../assets/lake.glb';
 
function Game() {
  const loader = new GLTFLoader();

  loader.load(lake, (d) =>{
    const entity = document.getElementById("lake");
    entity.object3D.add(d.scene);
  })

  return (
    <a-scene>
      <a-assets>
      <img id="sky" src={sky} />
      <a-asset-item id="lake-model" src={lake}></a-asset-item>
      </a-assets>
      <a-sky
      color = "#FFFFFF"
      material = "src: #sky"
      rotation = "0 0 0"
      >
      </a-sky>
      <a-entity id="camera" camera look-controls wasd-controls position="-1 0.6 -2"></a-entity>
      <a-entity id ="lake" position ="-1 -1 -10" scale = "20 -20 -20"></a-entity>
    </a-scene>
  );
}

export default Game;