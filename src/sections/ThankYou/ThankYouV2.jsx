import React, { useEffect, useState } from 'react';
import bg1 from '../../assets/thankyou/0K0A3571-min.jpg';
import bg2 from '../../assets/thankyou/0K0A3574-min.jpg';
import bg3 from '../../assets/thankyou/0K0A3578-min.jpg';
import bg4 from '../../assets/thankyou/0K0A3581-min.jpg';
import bg5 from '../../assets/thankyou/0K0A3584-min.jpg';
import bg6 from '../../assets/thankyou/0K0A3585-min.jpg';
import bg7 from '../../assets/thankyou/0K0A3588-min.jpg';
import bg8 from '../../assets/thankyou/0K0A3590-min.jpg';
import bg9 from '../../assets/thankyou/0K0A3592-min.jpg';
import bg10 from '../../assets/thankyou/0K0A3594-min.jpg';
import bg11 from '../../assets/thankyou/0K0A3595-min.jpg';
import bg12 from '../../assets/thankyou/0K0A3610-min.jpg';
import bg13 from '../../assets/thankyou/0K0A3624-min.jpg';
import bg14 from '../../assets/thankyou/0K0A3626-min.jpg';
import bg15 from '../../assets/thankyou/0K0A3627-min.jpg';
import bg16 from '../../assets/thankyou/0K0A3629-min.jpg';


import bg17 from '../../assets/photo-1.webp';
import bg18 from '../../assets/photo-2.webp';
import bg19 from '../../assets/photo-3.webp';
import LazyLoad from 'react-lazyload';

// Array of imported image URLs
// const carouselItems = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg15, bg16];

const carouselItems = [
    { id: 1, bgImage: bg17, altText: 'Image 1' },
    { id: 2, bgImage: bg18, altText: 'Image 2' },
    { id: 3, bgImage: bg19, altText: 'Image 3' },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, 5000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };


    return (
        <div className="relative w-full h-screen overflow-hidden">
            {carouselItems.map((item, index) => (
                <LazyLoad
                    key={item.id}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000  ${index === currentIndex ? 'opacity-100' : 'opacity-0'} `}
                    style={{
                        backgroundImage: `url(${item.bgImage})`,
                        transition: 'opacity 2.5s ease-in-out, transform 1s ease-in -out',
                        transform: 'translateZ(0)',
                    }}
                >
                    {/* Optionally include content or overlays */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white">
                        <p>{item.altText}</p>
                    </div> */}


                </LazyLoad>

            ))
            }
            {/* <div className="absolute inset-0 bg-black opacity-25 z-10"></div>

            <div className="flex flex-col h-screen ">
                <div className="flex-grow"></div>
                <div className=" p-4 text-center z-20">
                    <h1 className="text-center font-eb-garamond text-xl md:text-2xl lg:text-2xl mb-8 pb-4 text-champagne-gold">THANK YOU!</h1>
                    <h1 className=" text-center font-adora-bouton text-4xl md:text-5xl lg:text-6xl mb-8 text-champagne-gold">Asta & Dara</h1>
                </div>
            </div> */}
            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg"
            >
                &gt;
            </button>
            {/* Navigation Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselItems.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-600'}`}
                    />
                ))}
            </div>
        </div >
    );
};

export default Carousel;
