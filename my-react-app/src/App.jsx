import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Introduction from './components/Introduction.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';


//import Scene from '../public/Scene.jsx'; 

import { Element } from 'react-scroll';



const App = () => {
  return (
    <div>
      <Element id="Hero">
        <Hero/>
      </Element>
      <Nav/>
      <Element id="Introduction">
        <Introduction/>
      </Element>
      <Element id="Projects">
        <Projects/>
      </Element>
      <Element id="Contact">
        <Contact/>
      </Element>
      
    </div>
  );
  
}

export default App
