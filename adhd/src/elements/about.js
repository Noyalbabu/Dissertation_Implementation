import React from 'react';
import { TbHomeHand } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { FcIdea } from "react-icons/fc";

function About() {
  return (
    <div className='aboutPage'> 
    <div className='aboutPageElements'>
      <h1>Our Story</h1>
      <p>Our vision is to aid individuals with ADHD. <FaHandHoldingHeart size={50} color='white'/></p>
       <p><TfiWrite size={50} color='white'/> We aim to offer a free and user-friendly online assessment to help individuals recognize potential symptoms of ADHD presnt in them. </p>
       <p> We are excited to share our ambitious vision for the future of our ADHD website. <br/>
          The development of an innovative game specifically designed to support individuals with ADHD in enhancing their attention and concentration skills. <FcIdea size={50} color='white'/> <br/>
          Stay tuned as we continue to work diligently towards bringing this exciting project to fruition, further solidifying our commitment to supporting the ADHD community. 
       </p>

      <a href = '/' ><TbHomeHand size='50' color='white'/></a>
      </div>
    </div>
  );
}

export default About;
