import React from 'react';
import { FaHeart } from 'react-icons/fa';


const FooterMobile = () => {

    return (
        <div
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4 bg-champagne-gold shadow-md bg-cover bg-center"
        >
            <div className="flex flex-col h-auto">
                <div className="flex-grow flex flex-col justify-center px-4">
                    <div className="text-center ">
                        <p className="my-1 font-eb-garamond"></p>
                        <FaHeart className="mx-auto text-[24px] text-[#F8F8F8]" />
                        <p className="my-1 font-eb-garamond">© 2024 Dara & Asta. All rights reserved.</p>
                    </div>
                    {/* <h1 className="text-center text-3xl font-bold mb-2">Centered Heading</h1>
                    <p className="text-lg">This is some centered content.</p>
                    <p className="text-lg">This is some centered content.</p> */}
                </div>
                {/* <div className=" p-4 text-center">
                    <h1 className="text-center font-eb-garamond text-xl md:text-2xl lg:text-2xl mb-8 pb-4">THANK YOU!</h1>
                    <h1 className=" text-center font-adora-bouton text-4xl md:text-5xl lg:text-6xl mb-8">Asta & Dara</h1>
                </div> */}
            </div>
        </div>
    );
};

export default FooterMobile;
