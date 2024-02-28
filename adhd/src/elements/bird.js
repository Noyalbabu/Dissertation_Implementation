import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import bird from '../assets/scene.gltf';
import Prototypes from 'prop-types';


function Bird({x, y, z}) {
    const loader = new GLTFLoader();
    loader.load(bird, (d) =>{
      const entity = document.getElementById("bird");
      entity.object3D.add(d.scene);
    }) 

    return (
        <a-scene>
            <a-assets><a-asset-item id="bird" src={bird}></a-asset-item>
        </a-assets>
        <a-entity id="#bird" position={`${x} ${y} ${z}`} > </a-entity>
        </a-scene>
    );
}

Bird.ProtoTypes= {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}

export default Bird;