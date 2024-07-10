import { Suspense } from 'react';
import Contact from './components/Contact.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';

import { Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import Scene from '../public/Scene.jsx'; 



const App = () => {
  return (
    <div>
        <Canvas>
          <PerspectiveCamera makeDefault position={[5, 4.5, 12]} rotation={[0, 0, 0]} />
          <OrbitControls
            enableZoom={false}
            minPolarAngle = {0} 
            maxPolarAngle = {Math.PI / 3} 

          />
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
