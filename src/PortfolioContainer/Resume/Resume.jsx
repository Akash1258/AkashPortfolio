import React from 'react'
import './resume.css'
// import { FcGraduationCap } from "react-icons/fc";

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
                                    <img style={{marginTop:"-17px"}} src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png" alt="" />
                                </div>
                                <div className="skillCard">
                                <p style={{fontWeight:"bolder"}}>CSS</p>
                                    <img style={{marginTop:"-17px"}} src="https://camo.githubusercontent.com/24ef00f447fc6866cb7c411684fd39f0314be52472d4847547210ef51122311f/68747470733a2f2f63646e342e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f69636f6e73696d706c652d70726f6772616d6d696e672f3531322f6373732d3531322e706e67" alt="" />
                                </div>

                                <div className="skillCard">
                                <p style={{fontWeight:"bolder"}}>JavaScript</p>
                                    <img style={{marginTop:"-17px"}} src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="" />
                                </div>
                                <div className="skillCard">
                                    <p style={{fontWeight:"bolder"}}>REACT</p>
                                    <img style={{marginTop:"-17px"}} src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" alt="" />
                                </div>
                            </div>

                        </div>

                        <div className="backEnd">
                            <h3>BACK-END</h3>
                            <div className="skillcardMain">
                                <div className="skillCard2">
                                <p style={{fontWeight:"bolder"}}>ExpressJs</p>
                                    <img style={{marginTop:"-28px"}} src="https://fd-development.com/images/expressjs.png" alt="" />
                                </div>
                                <div className="skillCard2">
                                    <img src="https://devstickers.com/assets/img/pro/g1nl.png" alt="" />
                                </div>
                                <div className="skillCard2">
                                <p style={{fontWeight:"bolder"}}>MongoDB</p>
                                    <img  src="https://seeklogo.com/images/M/mongodb-logo-427DDF8FDE-seeklogo.com.png" alt="" />
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
