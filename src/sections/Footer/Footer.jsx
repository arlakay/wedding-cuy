import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="p-2.5 grid grid-cols-1 justify-center items-center min-h-[60px] text-white font-poppins text-[12px] bg-[#5b3d2c]">
            <div className="text-center">
                <p className="my-1">Designed &amp; Made with</p>
                <FaHeart className="mx-auto text-[24px] text-white" />
                <p className="my-1">by Asta &amp; Dara</p>
            </div>
        </div>
    );
};

export default Footer;
