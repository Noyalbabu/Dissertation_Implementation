import React, {useEffect} from 'react';
import 'aframe';
import 'aframe-extras';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import bird from '../assets/love_birds_parrot.glb';
import Prototypes from 'prop-types';

function Bird({x, y, z}) {
    const AFRAME = window.AFRAME;
    useEffect(() => {
        const loader = new GLTFLoader();
        const entity = document.getElementById('bird-entity');
    
        loader.load(bird, (gltf) => {
          if (entity) {
            entity.object3D.add(gltf.scene);
            debugger;
          }
        });
      }, []);

    return (
            <a-entity id="bird-entity" anime position={`${x} ${y} ${z}` }> </a-entity>  
    );
}

Bird.ProtoTypes= {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}

export default Bird;