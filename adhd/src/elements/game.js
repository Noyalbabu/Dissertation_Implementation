import React,{useEffect} from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import sky from '../Images/sky.jpg';
import lake from '../assets/lake.glb';
import Bird from './bird.js';

function Game() {
  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(lake, (gltf) => {
      const entity = document.getElementById('lake-entity');
      if (entity) {
        entity.object3D.add(gltf.scene);
      }
    });
  }, []);

  return (
    <a-scene>
      <a-assets>
      <img id="sky" src={sky} />
      <a-asset-item id="lake-model" src={lake}></a-asset-item> 
      </a-assets>
      <a-sky color = "#FFFFFF" material = "src: #sky"  rotation = "0 0 0"></a-sky>
      
      {/* <a-entity id ="lake"  position="0 0 0" scale="0.0099 0.0099 0.0099" animation="property: rotation; to: 0 360 0; dur: 14000; easing: linear; loop: true"></a-entity> */}
      <a-entity id ="lake-entity"  position="0 1 0" scale="0.0099 0.0099 0.0099" ></a-entity>
      <Bird x={0} y={1.3} z={-1} />
    </a-scene>
  );
}

export default Game;