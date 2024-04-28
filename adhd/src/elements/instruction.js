import React, {useState} from 'react';
import Game from "./game";


function Instruction() {
    const [showGame, setShowGame] = useState(false);
    const handleGame = () => {
        setShowGame(!showGame);
    };
  return (
    <div >{!showGame ?(
    <div className='instructPage'> 
    <div className='instructPageElements'>
      <h1>Read ME Carefully!</h1>
      <p>This is a Virtual Reality Game.</p>
      <p> You are teleported into a lake. Animals and birds are surrounded in the enviornment. Random number of red colored ballons appear on the screen. </p>
      <p>Your task is to hit the red colored balloons that appear on the screen. Keep track of the number of balloons you popped. Click the ballon to pop.</p>
      <p>The game lasts for 30 seconds. After 30 secs, the game ends and questionaire session begins!</p> 
     <p>You can move around the enviornment using the arrow keys or WASD keys on your keyboard. Use mouse to look around and hitting balloon. <br/>
      </p>
      <button onClick = {handleGame}> Test Me!</button>
      </div>
    </div>  ): null}
    {showGame && <Game />}
    </div>
  );
}

export default Instruction;
