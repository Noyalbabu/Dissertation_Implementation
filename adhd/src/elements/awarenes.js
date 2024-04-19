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

  return (
    
    <div className='awarenessPage' style={{ backgroundImage:`url(${bgImages[bgImageindex]})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}> 
    <div className='awarenessPageElements'>
    <div className='element'>
      <h1>What is ADHD? </h1>
      <p>As published in NHS, </p>
    </div>
    <div className='element'>
      <h1>Signs and Symptoms </h1>
      <p>iewhdoiwefuwp</p>
    </div>
    <div className='element'>
      <h1>Common Facts about ADHD</h1>
      <p>iewhdoiwefuwp</p>
    </div>
    </div>
    <a href = '/' ><TbHomeHand size='50' color='white'/></a>
    </div>
  );
}

export default Awareness;