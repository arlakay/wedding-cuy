import React, { useState, useEffect } from 'react';
import { data } from './data';
import ProfileCard from '../ProfileCard/ProfileCard';


const GroomBrideMobile = () => {

    return (
        <div
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4 bg-base-7 shadow-md bg-cover bg-center"
        >
            <div className="flex flex-col h-auto">
                <div className="flex-grow flex flex-col justify-center px-4">
                    <div className="text-start">
                        <p className="text-7xl font-semibold font-cormorant my-4">GROOM ~<br />BRIDE</p>

                        <div className="flex flex-col md:flex-row justify-center gap-4 my-8">
                            {data.map((el, idx) => (
                                <ProfileCard
                                    key={idx} // Adding a unique key for each card
                                    img={el.img}
                                    title={el.title}
                                    name={el.name}
                                    description={el.description}
                                    parent={el.parent}
                                />
                            ))}
                        </div>

                        {/* <p className="text-lg font-normal font-cormorant my-4">Om Swastyastu</p>
                        <p className="text-lg font-normal font-cormorant">Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/ Tuhan Yang Maha Esa, kami bermaksud mengundang Bapak/ Ibu/ Saudara/ i pada acara resepsi pernikahan kami.</p> */}
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

export default GroomBrideMobile;
