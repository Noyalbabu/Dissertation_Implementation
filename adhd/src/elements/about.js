import React from 'react';
import { TbHomeHand } from "react-icons/tb";

function About() {
  return (
    <div className='aboutPage'> 
    <div className='aboutPageElements'>
      <h1>Our Story</h1>
      <p>Our mission is to aid individuals with ADHD. As we observe our surroundings, we encounter peers, colleagues, friends, and family members grappling with this condition. While treatment exists, it often comes at a hefty cost—£1160 for a mere 2-hour ADHD assessment. 
        We aim to offer a free and user-friendly online assessment to help individuals recognize potential symptoms of ADHD presnt in them. We are on the mission to develope a game to assist those with ADHD in honing their attention and concentration abilities.
      </p>

      <a href = '/' ><TbHomeHand size='50' color='white'/></a>
      </div>
    </div>
  );
}

export default About;
