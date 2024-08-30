import React from 'react';

const GalleryItem = ({ data }) => {
    return (


        <div className="mx-auto max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded overflow-hidden shadow-lg">
            <img src={data.img1} alt="" className="w-full h-auto object-cover" />
            <div className="px-4 py-4 sm:px-6 sm:py-4">
                <div className="font-bold text-purple-500 text-lg sm:text-xl mb-2">
                    Photo by image.user
                </div>
                <div>
                    <p className="text-sm sm:text-base">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
            </div>
        </div>




    );
};

export default GalleryItem;
