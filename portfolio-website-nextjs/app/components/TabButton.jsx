import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { scaleX: 0 },
  active: { scaleX: 1 },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <div className="inline-block relative mr-3">
      <button onClick={selectTab} className={`font-semibold py-2 px-4 ${active ? "text-white" : "text-gray-400 hover:text-white"}`}>
        {children}
      </button>
      {active && (
        <motion.div
          initial={false}
          animate="active"
          exit="default"
          variants={variants}
          className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 origin-left"
        />
      )}
    </div>
  );
};

export default TabButton;