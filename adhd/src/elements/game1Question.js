import React from 'react';
import '../App.css';
import { useLocation } from 'react-router-dom';
// Define your component using JSX syntax
function Game1Q() {
  const location = useLocation();
  const UserBalloonsHit = location.state.data;
  //Getting to understand the players concentration in given task!
  const getAnswer1 = () => {
    document.getElementById('submit').style.display = 'none';
    const ans1 = document.getElementById('ans1').value;
    console.log(ans1);
    console.log(UserBalloonsHit);

    if (ans1 == UserBalloonsHit) {
      //display result1 paragraph
      document.getElementById('result').style.display = 'block';
      document.getElementById('result1').style.display = 'block';
      document.getElementById('result2').style.display = 'none';
    }else{
      //display result2 paragraph
      document.getElementById('result').style.display = 'block';
      document.getElementById('result1').style.display = 'none';
      document.getElementById('result2').style.display = 'block';
    
    }
  }

  //Understanding the players observation skills
  const getAnswer2 = () => {
    document.getElementById('Q2submit').style.display = 'none';
    document.getElementById('Q2result').style.display = 'block';
    const ansballoon = document.getElementById('ans1').value;
    let ans2 = document.querySelector('input[name="a2"]:checked').id;
    if(ans2 == 'q2a1'){
    if (ans2 == 'q2a1' && ansballoon == UserBalloonsHit) {
      //display result1 paragraph
      document.getElementById('Q2result1').style.display = 'block';
      document.getElementById('Q2result2').style.display = 'none';
      document.getElementById('Q2result3').style.display = 'none';
    }
    else if(ans2 == 'q2a1' && ansballoon  != UserBalloonsHit){
      //  display result2 paragraph
      document.getElementById('Q2result1').style.display = 'none';
      document.getElementById('Q2result2').style.display = 'block';
      document.getElementById('Q2result3').style.display = 'none';}
  }else {
    //display result3 paragraph
    document.getElementById('Q2result1').style.display = 'none';
    document.getElementById('Q2result2').style.display = 'none';
    document.getElementById('Q2result3').style.display = 'block';
  }
  }

  const getAnswer3 = () => {
    document.getElementById('Q3submit').style.display = 'none';
    const ans3 = document.getElementById('ans3').value.toLowerCase();

    if (ans3 == 'yellow') {
      //display result1 paragraph
      document.getElementById('Q3result').style.display = 'block';
      document.getElementById('Q3result1').style.display = 'block';
      document.getElementById('Q3result2').style.display = 'none';
    }else{
      //display result2 paragraph
      document.getElementById('Q3result').style.display = 'block';
      document.getElementById('Q3result1').style.display = 'none';
      document.getElementById('Q3result2').style.display = 'block';
    
    }
  }
  return (
    <div className='questionaire1'>
      <h1>TEST YOUR MARVELOUS BRAIN</h1>
      <ques>Question 1
        <div id='hideQ'>
        <p>How many ballons did you pop?</p>
        <div id='submit' style={{display:'block'}}>
        <input type='text' id='ans1' name='ans1'/> 
        <button type="submit" onClick={getAnswer1}>Submit</button></div>
        <p id='result' style={{display: 'none'}}>You popped {UserBalloonsHit} ballons!</p>
        <p id='result1' style={{display: 'none'}}>You work deeply on the given task, indicating your brain capacity to do a specified task is GOOD.</p>
        <p id='result2' style={{display: 'none'}}>Most likely you might be distracted to certain colors or sounds in the game. Do not worry the balloons were made to distract you! </p>
        </div>
      </ques>

      <ques>Question 2
        <div id='hideQ'>
        <p>Count the creatures, both animals and birds, that you have observed in the game.</p>
        <p id='Q2result' style={{display: 'none'}}>Three creatures were depicted in the game: a monkey and two distinct types of ducks.</p>
        <p id='Q2result1' style={{display: 'none'}}>You are exceptional! The human brain has a remarkable ability to filter out distractions when faced with a challenge. In this game the balloons were the distraction. Your ability to understand the enviornment was the challenge. Despite the task to count the balloons, you were able to remain aware of your surroundings.</p>
        <p id='Q2result2' style={{display: 'none'}}>Given task was to count the ballons you pop. The answer indicates that you are most likely to get distracted on sounds, colors and figures. Good job on focusing your envionment.</p>
        <p id='Q2result3' style={{display: 'none'}}>The human brain has a remarkable ability to filter out distractions when faced with a challenge. In this instance, the task was to count the balloons you popped. . Your brain may have focused solely on the balloons, making it challenging to notice other elements in the game.</p>
        <input type='radio' name='a2' id='q2a1' /> Three  <br/>
        <input type='radio' name='a2' id='q2a2' /> Two     <br/>
        <input type='radio' name='a2' id='q2a3' /> Not sure!
        </div>
        <div id='Q2submit' style={{display:'block'}}>
        <button type="submit" onClick={getAnswer2}>Submit</button></div>
      </ques>

      <ques>Question 3
        <div id='hideQ'>
        <p>Could you answer the color of the first duck appeared in the game? </p>
        <div id='Q3submit' style={{display:'block'}}>
        <input type='text' id='ans3' name='ans3'/> 
        <button type="Q3submit" onClick={getAnswer3}>Submit</button></div>
        <p id='Q3result' style={{display: 'none'}}>The color of the first appeared duck is yellow.</p>
        <p id='Q3result1' style={{display: 'none'}}> Amazing! You have great attention skills and good vision.</p>
        <p id='Q3result2' style={{display: 'none'}}> When the brain receives a large amount of information, there is a possibility that it may overlook certain data. Most of the people might not get this answer right. Good job for attempting to answer. </p>
        </div>
      </ques>

      <a href = '/' ><button>Back Home</button></a>
    </div>
  );
};

export default Game1Q;
