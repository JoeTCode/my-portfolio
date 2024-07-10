import { Suspense } from 'react';
import Contact from './components/Contact.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';

import { Canvas, useLoader} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import Scene from '../public/Scene.jsx'; 
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
extend({ TextGeometry })


const Text = ({ text, color, ...props }) => {
  const font = useLoader(FontLoader, '../public/fonts/Inter Black_Regular.json');
  const textOptions = {
    font,
    size: 1,
    depth: 0.1,
  };

  return (
    <mesh {...props}>
      <textGeometry args={[text, textOptions]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

const App = () => {
  return (
    <div>
        <Canvas>
          <ambientLight intensity={2.5} />
          <pointLight position={[10, 10, 10]} />
          <PerspectiveCamera makeDefault position={[-1, 4.5, 13]} rotation={[0, 0, 0]} />
          <Text text="Hello, I'm " position={[-8, 4.5, 3]} color="white" />
          <Text text="Joe" position={[-1.6, 4.5, 3]} color="rgb(151, 106, 249)" />
          <OrbitControls
            enableZoom={false}
            minPolarAngle = {0} 
            maxPolarAngle = {Math.PI / 2.9} 

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
