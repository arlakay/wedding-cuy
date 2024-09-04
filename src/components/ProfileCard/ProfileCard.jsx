import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProfileCard = ({ img, title, name, description, parent }) => {

    const getFirstWord = (str) => {
        // Trim the text to remove any leading or trailing whitespace
        const trimmedText = str.trim();
        // Split the text by whitespace and get the first element of the array
        const words = trimmedText.split(/\s+/);
        return words[0] || ''; // Return the first word or an empty string if no words are found
    };

    return (
        <div className="flex flex-col bg-white shadow-2xl rounded-lg mx-auto max-w-md md:w-1/2">
            <div className="flex overflow-hidden rounded-t-lg items-center justify-center">
                <LazyLoadImage src={img} alt={title} className="object-cover w-full h-auto" />
            </div>
            <div className="flex flex-col items-center p-4 sm:p-4">
                <p className="text-lg sm:text-sm font-cormorant font-medium text-center">
                    {title && title.toUpperCase()}
                </p>
                <p className="text-5xl sm:text-4xl font-adora-bouton text-center my-4">{getFirstWord(name)}</p>
                <p className="text-2xl sm:text-lg font-cormorant font-semibold text-center ">{name}</p>
                <div className="my-2 w-full h-[2px] bg-[#121212]" />
                <p className="font-cormorant  text-center text-md sm:text-sm">{description}</p>
                <p className="font-cormorant  text-center text-md sm:text-sm">{parent}</p>
            </div>
        </div>
    );
}

export default ProfileCard;
