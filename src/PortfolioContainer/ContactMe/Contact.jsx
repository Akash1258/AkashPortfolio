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
                            <img className="c-icon" src="data:image/png;base64,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" alt="" />
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
                                    <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/akash-kumar06"><FaLinkedin className='social-media-icon' /></a>
                                    <a target="_blank" rel="noopener noreferrer" style={{marginLeft:"10px"}} href="https://github.com/Krakash06"><FaGithubSquare className='social-media-icon' /></a>
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
