import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import sky from '../Images/sky.jpg';
import lake from '../assets/lake.glb';
import Bird from './bird.js';
import YellowBird from './yellowDuck.js';
import Monkey from './monkey-model.js';
import 'aframe';
import useSound from 'use-sound';
import pop from '../assets/pop.mp3';
import lakeAmbiance from '../assets/lakesound.wav';
import Game1Q from './game1Question.js';


function Game() {
  const navigate = useNavigate();
  const [totalBalloonsHit, setTotalBalloonsHit] = useState(0);
  const [timeDuration, setTimeDuration] = useState(20);

  //Update the time remaining every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeDuration(prevTime => prevTime - 1);
      if (timeDuration === 0) {
        clearInterval(timer);
        //stop sound 
        document.querySelector('a-sound').components.sound.stopSound();
        
       // alert(`Game Over! You hit ${totalBalloonsHit} balloons`);
        //destroy the game scene
        setVisibleBird(false);    
        document.getElementById('game1Scene').remove();
        //move to the next game, next page
        navigate(`/game1Question`, { state: { data: totalBalloonsHit } });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate,timeDuration, totalBalloonsHit]);

  const [play] = useSound(pop, { volume: 0.25 });     // credcit : (“Announcing ‘Use-Sound’, a React Hook for Sound Effects” 2023)
  const sceneRef = useRef(null);
  const [visibleBird, setVisibleBird] = useState(false);
  const [visibleYellowBird, setVisibleYellowBird] = useState(true);
  const [visibleMonkey, setVisibleMonkey] = useState(true);
  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(lake, (gltf) => {
      const entity = document.getElementById('lake-entity');
      if (entity) {
        entity.object3D.add(gltf.scene);
      }
      for (let i = 0; i < 10; i++) {
        generateBalloons();
      }
    });

    // Timer for bird to appear
    const timer = setTimeout(() => {
      setVisibleBird(true);
      setVisibleYellowBird(false);
      setVisibleMonkey(false);}
      , 10000);
    return () => clearTimeout(timer);
  }, []);

  //Here, the balloons are generated randomly
  const generateBalloons = () => {
    const balloon = document.createElement('a-sphere');
    balloon.setAttribute('radius', '0.5');
    balloon.setAttribute('color', 'red');
    balloon.setAttribute('id', `balloon-${sceneRef.current.children.length}`);
    balloon.setAttribute('position', `${Math.random() * 10 - 5} 1 ${-Math.random() * 10}`);
    balloon.setAttribute('static-body', true);
    balloon.addEventListener('click', () => removeBalloon(balloon));
    sceneRef.current.appendChild(balloon);
  };
//Here, the balloon disappers when clicked
const removeBalloon = (balloon) => {
  setTotalBalloonsHit(prevHit => prevHit + 1);
  sceneRef.current.removeChild(balloon);
  play();
};

  return (
    <a-scene ref={sceneRef} id="game1Scene" physics = "debug: true; gravity: -9.8;">
      <a-sound src={lakeAmbiance} autoplay="true" loop="true" volume="0.5"></a-sound>
      <a-assets>
        <img id="sky" src={sky} />
        <a-asset-item id="lake-model" src={lake}></a-asset-item>
      </a-assets>
      <a-sky color="#FFFFFF" material="src: #sky" rotation="0 0 0"></a-sky>
      <a-entity id="lake-entity" position="0 -0.02 0" scale="0.0099 0.0099 0.0099"></a-entity>
      <a-camera id="game1Cam" position="0 0.5 0" raycaster="objects: .raycastable">
        <a-cursor intersection-spawn="event: click; mixin: voxel"></a-cursor>
      </a-camera>
      {/* make the bird disappear appear 30 sec */}
      {visibleBird && <Bird x={0} y={0.1} z={-1} /> }
      {visibleMonkey && <Monkey x={1} y={0.19} z={-1} />} 
      {visibleYellowBird && <YellowBird x={0} y={0.1} z={-1} />}
    </a-scene>
  );
}

export default Game;