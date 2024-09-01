// Carousel.js
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

import bg1 from '../../assets/thankyou/1.png';
import bg2 from '../../assets/thankyou/2.png';
import bg3 from '../../assets/thankyou/3.png';
import bg4 from '../../assets/thankyou/4.png';
import bg5 from '../../assets/thankyou/5.png';
import bg6 from '../../assets/thankyou/6.png';
import bg7 from '../../assets/thankyou/7.png';
import bg8 from '../../assets/thankyou/8.png';
import bg9 from '../../assets/thankyou/9.png';
import bg10 from '../../assets/thankyou/10.png';
import bg11 from '../../assets/thankyou/11.png';
import bg12 from '../../assets/thankyou/12.png';
import bg13 from '../../assets/thankyou/13.png';
import bg14 from '../../assets/thankyou/14.png';
import bg15 from '../../assets/thankyou/15.png';
import bg16 from '../../assets/thankyou/16.png';

const images = [
    bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg15, bg16
];

const variants = {
    initial: direction => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        // transition: {
        //     x: { type: 'tween', duration: 2, ease: 'easeInOut' },  // Smooth tween transition
        //     opacity: { duration: 2, ease: 'easeInOut' },  // Smooth opacity transition
        // },
        transition: {
            x: { type: 'keyframes', values: [1000, 0, -1000], duration: 2 }
        }
    }),
    animate: {
        x: 0,
        opacity: 1,
        // transition: {
        //     x: { type: 'tween', duration: 2, ease: 'easeInOut' },  // Smooth tween transition
        //     opacity: { duration: 2, ease: 'easeInOut' },  // Smooth opacity transition
        // },
        transition: {
            x: { type: 'keyframes', values: [1000, 0, -1000], duration: 2 }
        }

    },
    exit: direction => ({
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        // transition: {
        //     x: { type: 'tween', duration: 2, ease: 'easeInOut' },  // Smooth tween transition
        //     opacity: { duration: 1, ease: 'easeInOut' },  // Smooth opacity transition
        // },
        transition: {
            x: { type: 'keyframes', values: [1000, 0, -1000], duration: 2 }
        }
    }),
};


const ThankYouV3 = () => {



    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const intervalRef = useRef(null);

    function nextStep() {
        setDirection(1)
        setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    function prevStep() {
        setDirection(-1)
        setIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }
    function startAutoplay() {
        intervalRef.current = setInterval(nextStep, 3000); // Change slide every 3 seconds
    }

    function stopAutoplay() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, []);

    useEffect(() => {
        startAutoplay();
    }, [index]);

    return (
        <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto shadow-md">
            <div className="relative w-full  h-screen overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        variants={variants}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        src={images[index]}
                        alt="slides"
                        className="w-full h-full object-cover"
                        key={images[index]}
                        custom={direction}
                    />
                </AnimatePresence>
                {/* <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-600"
                    onClick={() => {
                        prevStep();
                        stopAutoplay(); // Stop autoplay when user interacts
                    }}

                >
                    ◀
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-600"
                    onClick={() => {
                        nextStep();
                        stopAutoplay(); // Stop autoplay when user interacts
                    }}
                >
                    ▶
                </button> */}
            </div>
        </div>

    );
};

export default ThankYouV3;
