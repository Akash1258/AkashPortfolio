import React from 'react'
import Typical from 'react-typical'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Navbar, Container, Nav } from 'react-bootstrap';
// import { Link } from 'react-scroll'
import './profile.css'


export default function Profile() {
    return (
        <>
            <div className="row" >
                <div className="profile-container col-md-12" id="home">
                    <div className="row ">
                        <div className="col-md-12">
                            
                            <Navbar  expand="lg"  className="myNav">
                                <Container>
                                    <Navbar.Brand href="#home"><p style={{color:"#ffffff"}}>Akash Kumar</p></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:"whitesmoke"}} />
                                    <Navbar.Collapse id="basic-navbar-nav" >
                                        <Nav className="me-2 mx-auto  my-md-0 mr-md-3" >
                                        <Nav.Link href="#home"><p className="menu-content">HOME</p></Nav.Link>
                                        <Nav.Link href="#about"><p className="menu-content">ABOUT</p></Nav.Link>
                                        <Nav.Link href="#resume"><p className="menu-content">SKILLS</p></Nav.Link>
                                        <Nav.Link href="#project"><p className="menu-content">PROJECTS</p></Nav.Link>
                                        <Nav.Link href="#contact"><p className="menu-content">CONTACT</p></Nav.Link> 
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </div>
                    <div className="row p-5 " >
                        <div className="profile-parent col-md-12 mt-0 mb-5 p-5">
                            <div className="profile-details">
                                <div className="colz">
                                    <div className="colz-icon">
                                        <a href="http://www.linkedin.com/in/akash-kumar06"><FaLinkedin className='social-media-icon' /></a>
                                        <a href="https://github.com/Krakash06"><FaGithubSquare className='social-media-icon' /></a>
                                    </div>
                                </div>

                                <div className="profile-details-name">
                                    <span className='primary-text'></span>
                                    {" "}
                                    Hello, I'm <span className="highlighted-text">Akash Kumar</span>
                                </div>
                                <div className="profile-details-role">
                                    <span className='primary'>
                                        {" "}
                                        <h1>
                                            {" "}
                                            <Typical className="typicalText"
                                                loop={Infinity}
                                                steps={["Web Developer",
                                                    1000,
                                                    "Problem Solver",
                                                    1000,
                                                ]}
                                            />
                                        </h1>
                                        <span className='profile-role-tagline'>
                                        It's Nice To Meet You. I Design And Code Beautifully And I Love What I Do.
                                        </span>
                                    </span>
                                </div>
                                <div className='profile-option'>

                                    <a href="resume.pdf" download='resume.pdf'>
                                        <button className="getResumeBtn">Get Resume</button>
                                    </a>
                                </div>
                            </div>
                            <div className="profile-picture" >
                                <div className="profile-picture-background">
                                    <img src=".././akash.png" alt="profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
