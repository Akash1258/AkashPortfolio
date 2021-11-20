import "./project.css"
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
                        <a href="https://github.com/abhishek-hero/lybrate_Clone">GITHUB LINK</a>
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
            </div>
        </>
    );
}