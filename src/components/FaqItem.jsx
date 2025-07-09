import clsx from "clsx";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="flex items-center justify-between gap-7 group relative px-7 cursor-pointer"
        onClick={() => {
          setActiveId(active ? null : item.id);
        }}
      >
        <div className="flex-1 relative">
          <span className="absolute -left-5 -top-4 text-p3 small-compact max-lg:hidden">
            {index < 9 ? `0${index + 1}` : index + 1}
          </span>

          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:items-center max-md:min-h-20",
              active && "sm:text-p1 max-sm:text-p1"
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className={clsx(
            "faq-icon relative flex justify-center items-center size-12 border-2 rounded-full border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            active && "before:bg-p1 after:bg-p1 after:rotate-0"
          )}
        >
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            className="body-3 px-7 py-3.5"
            initial={{ opacity: 0, scaleY: 0.9 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.9 }}
            transition={{
              duration: 0.35,
              ease: [0.42, 0, 0.58, 1], // smoother cubic bezier
            }}
            style={{ originY: 0 }}
          >
            {item.answer}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={clsx(
          "g5 -bottom-7 -top-7 absolute left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500",
          active && "opacity-100"
        )}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};

export default FaqItem;
