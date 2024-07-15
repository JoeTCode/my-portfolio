import React, { useEffect, useState } from 'react';

import { Suspense } from 'react';

import Scene from '../../public/Scene.jsx';
import CanvasLoader from "./Loader.jsx";
import { motion } from "framer-motion";

import { Link } from 'react-scroll';

import { Canvas, useLoader} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';

import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
extend({ TextGeometry })

import { canvas_bg } from '../assets';

const HeaderText = ({ text, color, fontMultiplier, ...props}) => {
    const font = useLoader(FontLoader, '../../fonts/Inter Black_Regular.json');
    const textOptions = {
        font,
        size: 1 * fontMultiplier,
        depth: 0.1,
    };

    return (
        <mesh {...props}>
        <textGeometry args={[text, textOptions]} />
        <meshStandardMaterial color={color} />
        </mesh>
    );
}
  
const SubText = ({ text, color, fontMultiplier, ...props }) => {
    const font = useLoader(FontLoader, '../fonts/Inter_Regular.json');
    const textOptions = {
      font,
      size: 0.4 * fontMultiplier,
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
    background: `url(${canvas_bg}) no-repeat`,
    backgroundSize: 'cover',
};

const Hero = () => {
    const [fontSize, setFontSize] = useState(1); // Default font size
    const [pos, setPos] = useState(1);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                setFontSize(0.5); // Adjust font size for smaller screens
                setPos(0.5);
            if (window.innerWidth <= 600) {
                setPos(0.2);
            }
            } else {
                setFontSize(1); // Default font size for larger screens
                setPos(1);
            }
        };

        // Initial font size calculation on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    let specific_multiplier;
    if (pos === 0.2) {
        specific_multiplier = -1.1;
    } else {
        specific_multiplier = pos;
    }
    return (
        <div>
            <Canvas style={canvasContainerStyles}>
                <ambientLight intensity={2.5} />
                <pointLight position={[10, 10, 10]} />
                <PerspectiveCamera makeDefault position={[-1, 4.5, 14]} rotation={[0, 0, 0]} />

                <HeaderText  text="Hello, I'm " position={[-8*pos, 4.5*fontSize, 3]} color="white" fontMultiplier={fontSize} />
                <HeaderText text="Joe." position={[-1.6*specific_multiplier, 4.5*fontSize, 3]} color="rgb(151, 106, 249)" fontMultiplier={fontSize} />
                <SubText text="A third year CS student," position={[-8*pos, 3.5*fontSize, 3]} color="white" fontMultiplier={fontSize} />
                <SubText text="Problem solver, and app developer" position={[-8*pos, 2.8*fontSize, 3]} color="white" fontMultiplier={fontSize} />

                <OrbitControls
                    enableZoom={false}
                    minPolarAngle = {0} 
                    maxPolarAngle = {Math.PI / 2.5} 
                />

                <Suspense fallback={<CanvasLoader />}>
                    <Scene />
                </Suspense>

            </Canvas>

            {/* Animated scroll icon */}
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <Link to="Introduction" smooth={true} duration={500}>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className='w-3 h-3 rounded-full bg-white mb-1'
                        />
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Hero;