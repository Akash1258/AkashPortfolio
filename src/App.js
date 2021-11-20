import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import Contact from './PortfolioContainer/ContactMe/Contact'
import {Project} from './PortfolioContainer/Projects/Project'

function App() {
  return (
    <div className="App container-fluid">
     <Profile/>
     <AboutMe/>
     <Resume/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
