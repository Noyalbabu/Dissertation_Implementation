import React,{useEffect, useRef} from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector3, Raycaster } from 'three';
import sky from '../Images/sky.jpg';
import lake from '../assets/lake.glb';
import Bird from './bird.js';


function Game() {
  const bulletsRef = useRef([]);
  const sceneRef = useRef(null);

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(lake, (gltf) => {
      const entity = document.getElementById('lake-entity');
      if (entity) {
        entity.object3D.add(gltf.scene);
      }
    });

    //Func for launching bullets from spacebar
    const handleSpacebarShoot = (event) => {
      if (event.code === 'Space') {
        shootBullet();
      }
    };
  
    window.addEventListener('keydown', handleSpacebarShoot);
  
    return () => {
      window.removeEventListener('keydown', handleSpacebarShoot);
    };
  }, []);

  //Function to generate balloons
  const generateBalloons = () => {
    const balloon = document.createElement('a-sphere');
    balloon.setAttribute('radius', '0.1');
    balloon.setAttribute('color', 'red');
    balloon.setAttribute('position', `${Math.random() * 10 - 5} 2 ${-Math.random() * 10}`);
    sceneRef.current.appendChild(balloon);
    generateBalloons();
  };

  //Function to shoot bullet 
  const shootBullet = () => {
    const camera = document.getElementById('game1Cam');
    if (!camera) return;

    const bullet = document.createElement('a-sphere');
    bullet.setAttribute('radius', '0.05');
    bullet.setAttribute('color', 'black');
    bullet.setAttribute('position', camera.getAttribute('position'));
    sceneRef.current.appendChild(bullet);
    bulletsRef.current.push(bullet);

    const direction = new Vector3(0, 0, -1);
    direction.applyQuaternion(camera.object3D.quaternion);
    const velocity = direction.multiplyScalar(0.1);

    const animateBullet = () => {
      bullet.object3D.position.add(velocity);
      if (bullet.object3D.position.z < -10) {
        sceneRef.current.removeChild(bullet);
        bulletsRef.current.splice(bulletsRef.current.indexOf(bullet), 1);
      } else {
        requestAnimationFrame(animateBullet);
      }
    };

    animateBullet();
  };
  
  return (
    <a-scene  ref = {sceneRef} id = "game1Scene">
      <a-assets>
      <img id="sky" src={sky} />
      <a-asset-item id="lake-model" src={lake}></a-asset-item> 
      </a-assets>
      <a-sky color = "#FFFFFF" material = "src: #sky"  rotation = "0 0 0"></a-sky>
      
      {/* <a-entity id ="lake"  position="0 0 0" scale="0.0099 0.0099 0.0099" animation="property: rotation; to: 0 360 0; dur: 14000; easing: linear; loop: true"></a-entity> */}
      <a-entity id ="lake-entity"  position="0 -0.02 0" scale="0.0099 0.0099 0.0099" ></a-entity>
      <a-camera id = "game1Cam" position = "0 0.5 0">
        <a-cursor intersection-spawn = "event: click; mixin: voxel"></a-cursor>
      </a-camera>
      <Bird x={0} y={0.1} z={-1} />

    </a-scene>
  );
}

export default Game;