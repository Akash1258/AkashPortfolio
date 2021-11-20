import React from 'react'
import Typical from 'react-typical'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';

import './profile.css'

export default function Profile() {
    return (
            <div className="row" >
                <div className="profile-container col-md-12" id="home">
                    <div className="row ">
                        <div className="col-md-12">
                            
                            <Navbar className="navBar-bg" expand={false} fixed="top">
                                <Container fluid>
                                    <Navbar.Brand ><h5 className="heading">Akash Kumar</h5></Navbar.Brand>
                                    <Navbar.Toggle className="toggle-btn" aria-controls="offcanvasNavbar"
                                        style={{ background: "#ffffff" }} />
                                    <Navbar.Offcanvas
                                        id="offcanvasNavbar"
                                        aria-labelledby="offcanvasNavbarLabel"
                                        placement="left"
                                        className="menu-bar"
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                                <div className="menubar-img">
                                                    <img src=".././akash.png" alt="profile" />
                                                </div>
                                            </Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Nav>
                                                <Nav.Link href="#home"><p className="menu-content">HOME</p></Nav.Link>
                                                <Nav.Link href="#about"><p className="menu-content">ABOUT</p></Nav.Link>
                                                <Nav.Link href="#resume"><p className="menu-content">RESUME</p></Nav.Link>
                                                <Nav.Link href="#project"><p className="menu-content">PROJECTS</p></Nav.Link>
                                                <Nav.Link href="#contact"><p className="menu-content">CONTACT</p></Nav.Link>
                                            </Nav>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                            </Navbar>
                        </div>
                    </div>
                   <div className="row p-1">
                       <div className="col-md-12 ">
                       <div className="profile-parent mt-5 mb-5 p-5">
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
                                Hello, I'M <span className="highlighted-text">Akash Kumar</span>
                            </div>
                            <div className="profile-details-role">
                                <span className='primary-text'>
                                    {" "}
                                    <h1>
                                        {" "}
                                        <Typical
                                            loop={Infinity}
                                            steps={["Web Developer",
                                                1000,
                                                "Problem Solver",
                                                1000,
                                            ]}
                                        />
                                    </h1>
                                    <span className='profile-role-tagline'>
                                        Know of building application with front and back end operation
                                    </span>
                                </span>
                            </div>
                            <div className='profile-option'>
                                {/* <button className="btn-primary-btn">
                                {" "}
                                Hire Me{" "}
                            </button> */}
                                <a href="resume.pdf" download='resume.pdf'>
                                    <button className="btn highlighted-btn">Get Resume</button>
                                </a>
                            </div>
                        </div>
                        <div className="profile-picture">
                            <div className="profile-picture-background">
                                <img src=".././akash.png" alt="profile" />
                            </div>
                        </div>
                    </div>
                       </div>
                   </div>
                </div>
            </div>
    );
}
