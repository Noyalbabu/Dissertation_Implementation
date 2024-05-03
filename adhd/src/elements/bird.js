import React, {useEffect} from 'react';
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import bird from '../assets/cute_little_duck.glb';
import Prototypes from 'prop-types';
function Bird({x, y, z}) {
    useEffect(() => {
        const loader = new GLTFLoader();
        const entity = document.getElementById('bird-entity');
    
        loader.load(bird, (gltf) => {
        if (entity) {
            entity.object3D.add(gltf.scene);
        }
        });
      // Script to animate the bird entity
        const animateBird = () => {
            const birdEntity = document.getElementById('bird-entity');
            if (birdEntity) {
                birdEntity.setAttribute('animation', {
                    property: 'position',
                    to: `${x -0.5} ${y} ${z + 3}`, 
                    dur: 5500, // Duration of animation (in milliseconds)
                    easing: 'linear', // Easing function
                    loop: true, // Loop the animation
                });
            }
        };

        // Call the animation function
        animateBird();  

      }, []);
    return (
        <a-entity type="model" id="bird-entity" position={`${x} ${y} ${z}`} scale="1 1 1" animation-mixer="clip:'*'"></a-entity>  
    );
}

Bird.ProtoTypes= {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}

export default Bird;