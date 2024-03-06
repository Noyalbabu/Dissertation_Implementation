import React,  { useState } from "react";
import {Canvas} from '@react-three/fiber';
import {Model} from '../assets/cozy_lake/Scene';
import '../App.css';
//import sky from '../Images/sky.jpg';

function Test(){
    return (
        <div style={{ width: '155vw', height: "80vh" }}>
        <Canvas  flat linear camera={{fov: 60, near:0.1, far:1000}}>
            <ambientLight intensity={5}/>
            <spotLight position={[70, 70, 70]} angle={0.15} penumbra={1}/>
            <pointLight position={[-10, -10, -10]}/>
            <Model position={[-2,-0.5, -3]} 
            rotation ={[0.1, 0.67, 0]} 
            scale = {[0.02, 0.02, 0.02]}/>
        </Canvas>
        </div>
    );
}

export default Test;