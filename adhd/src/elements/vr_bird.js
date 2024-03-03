import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import bird from '../assets/bird_3d.glb';
import Prototypes from 'prop-types';


function Bird({x, y, z}) {
    
    const loader = new GLTFLoader();
        loader.load(bird, (d) =>{
          const entity = document.getElementById("bird");
          entity.object3D.add(d.scene);
        }) 

        return (
            <div>
                <a-entity id="bird" position={`${x} ${y} ${z}` }> </a-entity>
            </div>
        );
    }

    Bird.ProtoTypes= {
        x: Prototypes.number,
        y: Prototypes.number,
        z: Prototypes.number
    }

export default Bird;