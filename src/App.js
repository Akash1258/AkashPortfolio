import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import Contact from './PortfolioContainer/ContactMe/Contact'
import {Project} from './PortfolioContainer/Projects/Project'
import Card from 'react-bootstrap/Card'

function App() {
  return (
    <>
    <div className="App container-fluid">
     <Profile/>
     <AboutMe/>
     <Resume/>
     <Project/>
     <Contact/>
     <Card body>This is some text within a card body.</Card>
    </div>
    </>
  );
}

export default App;
