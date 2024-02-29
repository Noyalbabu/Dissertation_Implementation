import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import bird from '../assets/lil_bird_man.glb';
import Prototypes from 'prop-types';


function Bird({x, y, z}) {
    
    const loader = new GLTFLoader();
    loader.load(bird, (d) =>{
      const entity = document.getElementById("bird");
      entity.object3D.add(d.scene);
    }) 

    return (
        <a-entity id="bird" position={`${x} ${y} ${z}`}  scale = "0.09 0.09 0.09"> </a-entity>
    );
}

Bird.ProtoTypes= {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}

export default Bird;