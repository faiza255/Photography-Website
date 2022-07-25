// import React, { useState } from 'react';
// import '../../App.css';
import { useState  } from 'react';
import './SignUp.css'
import emailjs from 'emailjs-com'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CustomCursor } from '../CustomCursor/Index'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
// export default function SignUp() {
//   return <h1 className='sign-up'>SIGN UP</h1>;
// }


function Mailer() {
        const [to_name, setTo_Name] = useState("")
        const [from_name, setFrom_name] = useState("")
        const [message, setMessage] = useState("")
     
        const SubmitINfo = (e) => {
            console.log(to_name + from_name + message)
          
            console.log("refresh prevented");
 
 const emailContent = {
    to_name:to_name,
    from_name:from_name,
    message:message,

 }

            emailjs.send('service_ebpbng5', 'template_lzaqmpi', emailContent, 'psH6m-du1u8JHB0YT')
            .then((result) => {
                console.log(result.text); 
            }, (error) => {
                console.log(error.text);
            });
           
            
        };
      
    return (
        <>
      
       <CustomCursor />
        <div className="contacUs">
            <div className="title">
                <h2 className='hover'>Get in Touch</h2>
            </div>

            <div className="box">
                <div className="contact form">
<h3>Send a Message</h3>
<form>
    <div className="formBox">
        <div className="row50">
            <div className="inputBox">
                {/* <span>Full Name</span> */}
                <input type="text" placeholder='Full Name'  onChange={(event) => {setTo_Name(event.target.value)}}/>
            </div>
            <div className="inputBox">
                {/* <span>Email</span> */}
                <input type="text" placeholder='Email'  onChange={(event) => {setFrom_name(event.target.value)}}/>
            </div>
        </div>


        <div className="row100">
            <div className="inputBox">
                <span className='msg'>Message</span>
                <textarea placeholder='Message'  onChange={(event) => {setMessage(event.target.value)}} required></textarea>
            </div>
    </div>

    <div className="row100">
            <div className="inputBox">
                <input type="submit" value="submit" onSubmit={ SubmitINfo } />
                
            </div>
    </div>
    </div>
</form>
</div>
<div className="contact info">
<h3>Contact Info</h3>
<div className="infoBox">
    <div>
        <span> <FaMapMarkerAlt /> </span>
        <p>Gulistan-e-jauhar Karachi <br />Pakistan</p>
    </div>

    <div>
        <span><FaPhoneAlt /></span>
     <a href="/#">aamirbaig638@gmail.com</a>
    </div>

    <div>
        <span><FaMailBulk /></span>
        <a href="/#">+923172073394</a>
    </div>

    <ul className="sci">
        <li><a href="/#"><FaFacebookSquare /></a></li>
        <li><a href="/#"><FaInstagramSquare /></a></li>
        <li><a href="/#"><FaLinkedin /></a></li>
        <li><a href="/#"><FaTwitter /></a></li>

    </ul>
</div>
</div>

            </div>
        </div>

        </>
    )
   
    }
export default Mailer;