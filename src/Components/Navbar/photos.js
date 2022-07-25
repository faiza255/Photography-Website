import React from 'react'
import { CustomCursor } from '../CustomCursor/Index'
function photos() {

  return (
      <>
      <CustomCursor />
    <div className="swiper-container main-slider loading">

        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <figure className="slide-bgimg"style={{ backgroundImage:`url(${'./home.jpg'}})` }}>
<img src="../3.jpeg" alt="" />

                </figure>
                <div className="content">
                    <p className="title">First Slide</p>
                    <spa className="caption">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet omnis odio porro officia quia maiores similique repudiandae, rem unde assumenda ea, nesciunt ipsa minima iste qui! Quam voluptatum a dolore!</spa>
                </div>
            </div>
            <div className="swiper-slide">
                <figure className="slide-bgimg"style={{ backgroundImage:`url(${'./home.jpg'}})` }}>
<img src="../3.jpeg" alt="" />

                </figure>
                <div className="content">
                    <p className="title">Second Slide</p>
                    <spa className="caption">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet omnis odio porro officia quia maiores similique repudiandae, rem unde assumenda ea, nesciunt ipsa minima iste qui! Quam voluptatum a dolore!</spa>
                </div>
            </div>
            <div className="swiper-slide">
                <figure className="slide-bgimg"style={{ backgroundImage:`url(${'./home.jpg'}})` }}>
<img src="../3.jpeg" alt="" />

                </figure>
                <div className="content">
                    <p className="title">Third Slide</p>
                    <spa className="caption">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet omnis odio porro officia quia maiores similique repudiandae, rem unde assumenda ea, nesciunt ipsa minima iste qui! Quam voluptatum a dolore!</spa>
                </div>
            </div>
            <div className="swiper-slide">
                <figure className="slide-bgimg"style={{ backgroundImage:`url(${'./home.jpg'}})` }}>
<img src="../3.jpeg" alt="" />

                </figure>
                <div className="content">
                    <p className="title">Forth Slide</p>
                    <spa className="caption">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet omnis odio porro officia quia maiores similique repudiandae, rem unde assumenda ea, nesciunt ipsa minima iste qui! Quam voluptatum a dolore!</spa>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default photos