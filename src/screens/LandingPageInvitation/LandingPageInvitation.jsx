import React, { useEffect, useState } from 'react';
import { parse } from 'qs';

const LandingPageInvitation = ({ setInvitationOpen }) => {
    const [invTo, setInvTo] = useState('')

    useEffect(() => {
        const invTo = parse(window.location.search.substring(1))
        setInvTo(invTo.to)
    }, [])

    return (
        <div className="bg-base-3 md:bg-base-3-landscape bg-cover bg-no-repeat bg-center">
            <div className="flex flex-col items-center justify-center h-screen bg-base-3-landscape-transparent md:bg-base-3-landscape-transparent bg-cover bg-no-repeat bg-center">
                {/* <div className="absolute inset-0 bg-white opacity-50 z-10"></div> */}

                <div className="flex flex-col items-center text-center z-20" >
                    <h1 className="text-4xl md:text-5xl font-extrabold font-adora-bouton mb-8 md:mb-10">The Wedding of</h1>
                    <p className="text-5xl md:text-7xl font-extrabold font-cormorant mb-2">DARA <br />ASTA </p>
                    <p className="text-lg md:text-2xl font-medium font-eb-garamond mb-4">6 Oktober 2024</p>
                </div>
                <p className=" text-black text-center my-1 z-20">
                    <p className="text-md font-normal font-eb-garamond ">
                        To:
                    </p>
                    {invTo && (
                        <span className="font-eb-garamond font-medium text-xl md:text-2xl">{invTo}</span>
                    )}
                    <p className="text-md font-normal font-eb-garamond ">
                        We are getting married, and we want you <br /> to be part of our
                        special day
                    </p>
                </p>
                <div className="z-20">
                    <button
                        className="bg-[#1e1e1e] text-champagne-gold font-medium font-eb-garamond text-lg py-2 px-5 rounded-lg  cursor-pointer
              sm:text-base sm:px-5 mt-4 md:mt-8"
                        onClick={() => setInvitationOpen(true)}
                    >Open Invitation</button>
                </div>
            </div>

        </div >



    );
}

export default LandingPageInvitation;
