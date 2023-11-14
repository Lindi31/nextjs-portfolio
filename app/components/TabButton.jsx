import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { scaleX: 0 },
  active: { scaleX: 1 },
};



const TabButton = ({ active, selectTab, children }) => {
  const activeClass = "text-[#181818] bg-white border-white";
  const inactiveClass = "text-white bg-transparent border-white hover:bg-white/35 hover:text-[#181818]";

  return (
    <div className="inline-block relative mr-2">
      <button
        onClick={selectTab}
        className={`font-w400 py-2 px-4 rounded-full border-2 transition-all duration-300 ${
          active ? activeClass : inactiveClass
        }`}
      >
        {children}
      </button>
      {active && (
        <motion.div
          initial={false}
          animate="active"
          exit="default"
          variants={variants}
          className="absolute bottom-0 left-0 w-full h-1 bg-transparent origin-left"
        />
      )}
    </div>
  );
};


export default TabButton;