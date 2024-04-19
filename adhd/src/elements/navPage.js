import React, {useState} from "react";
import '../App.css';
import ButtonStyle from "./ButtonStyle";
import Game from "./game";
import About from "./about";
import Awareness from "./awarenes";
import { LuCopyright } from "react-icons/lu";
import { MdMarkEmailUnread } from "react-icons/md";
import { LiaHandsHelpingSolid } from "react-icons/lia";

function NavPage() {
    const [showGame, setShowGame] = useState();
    const [showAbout, setShowAbout] = useState();
    const [showAwareness, setShowAwareness] = useState();

    const handleGame = () => {
        setShowGame(!showGame);
        setShowAbout(false);
        setShowAwareness(false);
    };
    const handleAbout = () => {
        setShowAbout(!showAbout);
        setShowGame(false);
        setShowAwareness(false);
    };
    const handleAwareness = () => {
        setShowAwareness(!showAwareness);
        
    };
        return (
             <div >{!showGame && !showAbout && !showAwareness ?(
                <div className="heading"> 
                    <h1 >ADHD</h1>
                     <h2>Attention Deficit Hyperactive Disorder</h2>
                     <p>"The symptoms of ADHD can be challenging, but they can also be a source of great creativity and innovation." - Edward Hallowell</p>
                     <div className="infobar">
                     <p><MdMarkEmailUnread size={30}/> adhdeaxmple@gmail.com &nbsp; &nbsp;</p>      
                     <p><LiaHandsHelpingSolid size={30}/>01129887680</p>
                     </div>
                    <div className="button">
                    <div onClick = {handleAwareness}>
                    <ButtonStyle title = 'ADHD Awareness' image = "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <div onClick = {handleAbout}>
                    <ButtonStyle title = 'Our Story' image = "https://images.unsplash.com/photo-1566513783365-c8b6f6862a01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    </div>
                    <div onClick = {handleGame}>
                    <ButtonStyle title = 'Game Test' image ="https://images.unsplash.com/photo-1580327344181-c1163234e5a0?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                   </div>
                    </div>
                </div>  ): null}
                {showGame && <Game />}
                {showAbout && <About />}
                {showAwareness && <Awareness />}
                <footer className="footer">
                    <p> <LuCopyright size={20} /> 
                     Academic Project 2023-2024 by Noyal Babu </p>
                </footer>
            </div>  
        
        );
    }

export default NavPage;