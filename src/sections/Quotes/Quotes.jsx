import React from 'react';


const Quotes = () => {

    return (
        <div
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4 bg-base-4 shadow-md bg-cover bg-center"
        >
            <div className="flex flex-col h-screen">
                {/* <div className="flex-grow flex flex-col justify-center px-4">
                    <div className="text-start">
                        <h1 className="text-3xl font-bold font-adora-bouton">The Promises</h1>
                    </div>
                </div> */}

                {/* <div className="flex-grow"></div> */}

                <div className="flex-grow flex flex-col justify-center px-4">
                    <div className="text-start">
                        <h1 className="text-3xl font-bold font-adora-bouton">The Promises</h1>

                        <p className="text-lg font-normal font-cormorant mt-8">
                            "A great marriage is not when the ‘perfect couple’ comes together. It is when an imperfect couple learns to enjoy their difference."
                        </p>
                        <p className="text-lg font-normal font-cormorant my-2">— Dave Meurer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quotes;
