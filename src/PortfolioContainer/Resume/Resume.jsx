import React from 'react'
import './resume.css'
import { FcGraduationCap } from "react-icons/fc";

export default function Resume() {
    return (
        <div className='mainDiv' id="resume">
            <h2 className="pageHeading">Resume</h2>
            {/* <p className="pageSubHeading">My formal Bio Details</p> */}
            <div className='educationQual'>
                <div>
                    <h1 className="mySkilltxt">My Skills</h1>
                    <div className="skillDiv">
                        <div className="fronEnd">
                            <h3>Front End</h3>
                            <div className="skillcardMain">
                                <div className="skillCard">
                                    <img src=".././images/html.png" alt="" />
                                    <p>HTML</p>
                                </div>
                                <div className="skillCard">
                                    <img src=".././images/csscolor.png" alt="" />
                                    <p>CSS</p>
                                </div>

                                <div className="skillCard">
                                    <img src=".././images/javascriptcolor.png" alt="" />
                                    <p>JAVASCRIPT</p>
                                </div>
                                <div className="skillCard">
                                    <img src=".././images/react.png" alt="" />
                                    <p>REACT</p>
                                </div>
                            </div>

                        </div>
                        <div className="backEnd">
                            <h3>BACK-END</h3>
                            <div className="skillcardMain">
                                <div className="skillCard">
                                    <img src=".././images/Expressjs.png" alt="" />
                                    <p>EXPRESSJS</p>
                                </div>
                                <div className="skillCard">
                                    <img src=".././images/nodejscolor.png" alt="" />
                                    <p>NODEJS</p>
                                </div>
                                <div className="skillCard">
                                    <img src=".././images/mongodb.png" alt="" />
                                    <p>MONGODB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div><FcGraduationCap className='educationQualIcon' />
                    <span className='educationQualText'>Educational Qualification</span>
                    <div className="eduDiv">
                        <div className='present'>
                            <p className="line"></p>
                            <p>June,2021 - Present</p>
                            <p className="courseDate"></p>
                            <div>
                                <h2>Full Stack Developer</h2>
                                <h6>Masai School, Banglore</h6>
                                <p>Learning Full Stack Developement and Communication skills.</p>
                            </div>
                        </div>
                        <div className='present'>
                            <p className="line"></p>
                            <p>2016 - 2020</p>
                            <p className="courseDate"></p>
                            <div>
                                <h2>Computer Science Engineering</h2>
                                <h6>MITS Rayagada, Odisha</h6>
                                <p>Got 76.30% through out semester.</p>
                            </div>
                        </div>
                        <div className='present'>
                            <p className="line"></p>
                            <p>2014 - 2016</p>
                            <p className="courseDate"></p>
                            <div>
                                <h2>Intermediate</h2>
                                <h6>PN College, Parsa</h6>
                                <p>Got 66.40%.</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
