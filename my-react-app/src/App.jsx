import { Suspense } from 'react';

import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Nav from './components/Nav.jsx';

import { Canvas, useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';

import Scene from '../public/Scene.jsx'; 
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import Introduction from './components/Introduction.jsx';
extend({ TextGeometry })

import { Element } from 'react-scroll';

const HeaderText = ({ text, color, ...props }) => {
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

const SubText = ({ text, color, ...props }) => {
  const font = useLoader(FontLoader, '../public/fonts/Inter_Regular.json');
  const textOptions = {
    font,
    size: 0.4,
    depth: 0.1,
  };

  return (
    <mesh {...props}>
      <textGeometry args={[text, textOptions]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

const canvasContainerStyles = {
  width: '100vw',
  height: '90vh',
  
  
  background: `url('../public/sb2.jpg') no-repeat`,
  backgroundSize: 'cover',
};

const App = () => {
  return (
    <div>
      <div>
        <Canvas style={canvasContainerStyles}>
          <ambientLight intensity={2.5} />
          <pointLight position={[10, 10, 10]} />
          <PerspectiveCamera makeDefault position={[-1, 4.5, 14]} rotation={[0, 0, 0]} />
          <HeaderText  text="Hello, I'm " position={[-8, 4.5, 3]} color="white" />
          <HeaderText text="Joe." position={[-1.6, 4.5, 3]} color="rgb(151, 106, 249)" />
          <SubText text="A third year CS student," position={[-8, 3.5, 3]} color="white" />
          <SubText text="Problem solver, and app developer" position={[-8, 2.8, 3]} color="white" />
          <OrbitControls
            enableZoom={false}
            minPolarAngle = {0} 
            maxPolarAngle = {Math.PI / 2.5} 

          />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
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
