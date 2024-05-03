import React, {useEffect} from 'react';
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import bird from '../assets/rubber_duck.glb';
import Prototypes from 'prop-types';

function YellowBird({x, y, z}) {
    useEffect(() => {
        const loader = new GLTFLoader();
        const entity = document.getElementById('Ybird-entity');
    
        loader.load(bird, (gltf) => {
        if (entity) {
            entity.object3D.add(gltf.scene);
        }
        });
      // Script to animate the bird entity
        const animateBird = () => {
            const birdEntity = document.getElementById('Ybird-entity');
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
        <a-entity type="model" id="Ybird-entity" position={`${x} ${y} ${z}`} scale="0.3 0.3 0.3" animation-mixer="clip:'*'"></a-entity>  
    );
}

YellowBird.ProtoTypes= {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}

export default YellowBird;