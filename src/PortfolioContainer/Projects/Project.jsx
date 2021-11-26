import "./project.css"
import { FaGithubSquare ,FaLink} from "react-icons/fa";

export const Project = () => {
    return (
        <>
            <div className="projectMain" id="project">
                <h1 className="pageHeading">Projects</h1>
                <div className="projectCardDiv">
                    <div className="projectDetail">
                        <h3>Lybrate clone</h3>
                        <p>Lybrate is an online
                            healthcare platform for any kind of medical assistance.</p>
                        <a href="https://github.com/abhishek-hero/lybrate_Clone"><FaGithubSquare className='social-media-icon' /></a>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <button>JavaScript</button>
                            <button>MongoDB</button>
                            <button>ExpressJS</button>
                            <button>HTML</button>
                            <button>CSS</button>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/lybrate.jpeg" alt="" />
                    </div>
                </div>



                <div className="projectCardDiv">
                    <div className="projectDetail">
                        <h3>Worklyf</h3>
                        <p>Worklyf is designed to help employees make their WFH/Hybrid work journey beautiful, fruitful and delightful.</p>
                        <div className="links">
                        <a href="https://github.com/shivamfw10/worklyf"><FaGithubSquare className='social-media-icon' /></a>
                        <a href="https://worklyf.herokuapp.com/"><FaLink className='social-media-icon'/></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <button>React</button>
                            <button>Bootstrap</button>
                            <button>HTML</button>
                            <button>CSS</button>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/worklyf.png" alt="" style={{backgroundSize:"cover",height:"300px"}} />
                    </div>
                </div>
            </div>
        </>
    );
}