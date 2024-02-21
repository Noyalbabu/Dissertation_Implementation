import React from 'react';
import './ButtonStyle.css';

const ButtonStyle = (props) =>{
    return (
        <>
        <div className="wrap">
            <div className="box">
               {props.title}
               {props.image}
               <image src = {props.image}/>
            </div>
        </div>
        </>
    )
}

export default ButtonStyle;