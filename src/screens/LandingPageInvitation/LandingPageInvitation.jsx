import React, { useEffect, useState } from 'react';
import { parse } from 'qs';
import HeaderSeparator from '../../components/HeaderSeparator/HeaderSeparator';

const LandingPageInvitation = ({ setInvitationOpen }) => {
    const [invTo, setInvTo] = useState('')

    useEffect(() => {
        const invTo = parse(window.location.search.substring(1))
        setInvTo(invTo.to)
    }, [])

    const capitalizeEachWord = (str) => {
        return str
            .split(' ')
            .map(word =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(' ');
    };


    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-base-3-landscape bg-cover bg-no-repeat bg-center">
                {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}

                <div className="mt-2.5 flex flex-col items-center text-center" >
                    <h1 className="text-4xl md:text-5xl font-bold font-adora-bouton text-gold-500">The Wedding of</h1>
                    <p className="text-6xl md:text-7xl font-extrabold font-cormorant my-4">DARA <br />ASTA </p>
                    <p className="text-xl font-medium font-eb-garamond my-4">6 Oktober 2024</p>
                </div>
                <p className="mt-8 text-black text-center">
                    <p className="text-lg font-normal font-eb-garamond my-2">
                        Kepada Yth.
                    </p>
                    {invTo && (
                        <span className="font-eb-garamond font-medium text-3xl md:text-2xl">{capitalizeEachWord(invTo)}</span>
                    )}
                    <p className="text-lg font-normal font-eb-garamond my-2">
                        We are getting married, and we want you <br /> to be part of our
                        special day
                    </p>


                </p>
                <div className="mt-8">
                    <button
                        className="bg-[#1e1e1e] text-champagne-gold font-medium font-eb-garamond text-lg py-2 px-5 rounded-lg  cursor-pointer
              sm:text-base sm:py-2.5 sm:px-5"
                        onClick={() => setInvitationOpen(true)}
                    >Buka Undangan</button>
                </div>
            </div>

        </div >



    );
}

export default LandingPageInvitation;
