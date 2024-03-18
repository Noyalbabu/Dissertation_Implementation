import React, { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector3 } from 'three';
import sky from '../Images/sky.jpg';
import lake from '../assets/lake.glb';
import Bird from './bird.js';
import AFRAME from 'aframe';


if (!AFRAME.components['bullet-collision-listener']) {
  // Register the component only if it's not already registered
  AFRAME.registerComponent('bullet-collision-listener', {
    init: function () {
      console.log('Bullet collision listener initialized');
      const el = this.el;
      console.log('el element:', this.el);

      const handleCollision = function (event) {
        console.log('Collision detected');
        const collidedObject = event.detail.body.el;
        // Check if the collided object's ID starts with 'balloon-'
        if (collidedObject.id.startsWith('balloon-')) {
          console.log('Bullet collided with balloon:', collidedObject.id);
          el.parentNode.removeChild(el);
          collidedObject.parentNode.removeChild(collidedObject);
        }
      };
      
      el.addEventListener('collide', handleCollision);
    }
  });
}  
function Game() {
  const bulletsList = useRef([]);
  const sceneRef = useRef(null);

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(lake, (gltf) => {
      const entity = document.getElementById('lake-entity');
      if (entity) {
        entity.object3D.add(gltf.scene);
      }
        generateBalloons();
    });

    const handleSpacebarShoot = (event) => {
      if (event.code === 'Space') {
        fireBullet();
      }
    };

    window.addEventListener('keydown', handleSpacebarShoot);

    return () => {
      window.removeEventListener('keydown', handleSpacebarShoot);
    };
    
  }, []);

  const generateBalloons = () => {
    const balloon = document.createElement('a-sphere');
    balloon.setAttribute('radius', '0.5');
    balloon.setAttribute('color', 'red');
    balloon.setAttribute('id', `balloon-${sceneRef.current.children.length}`);
    balloon.setAttribute('position', `${Math.random() * 10 - 5} 1 ${-Math.random() * 10}`);
    balloon.setAttribute('static-body', true);
    console.log('balloon id is', balloon.id);
    sceneRef.current.appendChild(balloon);
  };

  const fireBullet = () => {
    const camera = document.getElementById('game1Cam');
    if (!camera) return;
    
    const bullet = document.createElement('a-sphere');
    bullet.setAttribute('id', 'bulletball');
    bullet.setAttribute('radius', '0.05');
    bullet.setAttribute('position', camera.getAttribute('position'));
    bullet.setAttribute('dynamic-body', true);
    bullet.setAttribute('bullet-collision-listener', '');
    console.log(bullet);
    sceneRef.current.appendChild(bullet);
    bulletsList.current.push(bullet);

    const direction = new Vector3(0, 0, -1);
    direction.applyQuaternion(camera.object3D.quaternion);
    const velocity = direction.multiplyScalar(0.2);

    const animateBullet = () => {
      bullet.object3D.position.add(velocity);
      if (bullet.object3D.position.z < -10) {
        sceneRef.current.removeChild(bullet);
        bulletsList.current.splice(bulletsList.current.indexOf(bullet), 1);
      } else {
        requestAnimationFrame(animateBullet);
      }
    };
    
    animateBullet();
  };

  return (
    <a-scene ref={sceneRef} id="game1Scene" physics = "debug: true; gravity: -9.8;">
      <a-assets>
        <img id="sky" src={sky} />
        <a-asset-item id="lake-model" src={lake}></a-asset-item>
      </a-assets>
      <a-sky color="#FFFFFF" material="src: #sky" rotation="0 0 0"></a-sky>
      <a-entity id="lake-entity" position="0 -0.02 0" scale="0.0099 0.0099 0.0099"></a-entity>
      <a-camera id="game1Cam" position="0 0.5 0" raycaster="objects: .raycastable">
        <a-cursor intersection-spawn="event: click; mixin: voxel"></a-cursor>
      </a-camera>
      <Bird x={0} y={0.1} z={-1} />
    </a-scene>
  );
}

export default Game;