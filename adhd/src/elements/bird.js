import React, {useEffect} from 'react';
import 'aframe';
import 'aframe-extras';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import bird from '../assets/love_birds_parrot.glb';
import Prototypes from 'prop-types';

function Bird({x, y, z}) {

    useEffect(() => {
        const loader = new GLTFLoader();
        const entity = document.getElementById('bird-entity');
    
        loader.load(bird, (gltf) => {
        if (entity) {
            debugger;
            entity.object3D.add(gltf.scene);
        }
        });
      }, []);
    return (
            <a-entity id="bird-entity" position={`${x} ${y} ${z}`} animation> </a-entity>  
    );
}

Bird.ProtoTypes= {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}

export default Bird;