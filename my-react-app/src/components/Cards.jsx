import { motion } from "framer-motion";
import move from "lodash-move";
import { html, java, CPlusPlus, react, python } from "../assets";
import React, { useEffect, useState } from 'react';

const CARD_DATA = [
  { key:0, color: "white", image: html, gradient: "linear-gradient(45deg, #FFE7E7, #ff6b6b, #f06595, #6a4c93) 1" },
  { key:1, color: "white", image: java, gradient: "linear-gradient(45deg, #b0e0e6, #b8860b, #d3d3d3, #c0c0c0) 1" },
  { key:2, color: "white", image: CPlusPlus, gradient: "linear-gradient(45deg, #a6b5c8, #5d6b7d, #46545b, #272e35) 1"},
  { key:3, color: "white", image: react, gradient: "linear-gradient(45deg, #9c27b0, #673ab7, #3f51b5, #2196f3) 1"},
  { key:4, color: "white", image: python, gradient: "linear-gradient(45deg, #ffbb58, #f783ac, #7c82a8, #48bfe3) 1"}
];
  
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const CardStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [cards, setCards] = React.useState(CARD_DATA);

  const moveToEnd = from => {
    setCards(move(cards, from, cards.length - 1));
  };

  const handleHover = index => {
    setHoveredIndex(index);
  };
  
  const handleHoverExit = () => {
    setHoveredIndex(-1);
  };

  const [dimensions_multiplier, setDimensions_multiplier] = useState(1); // Default font size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setDimensions_multiplier(0.5);
      } else if (window.innerWidth <= 650) {
        setDimensions_multiplier(0.6);
      } else {
        setDimensions_multiplier(1); // Default dimensions for larger screens
      }
    };

      // Initial dimensions calculation on component mount
      handleResize();

      // Event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup function to remove event listener
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    const width = 350 * dimensions_multiplier;
    const height = 220 * dimensions_multiplier;

  const cardStyle = {
    position: "absolute",
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: "8px",
    transformOrigin: "top center",
    listStyle: "none"
  };


  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((card, index) => {
          const canDrag = index === 0;
          const isHovered = hoveredIndex === index;

          return (
            <motion.li
              key={card.key}
              style={{
                ...cardStyle,
                backgroundColor: card.color,
                border: "3px solid", // Standard border properties
                borderImage: card.gradient, // Gradient border
            
                backgroundImage: `url(${card.image})`,
                backgroundPosition: "center",
                backgroundSize: "90%",
                backgroundRepeat: "no-repeat",
                cursor: canDrag ? "grab" : "auto",
                ...(isHovered && {
                  boxShadow: "0px 8px 16px rgb(255, 255, 255, 0.6)",
                }),
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: CARD_DATA.length - index
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0
              }}
              onDragEnd={() => moveToEnd(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleHoverExit}
            >
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
  
const wrapperStyle = {
  paddingTop: '70px'

};

const cardWrapStyle = {
  position: "relative",
  width: "350px",
  height: "220px"
};




  

export default CardStack;