import React from 'react';
// import '../../App.css';
import './services.css'
import { CustomCursor } from '../CustomCursor/Index';
export default function Services() {
  return (
    <>
    <div className="services-containeer">
    <div className="gallery-container">
    <CustomCursor />
  <div class="glass-panel">
  <h1>Your Media Partner</h1>
  <p className='text'>Unlimited support in media production field from Strike Studios </p>
  <div class="glass-toolbar">
  <button class="glass-button">Watch Videos</button>
  <button className='glass-button'>Browse Photos</button>
  </div>
  </div>
  </div>
  </div>
    </>
  )
}