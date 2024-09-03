import React, { useState, useEffect } from 'react';

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

const ThankYou = () => {
    // Array of imported image URLs
    const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg15, bg16];

    // State to keep track of the current background image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState((currentImageIndex + 1) % images.length);

    // State to manage transition effect
    const [transitionState, setTransitionState] = useState('fade-in');
    const [opacity, setOpacity] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Preload images
    useEffect(() => {
        const preloadImages = (imageUrls) => {
            imageUrls.forEach((url) => {
                const img = new Image();
                img.src = url;
            });
        };

        preloadImages(images);
    }, [images]);

    useEffect(() => {
        const interval = setInterval(() => {
            setNextImageIndex((currentImageIndex + 1) % images.length);
            setCurrentImageIndex(nextImageIndex);
        }, 2000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [currentImageIndex, nextImageIndex]);


    return (
        <div
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4 shadow-md "
            style={{ position: 'relative', overflow: 'hidden' }}
        >

            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    opacity: 1,
                    filter: 'blur(0px)',
                }}
            />
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${images[nextImageIndex]})`,
                    opacity: 0,
                    filter: 'blur(0px)',
                }}
            />
            {/* <div
                className={`absolute inset-0 `}
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'opacity 2.5s ease-in-out',
                    opacity: opacity,
                    zIndex: 1,
                }}
            ></div> */}

            {/* <div
                className={`absolute inset-0 `}
                style={{
                    backgroundImage: `url(${images[nextImageIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'opacity 1.3s ease-in',
                    opacity: opacity,
                    zIndex: 0,
                }}
            ></div> */}

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>

            <div className="flex flex-col h-screen ">
                <div className="flex-grow"></div>
                <div className=" p-4 text-center z-20">
                    <h1 className="text-center font-eb-garamond text-xl md:text-2xl lg:text-2xl mb-8 pb-4 text-champagne-gold">THANK YOU!</h1>
                    <h1 className=" text-center font-adora-bouton text-4xl md:text-5xl lg:text-6xl mb-8 text-champagne-gold">Dara & Asta</h1>
                </div>
            </div>
        </div >


    );
};

export default ThankYou;
