import React, { useState } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

// const CARD_DATA = [
//     { color: "#266678", text: "Card 1" },
//     { color: "#cb7c7a", text: "Card 2" },
//     { color: "#36a18b", text: "Card 3" },
//     { color: "#cda35f", text: "Card 4" },
//     { color: "#747474", text: "Card 5" }
//   ];

  const CARD_DATA = [
    { key:0, color: "#0B1016", text: "Card 1" },
    { key:1, color: "#0B1016", text: "Card 2" },
    { key:2, color: "#0B1016", text: "Card 3" },
    { key:3, color: "#0B1016", text: "Card 4" },
    { key:4, color: "#0B1016", text: "Card 5" }
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
                {card.text}
              </motion.li>
            );
          })}
        </ul>
      </div>
    );
  };
  
const wrapperStyle = {
//   position: "relative",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "100vh"
};

const cardWrapStyle = {
  position: "relative",
  width: "350px",
  height: "220px"
};

const cardStyle = {
  position: "absolute",
  width: "350px",
  height: "220px",
  borderRadius: "8px",
  transformOrigin: "top center",
  listStyle: "none"
};

export default CardStack;