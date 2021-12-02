import React, { useRef, useState } from 'react'
import './contact.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import emailjs from 'emailjs-com';

export default function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_49mg0vj', 'template_4veg9d8', formRef.current, 'user_fb0quMNXGa3aiqcu3968d')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='c' id="contact">
            {/* <div className="c-bg"></div> */}
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Meet</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img className="c-icon" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" alt="" />
                            +91 9110105001
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src="https://e7.pngegg.com/pngimages/947/916/png-clipart-e-mail-icon-email-computer-icons-symbol-mail-icon-miscellaneous-angle.png" alt="" />
                            kr.akash651998@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjA0e6bQtfAkkmSc-tLkPcS43ZuhgXen9ZA&usqp=CAU" alt="" />
                            Parsa Saran, Bihar
                        </div>
                        <div className="c-info-item socialmedia">
                        <h1 className="c-icon">{""}</h1>
                            <div className="colzs">
                                <div className="colz-icons">
                                    <a target="_blank" rel="noopener" href="http://www.linkedin.com/in/akash-kumar06"><FaLinkedin className='social-media-icon' /></a>
                                    <a target="_blank" rel="noopener" style={{marginLeft:"10px"}} href="https://github.com/Krakash06"><FaGithubSquare className='social-media-icon' /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea name="message" placeholder="Message" rows="5"></textarea>
                        <button className="submitBtn">Submit</button>
                        {done && "Thank You"}
                    </form>
                </div>
            </div>
        </div>
    )
}
