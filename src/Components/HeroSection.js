import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import bgImage from '../Components/video.mp4'
import { Link } from 'react-router-dom';
function HeroSection() {

  
    
  return (
    <section class="showcase">
    <div class="video-container">
    <video autoPlay loop muted>
<source src={bgImage} type="video/mp4" />
     </video>
    </div>
    <div class="content">
      <h1 className='hover'>Photography Website</h1>
      <h3>“Photography is the art of making memories tangible”</h3>
      <Button buttonStyle='btn--outline'>Contact Me</Button>
    </div>
  </section>


  );


}


export default HeroSection;