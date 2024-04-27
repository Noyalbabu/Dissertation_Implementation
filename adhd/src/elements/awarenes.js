import React, {useState, useEffect}from 'react';
import { TbHomeHand } from "react-icons/tb";
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';

function Awareness() {
  const [bgImageindex, setBgImageindex] = useState(0);
  const bgImages = [img1, img2, img3, img4, img5];
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the background image index, or reset it if it reaches the end
      setBgImageindex(prevIndex =>
        prevIndex ===  bgImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change background image every 1 second

    // Clear the interval when the component unmounts or when the background image URLs change
    return () => clearInterval(interval);
  }, [ bgImages]);

  const getAnswer = () => {
    document.getElementById('animAns').style.display = 'none';
    if(document.getElementById('ans').value == 5){
      document.getElementById('result').style.display = 'block';
      document.getElementById('result1').style.display = 'block';}
    else{
      document.getElementById('result').style.display = 'block';
      document.getElementById('result2').style.display = 'block';}
  }

  return (
    
    <div className='awarenessPage' style={{ backgroundImage:`url(${bgImages[bgImageindex]})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}> 
    <div className='awarenessPageElements'>
    <div className='element'>
      <h1>What is ADHD? </h1>
      <p>As published in NHS,Attention deficit hyperactivity disorder (ADHD) is a condition that affects people's behaviour. People with ADHD can seem restless, may have trouble concentrating and may act on impulse.  </p>
    </div>
    <div className='element'>
      <h1>Signs and Symptoms </h1>
      <p>Symptoms of ADHD tend to be noticed at an early age and may become more noticeable when a child's circumstances change, such as when they start school.

Most cases are diagnosed when children are under 12 years old, but sometimes it's diagnosed later in childhood.

Sometimes ADHD was not recognised when someone was a child, and they are diagnosed later as an adult.

The symptoms of ADHD may improve with age, but many adults who were diagnosed with the condition at a young age continue to experience problems.

People with ADHD may also have additional problems, such as sleep and anxiety disorders. <br/>
Major symptoms are : <br/>
Restlessness<br/>
Diminished focus<br/>
Deficient concentration skills<br/>
Impatience<br/>
Difficulty in organizing tasks<br/>
</p>
    </div>
    <div className='element'>
      <h1>Common Facts about ADHD</h1>
      <p>Studies conducted by ‘The World Federation of ADHD International Consensus Statement: 208 Evidence-Based conclusions about the disorder state that around 5.9% of youth and 2.5% of adults are diagnosed with ADHD symptoms </p>
      <p>When we take adult gender into account, the male-female sex ratio of having ADHD is balanced among them. </p>
      <p>In children, about 2.5 and 4 times more males than females present with ADHD.</p>
      <p><h3>Test your marvelous brain!</h3><br/>
      How many animals appeared in the background? </p>
        <input type='text' id='ans' name='ans'/>
        <div id='animAns' style={{display:'block'}}>
        <button type="submit" onClick={getAnswer}>Submit</button></div>
        <p id='result' style={{display: 'none'}}>There were 5 animals appeared in the background!</p>
        <p id='result1' style={{display: 'none'}}>Good Job! You have good attention and focus.</p>
        <p id='result2' style={{display: 'none'}}>You might have missed some animals! </p>
    </div>
    </div>
    <a href = '/' ><TbHomeHand size='50' color='white'/></a>
    </div>
  );
}

export default Awareness;