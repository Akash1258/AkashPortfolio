import "./project.css"
import React from "react";
import { FaGithubSquare, FaLink } from "react-icons/fa";

export const Project = () => {
    return (
        <>
            <div className="projectMain" id="project">
                <h1 className="pageHeadingP">Projects</h1>
                <div className="projectCardDiv">
                    <div className="projectDetail">
                        <h3>Lybrate clone</h3>
                        <p>Lybrate is an online
                            healthcare platform for any kind of medical assistance.</p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/abhishek-hero/lybrate_Clone"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://lybrateclone01.herokuapp.com"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="" />
                                <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/lybrate.jpeg" alt="" />
                    </div>
                </div>



                <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>Worklyf</h3>
                        <p>Worklyf is designed to help employees make their WFH/Hybrid work journey beautiful, fruitful and delightful.</p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/shivamfw10/worklyf"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://worklyf.herokuapp.com/"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                                <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                                <img src="" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="projectImg secProjectImg">
                        <img src="https://user-images.githubusercontent.com/77065070/141605993-0099f02f-82d2-416e-a8de-6eab80f12ca9.png" alt="" />
                    </div>
                </div>
                <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>Zostel Clone</h3>
                        <p>Zostel is one such one-size-fits-all kind of backpacker's hostel chain in
                            India. As compared to the closed and isolated rooms of a hotel, in
                            Zostel you will get to share dorms with strangers from other corners of
                            the world.</p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/kerrybli/zostel-clone"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://zostel-clone-kerrybli.vercel.app/"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                                <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/bootstrap-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src="https://user-images.githubusercontent.com/88572701/148372593-fe50b68d-ce05-4d6a-83de-6333d63a1796.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}