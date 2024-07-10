import { Suspense } from 'react';
import Contact from './components/Contact.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from '../public/Scene.jsx'; 


const App = () => {
  return (
    <div>
        <Canvas>
          <OrbitControls/>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
        <Hero/>
        <Projects/>
        <Contact/>
    </div>
  );
  
}

export default App
