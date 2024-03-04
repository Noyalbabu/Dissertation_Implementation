import 'aframe';
import 'aframe-extras';
// index.js
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
        <a-scene>
            <a-assets>
                <a-asset-item id="bird" response-type = "arraybuffer" src={bird}></a-asset-item>
            </a-assets>
            <a-entity gltf-model="#bird" position={`${x} ${y} ${z}`}  scale="0.0099 0.0099 0.0099"> </a-entity>
        </a-scene>
        
    );
}

Bird.ProtoTypes= {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}

export default Bird;