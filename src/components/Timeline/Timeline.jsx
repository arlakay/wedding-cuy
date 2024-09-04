import React from 'react';

const Timeline = ({ data }) => {
    return (
        <div className="py-20 bg-[#5b3d2c] bg-cover bg-center bg-fixed bg-no-repeat">
            <div className="mb-15 text-center text-4xl text-white font-playfair">
                <h2 className="font-light">Sepenggal Kisah Asta &amp; Dara</h2>
            </div>
            {/* <div className="relative px-10 py-10 max-w-full mx-auto">
                <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 bg-white w-1.5"></div>
                {data.map((x, index) => (
                    <div key={index} className={`relative ${x.position === 'left' ? 'left-1/5' : 'left-1/2'} mb-15`}>
                        <div className="max-w-md relative mx-64 bg-white p-5 rounded-lg">
                            <h2 className="text-[#684D3D] mb-5 text-lg">{x.period}</h2>
                            <img src={x.img} alt="" className="sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg" />
                            <p className="font-poppins text-base leading-6 text-[#684d3d] mt-5">{x.content}</p>
                        </div>
                        <div className="absolute w-6 h-6 bg-white border-4 border-white rounded-full"
                            style={{ right: x.position === 'left' ? '-4.25rem' : '-4.25rem', left: x.position === 'right' ? '-4.25rem' : 'auto' }}></div>
                        {x.position === 'left' && (
                            <div className="absolute top-5 right-8 w-0 h-0 border-l-10 border-l-transparent border-t-10 border-b-10 border-b-white"></div>
                        )}
                        {x.position === 'right' && (
                            <div className="absolute top-5 left-8 w-0 h-0 border-r-10 border-r-transparent border-t-10 border-b-10 border-b-white"></div>
                        )}
                    </div>
                ))}
            </div> */}

            <div class="bg-[#5b3d2c] p-4">
                <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative p-4 my-6 text-gray-800 bg-white rounded-lg col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">New Event 1</h3>
                            <p class="mt-2 leading-6">Description of the first event.</p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">New Event 2</h3>
                            <p class="mt-2 leading-6">Description of the second event.</p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
                        </div>
                    </div>

                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">New Event 3</h3>
                            <p class="mt-2 leading-6">Description of the first event.</p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 3</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">New Event 4</h3>
                            <p class="mt-2 leading-6">Description of the second event.</p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 4</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Timeline;
