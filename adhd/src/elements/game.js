import React,{useEffect} from 'react';
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import sky from '../Images/sky.jpg';
import lake from '../assets/lake.glb';
import bird from '../assets/scene.gltf';

function Game() {
  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(lake, (d) => {
      const entity = document.getElementById("lake");
      entity.object3D.add(d.scene);
    });

    loader.load(bird, (d) => {
      const entity = document.getElementById("bird");
      entity.object3D.add(d.scene);
    });
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <a-scene>
      <a-assets>
      <img id="sky" src={sky} />
      {/* <a-asset-item id="lake-model" src={lake}></a-asset-item> */}
      </a-assets>
      <a-sky color = "#FFFFFF" material = "src: #sky"  rotation = "0 0 0"></a-sky>
      
      {/* <a-entity id ="lake"  position="0 0 0" scale="0.0099 0.0099 0.0099" animation="property: rotation; to: 0 360 0; dur: 14000; easing: linear; loop: true"></a-entity> */}
      <a-entity id ="lake"  position="0 1 0" scale="0.0099 0.0099 0.0099" ></a-entity>
      <a-entity id="bird" position="0 1 -5" ></a-entity>
     {/* <Bird x={0} y={1} z={-1} /> */}
     
    </a-scene>
  );
}

export default Game;