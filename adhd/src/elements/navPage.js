import React from "react";
import '../App.css';
import ButtonStyle from "./ButtonStyle";

function NavPage() {
        return (
            <div >
                <div className="heading">
                    <h1 >ADHD</h1>
                    <h2 >Attention Deficit Hyperactive Disorder</h2>
                    <div className="button">
                    <ButtonStyle title = 'About US'/><ButtonStyle title = 'What is ADHD?'/><ButtonStyle title = 'Games'/>  
                    </div>
                </div>    
            </div> 
        );
    }

export default NavPage;