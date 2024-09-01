// LiftUpTransition.js
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const transitionConfig = {
    duration: 2, // Duration of the animation
    ease: [0.68, -0.55, 0.27, 1.55] // Custom cubic-bezier easing function
};

const variants = {
    initial: {
        y: '100vh', // Start from below the viewport
        opacity: 0
    },
    animate: {
        y: 0, // End at its natural position
        opacity: 1,
        transition: transitionConfig
    },
    exit: {
        y: '-100vh', // Move out to above the viewport
        opacity: 0,
        transition: transitionConfig
    }
};

const LiftUpTransition = ({ children, key }) => {
    return (
        <AnimatePresence>
            <motion.div
                key={key} // Ensure this is updated when content changes
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                style={{ position: 'absolute', width: '100%', height: '100%' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default LiftUpTransition;
