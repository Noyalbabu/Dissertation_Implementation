import React, {useState} from "react";
import '../App.css';
import ButtonStyle from "./ButtonStyle";
import Game from "./game";
import About from "./about";


function NavPage() {
    const [showGame, setShowGame] = useState();
    const [showAbout, setShowAbout] = useState();

    const handleGame = () => {
        setShowGame(!showGame);
        setShowAbout(false);
    };
    const handleAbout = () => {
        setShowAbout(!showAbout);
        setShowGame(false);
    };
        return (
             <div >{!showGame && !showAbout ?(
                <div className="heading"> 
                    <h1 >ADHD</h1>
                     <h2 >Attention Deficit Hyperactive Disorder</h2>
                    <div className="button">
                    <ButtonStyle title = 'ADHD Awareness' image = "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <div onClick = {handleAbout}>
                    <ButtonStyle title = 'About Us' image = "https://images.unsplash.com/photo-1566513783365-c8b6f6862a01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    </div>
                    <div onClick = {handleGame}>
                    <ButtonStyle title = 'Games' image ="https://images.unsplash.com/photo-1580327344181-c1163234e5a0?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                   </div>
                    </div>
                </div>  ): null}
                {showGame && <Game />}
                {showAbout && <About />}
            </div>  
        
        );
    }

export default NavPage;