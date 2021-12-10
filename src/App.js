import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import Contact from './PortfolioContainer/ContactMe/Contact'
import {Project} from './PortfolioContainer/Projects/Project'
import Card from 'react-bootstrap/Card'
import Toggle from './PortfolioContainer/toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
    <div className="App container-fluid"
           style={{
            backgroundColor: darkMode ? "#2C272E" : "#bebebe",
            color: darkMode && "whitesmoke",
          }}>
      <Toggle/>
     <Profile/>
     <hr/>
     <AboutMe/>
     <Resume/>
     <Project/>
     <Contact/>
     <Card body className="footer">© 2021 Akash Kumar

</Card>
    </div>
    </>
  );
}

export default App;
