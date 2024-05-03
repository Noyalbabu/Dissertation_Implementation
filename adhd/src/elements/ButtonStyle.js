import React from 'react';
import './ButtonStyle.css';

const ButtonStyle = (props) =>{
    return (
        <>
        <div className="wrap">
            <div className="box">
               <img src={props.image} alt ="Error to load"/>
               <h2>{props.title}</h2>
            </div>
        </div>
        </>
    )
}

export default ButtonStyle;