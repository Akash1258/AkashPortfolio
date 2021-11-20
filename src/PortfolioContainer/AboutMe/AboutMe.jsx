import React from 'react'
import './about.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


export default function AboutMe() {
    return (
        <div className='mainDiv' id="about">
            <h2 className="pageHeading">About Me</h2>
            <div className='containerDiv'>

                <div className='aboutmeTextDiv'>
                    <p className="aboutme">
                        I have diverse set of skills ranging from HTML CSS JavaScript
                        React to ExpressJs MongoDb NodeJs</p>
                    <ul>
                        <li>I have worked on several different projects solo as well as collaboratively</li>
                        <li>Passionate about implementing and launching new projects</li>
                        <li>Ability to translate business requirements into technical solutions</li>
                    </ul>
                    <p className="aboutme">Looking to start the career as a web developer</p>

                    <div className="colzs">
                        <div className="colz-icons">
                            <a href="http://www.linkedin.com/in/akash-kumar06"><FaLinkedin className='social-media-icon' /></a>
                            <a href="https://github.com/Krakash06"><FaGithubSquare className='social-media-icon' /></a>
                        </div>
                    </div>
                    <div className='aboutBtnDiv'>
                        {/* <button className='hireMeBtn'>Hire Me</button> */}
                        <a href="resume.pdf" download='resume.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
