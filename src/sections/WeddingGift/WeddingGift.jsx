import React, { useState, useEffect } from 'react';
import Toast from '../../components/Toast/Toast';
import { FaGift } from 'react-icons/fa';


const WeddingGift = () => {
    const [copySuccess, setCopySuccess] = useState('');
    const textToCopyRekAsta = "This is the text to copy";
    const textToCopyRekDara = "This is the text to copy";

    const copyRekeningAsta = async () => {
        try {
            await navigator.clipboard.writeText(textToCopyRekAsta);
            setCopySuccess('Text copied!');
            showToastNotification('Text copied!')

        } catch (err) {
            setCopySuccess('Failed to copy!');
            showToastNotification('Failed to copy!')

        }
    };

    const copyRekeningDara = async () => {
        try {
            await navigator.clipboard.writeText(textToCopyRekDara);
            setCopySuccess('Text copied!');
            showToastNotification('Text copied!')
        } catch (err) {
            setCopySuccess('Failed to copy!');
            showToastNotification('Failed to copy!')
        }
    };

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const showToastNotification = (message) => {
        setToastMessage(message);
        setShowToast(true);

        // Hide the toast after 3 seconds
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };


    return (
        <div
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4 bg-base-7 shadow-md bg-cover bg-center"
        >
            <div className="flex flex-col h-screen">
                <div className="flex-grow flex flex-col justify-center px-4">
                    <div className="text-start">
                        <h1 className="text-4xl font-bold font-adora-bouton my-8">Wedding Gift</h1>

                        <div className="flex justify-center items-center p-4">
                            <FaGift className="text-custom-brown" size={48} />
                        </div>

                        <p className="text-lg font-medium font-eb-garamond">
                            Kehadiran dan doa restu Bapak/Ibu/Sudara/i merupakan anugerah terindah bagi kami. Namun, apabila Bapak/Ibu/Saudara/i tidak dapat hadir dan hendak memberikan tanda kasih kepada kami, dapat menggunakan fitur di bawah ini.
                        </p>

                        {/* <div className="relative max-w-xs mx-auto p-4 bg-gray-200 border-4 border-white rounded-lg shadow-lg my-4 flex flex-col justify-between items-center gap-2 mt-8">
                            <span className="text-gray-700 text-lg mt-2 sm:mt-0 font-eb-garamond">BANK BCA</span>
                            <span className="text-gray-700 text-xl mt-2 sm:mt-0 font-eb-garamond font-medium">5210973658</span>
                            <span className="text-gray-700 text-lg mt-2 sm:mt-0 font-eb-garamond">a.n Asta Zeska Dimitri</span>
                            <button
                                onClick={() => copyRekeningAsta()}
                                className="px-4 py-2 bg-gray-200  rounded-md text-gray-700 text-md mt-2 sm:mt-0 font-eb-garamond font-medium"
                            >
                                COPY
                            </button>
                            {showToast && (
                                <Toast
                                    message={toastMessage}
                                    onClose={() => setShowToast(false)}
                                />
                            )}
                        </div> */}

                        {/* <div className="relative max-w-xs mx-auto p-4 bg-gray-200 border-4 border-white rounded-lg shadow-lg my-4 flex flex-col justify-between items-center gap-2">
                            <span className="text-gray-700 text-lg mt-2 sm:mt-0 font-eb-garamond">BANK BCA</span>
                            <span className="text-gray-700 text-xl mt-2 sm:mt-0 font-eb-garamond font-medium">10493620123</span>
                            <span className="text-gray-700 text-lg mt-2 sm:mt-0 font-eb-garamond ">a.n Dara Puspita Rahmawati</span>
                            <span className="text-gray-700 text-md mt-2 sm:mt-0 font-eb-garamond font-medium">COPY</span>
                        </div> */}
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

export default WeddingGift;
