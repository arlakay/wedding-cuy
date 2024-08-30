import React from 'react';
import HeaderSeparator from '../HeaderSeparator/HeaderSeparator';

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-backdrop-img-ten bg-cover bg-no-repeat bg-center">
      <div className="mt-2.5">
        <HeaderSeparator />
        <p className="text-black font-kaushan text-[120px] text-center">Asta &amp; Dara</p>
        <HeaderSeparator />
      </div>
      <p className="mt-12.5 text-black font-poppins font-medium text-[24px] leading-[50px] text-center">
        We are getting married, and we want you <br /> to be part of our special
        day
      </p>
      <p className="mt-12.5 text-black font-playfair text-[44px] leading-[59px] text-center">Sunday, 6th Oktober 2024</p>
      <div className="mt-12.5">
        <button
          className="bg-[#412222] text-white font-poppins text-lg py-5 px-7 rounded-lg border-none cursor-pointer
              sm:text-base sm:py-2.5 sm:px-5"
        >Save the Date!</button>
      </div>
    </div>
  );
}

export default WelcomePage;
