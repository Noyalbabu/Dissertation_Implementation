import React, {useEffect} from 'react';
import 'aframe';
import 'aframe-extras.animation-mixer'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import monkey from '../assets/monkey.glb';
import Prototypes from 'prop-types';

function Monkey({x, y, z}) {
    useEffect(() => {
        const loader = new GLTFLoader();
        const entity = document.getElementById('monkey-entity');
    
        loader.load(monkey, (gltf) => {
        if (entity) {
            entity.object3D.add(gltf.scene);
        }
        });
      }, []);
    return (
        console.log('Monkey in bird.js'),
        <a-entity type="model" id="monkey-entity" position={`${x} ${y} ${z}`} scale="0.2 0.2 0.2" rotation="0 150 0 "></a-entity>  

    );
}

Monkey.ProtoTypes= {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}

export default Monkey;