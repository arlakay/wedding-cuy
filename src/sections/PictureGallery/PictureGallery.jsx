import React from 'react';
import Blob from '../../assets/blob-gallery.png';
import GalleryItem from '../../components/GalleryItem/GalleryItem';
import { gallery } from './gallery';

const PictureGallery = () => {
    return (
        <div className="mt-24 md:mt-24 lg:mt-32">
            <div className="mb-12 md:mb-12 lg:mb-20 relative flex items-center justify-center flex-col md:flex-row">
                <span className="text-3xl md:text-4xl font-kaushan text-black ">
                    Our Happy Moments
                </span>
                <img
                    src={Blob}
                    alt="blob-gallery"
                    className="mt-8 mb-8 absolute w-full md:w-1/4 lg:w-1/3 max-w-[80vw] md:max-w-[420px] mx-8 md:mx-4"
                />
            </div>

            <div>
                {/* <div className="w-full flex justify-center pt-12 pb-6 md:pt-16 md:pb-12">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 max-w-3xl w-full md:w-1/2 mx-4 md:mx-0">
                        {gallery[0].desktop.map((data) => (
                            <GalleryItem data={data} key={data.id} />
                        ))}
                    </div>
                </div> */}
                <div className="w-full flex justify-center pt-12 pb-6 md:pt-16 md:pb-12">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 max-w-full w-full md:max-w-3xl px-4 md:px-0">
                        {gallery[0].desktop.map((data) => (
                            <GalleryItem data={data} key={data.id} />
                        ))}
                    </div>
                </div>



            </div>
        </div>
    );
};

export default PictureGallery;
