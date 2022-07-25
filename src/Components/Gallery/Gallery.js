import React from 'react'
import './gallery.css'
// import Img1 from './Shutter Stock/Photos/1.JPG'
// import Img2 from './Shutter Stock/Photos/2.JPG'
// import Img3 from './Shutter Stock/Photos/3.JPG'
// import Img4 from './Shutter Stock/Photos/4.JPG'
// import Img5 from './Shutter Stock/Photos/5.JPG'

// import Img6 from './Shutter Stock/Photos/7.JPG'
// import Img7 from './Shutter Stock/Photos/8.JPG'
// import Img8 from './Shutter Stock/Photos/19.JPG'
// import Img9 from './Shutter Stock/Photos/10.JPG'
// import Img10 from './Shutter Stock/Photos/11.JPG'
// import Img11 from './Shutter Stock/Photos/12.JPG'

// import Img13 from './Shutter Stock/Photos/13.JPG'


import Img1 from './images/1.png'
import Img2 from './images/2.jpeg'
import Img3 from './images/3.jpeg'
import Img4 from './images/4.jpeg'
import Img5 from './images/5.jpeg'
import Img6 from './images/6.jpeg'
import Img7 from './images/img-7.jpeg'
import Img8 from './images/img-8.jpeg'
import Img9 from './images/img-9.jpeg'

const Gallery = ()=> {

    let data =[
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc: Img2,
        },
        {
            id:3,
            imgSrc:Img3,
        },
        {
            id:4,
            imgSrc: Img4,
        },
        {
            id:5,
            imgSrc: Img5,
        },
        {
            id:6,
            imgSrc: Img6,
        },
        {
            id:7,
            imgSrc:Img7,
        },
        {
            id:8,
            imgSrc: Img8,
        },
        {
            id:9,
            imgSrc:Img9,
        },
        // {
        //     id:10,
        //     imgSrc: Img10,
        // },
        // {
        //     id:11,
        //     imgSrc: Img11,
        // },
        // {
        //     id:6,
        //     imgSrc: Img6,
        // },
    ]
    
  return (
  <>

  <h1 className='hover galer-head'>Gallery</h1>
<div className='gallery'>

{data.map((item, index)=>{
    return(
<div className='pics' key={index}>
<div class="hover10 column">
<div>
    <figure>
    <img src={item.imgSrc} style={{width:'100%'}} />
    </figure>
     </div> 
    </div>
    </div>

    
    )
})}
</div>

  </>
  )
}

export default Gallery