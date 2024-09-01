import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';


const Rsvp = () => {
    const [name, setName] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [totalPersons, setTotalPersons] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the Google Form URL with UTM parameters for pre-filling
        const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc83yZsTEcEo0pAKadxtq9ahIYy6NN7vX7Dz4lkFjFQztC5Sw/formResponse"

        // Map form data to Google Form input field names
        const params = new URLSearchParams({
            'entry.2606285': name,
            'entry.877086558': confirmation,
            'entry.1498135098': totalPersons,
        });

        // Use fetch to submit the data
        fetch(`${googleFormUrl}?${params.toString()}`, {
            method: 'POST',
            mode: 'no-cors'
        })
            .then(() => {
                alert('Form submitted successfully!');
                // Clear the form fields
                setName('');
                setConfirmation('');
                setTotalPersons('');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Form submission failed.');
            });
    };


    return (
        <div
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4 bg-base-5 shadow-md bg-cover bg-center"
        >
            <div className="flex flex-col h-screen">
                <div className="flex-grow flex flex-col justify-center px-4">
                    <div className="text-start">
                        <h1 className="text-4xl font-bold font-adora-bouton my-8">Rsvp</h1>
                        <p className="my-1 text-xl font-normal font-cormorant">
                            Dimohon untuk mengisi konfirmasi kehadiran di bawah ini.
                        </p>
                    </div>

                    <div className="text-start bg-white max-w-lg rounded-lg p-6 space-y-4">
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    placeholder="Nama"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none mb-4 font-cormorant"
                                />
                            </div>
                            <div className="flex flex-col">
                                <select
                                    value={confirmation}
                                    onChange={(e) => setConfirmation(e.target.value)}
                                    required
                                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none mb-4 font-cormorant"
                                >
                                    <option value="" disabled>Konfirmasi Kehadiran</option>
                                    <option value="hadir">Hadir</option>
                                    <option value="tidak hadir">Tidak Hadir</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <select
                                    value={totalPersons}
                                    onChange={(e) => setTotalPersons(e.target.value)}
                                    required
                                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none mb-4 font-cormorant"
                                >
                                    <option value="" disabled>Jumlah</option>
                                    <option value="1 Orang">1 Orang</option>
                                    <option value="2 Orang">2 Orang</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 bg-black text-champagne-gold font-kaushan text-lg py-2 px-5 rounded-lg sm:text-base sm:py-2.5 sm:px-5"
                            >
                                Submit
                            </button>

                        </form>
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

export default Rsvp;
