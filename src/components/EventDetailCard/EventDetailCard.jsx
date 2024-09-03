import { CalendarToday, LocationOn, QueryBuilder } from '@mui/icons-material'
import React from 'react'

const EventDetailCard = ({
    eventName,
    eventDate,
    eventTime,
    eventVenue,
    venueAddress,
}) => {
    const formattedText = venueAddress.split('\n\n\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
            <br />

        </React.Fragment>
    ));

    return (
        // <div className="p-8 bg-[#684d3d] text-white w-full sm:w-1/2 md:w-1/3 lg:w-1/3  max-w-xs sm:max-w-xs lg:max-w-md shadow-lg rounded-xl mb-8 sm:mb-8 mx-auto flex flex-col sm:p-5 sm:text-xs">
        //     <p className="text-center text-2xl font-kaushan sm:text-xl">
        //         {eventName}
        //     </p>
        //     <div className="my-5 flex items-center">
        //         <CalendarToday className="text-white" />
        //         <span className="ml-5 text-lg font-semibold font-poppins sm:text-xs">
        //             {eventDate}
        //         </span>
        //     </div>
        //     <div className=" flex items-center">
        //         <QueryBuilder className="text-white" />
        //         <span className="ml-5 text-lg font-semibold font-poppins sm:text-xs">
        //             {eventTime}
        //         </span>
        //     </div>
        //     <div className="my-5 flex items-center">
        //         <LocationOn className="text-white" />
        //         <span className="ml-5 text-lg font-semibold font-poppins sm:text-xs">
        //             {eventVenue}
        //         </span>
        //     </div>

        //     <p className="text-sm font-poppins leading-6 sm:text-xs ">
        //         {formattedText}
        //     </p>
        // </div>

        <div className="p-4 bg-white text-black w-full max-w-md mx-auto shadow-2xl rounded-lg mb-8 flex flex-col ">
            <p className="text-center text-2xl font-cormorant sm:text-xl">
                {eventName}
            </p>
            <div className="my-4 flex items-center">
                <CalendarToday className="text-gray-900 " />
                <span className="ml-3 text-lg font-cormorant font-medium sm:text-xs">
                    {eventDate}
                </span>
            </div>
            <div className=" flex items-center">
                <QueryBuilder className="text-gray-900" />
                <span className="ml-3 text-lg font-cormorant font-medium sm:text-xs">
                    {eventTime}
                </span>
            </div>
            <div className="my-4 flex items-center">
                <LocationOn className="text-gray-900" />
                <span className="ml-3 text-lg font-cormorant font-medium sm:text-sm">
                    {eventVenue}
                </span>
            </div>
            <p className=" font-cormorant text-md sm:text-sm">
                {formattedText}
            </p>
        </div>



    )
}

export default EventDetailCard
