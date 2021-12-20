import React from 'react'
import './resume.css'
import htmlIcon from '../assets/htmlIcon.svg'
import cssIcon from '../assets/cssIcon.svg'
import jsIcon from '../assets/jsIcon.svg'
import reactIcon from '../assets/reactIcon.svg'
import expressIcon from '../assets/expressIcon.svg'
import nodeIcon from '../assets/nodeIcon.svg'
import mongoIcon from '../assets/mongoIcon.svg'



export default function Resume() {
    return (
        <div className='mainDiv' id="resume">
            <h2 className="pageHeadings">Skills</h2>
            {/* <p className="pageSubHeading">My formal Bio Details</p> */}
            <div className='educationQual'>
                <div>
                    <div className="skillDiv">
                        <div className="fronEnd">
                            <h3>FRONT-END</h3>
                            <div className="skillcardMain">
                                <div className="skillCard">
                                <p style={{fontWeight:"bolder"}}>HTML</p>
                                    <img style={{marginTop:"-17px"}} src={htmlIcon} alt="" />
                                </div>
                                <div className="skillCard">
                                <p style={{fontWeight:"bolder"}}>CSS</p>
                                    <img style={{marginTop:"-17px"}} src={cssIcon} alt="" />
                                </div>

                                <div className="skillCard">
                                <p style={{fontWeight:"bolder"}}>JavaScript</p>
                                    <img style={{marginTop:"-10px",width:"90%"}} src={jsIcon} alt="" />
                                </div>
                                <div className="skillCard">
                                    <p style={{fontWeight:"bolder"}}>REACT</p>
                                    <img style={{marginTop:"-10px",width:"90%"}} src={reactIcon} alt="" />
                                </div>
                            </div>

                        </div>

                        <div className="backEnd">
                            <h3>BACK-END</h3>
                            <div className="skillcardMain">
                                <div className="skillCard2">
                                <p style={{fontWeight:"bolder"}}>ExpressJs</p>
                                    <img style={{marginTop:"-17px"}} src={expressIcon} alt="" />
                                </div>
                                <div className="skillCard2">
                                <p style={{fontWeight:"bolder"}}>NodeJs</p>
                                    <img style={{marginTop:"-17px"}} src={nodeIcon} alt="" />
                                </div>
                                <div className="skillCard2">
                                <p style={{fontWeight:"bolder"}}>MongoDB</p>
                                    <img style={{marginTop:"-17px"}} src={mongoIcon} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div><FcGraduationCap className='educationQualIcon' />
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
                </div> */}
            </div>
            <div>
            </div>
        </div>
    )
}
