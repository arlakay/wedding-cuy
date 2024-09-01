import React, { useState, useEffect } from 'react';
import EventDetailCard from '../../components/EventDetailCard/EventDetailCard';
import GoogleMapLocation from '../../components/GoogleMapLocation/GoogleMapLocation';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import { FaCalendarPlus, FaMap } from 'react-icons/fa';
import { Button } from '@material-ui/core';
import AddToCalendar from 'react-add-to-calendar';

import { generateICal } from '../../utils/ICal'; // Adjust the path as necessary

const EventDetailsMobile = () => {
    const venueUrl = "https://maps.app.goo.gl/6Mmx436pp8rcLu7e8"

    const eventDetails = [
        {
            name: 'Akad Nikah',
            date: 'Minggu, 6 Oktober 2024',
            time: '07:00',
            venue: 'Balai Makarti Muktitama',
            address:
                `Jl. TMP. Kalibata No.17, RT.6/RW.7, Rawajati, Kec. Pancoran, Kota Jakarta Selatan 12750 \n\n\nLocated in: Kementerian Desa, Pembangunan Daerah Tertinggal dan Transmigrasi`,
        },
        {
            name: 'Resepsi Nikah',
            date: 'Minggu, 6 Oktober 2024',
            time: '11:00 - 13:00',
            venue: 'Balai Makarti Muktitama',
            address:
                'Jl. TMP. Kalibata No.17, RT.6/RW.7, Rawajati, Kec. Pancoran, Kota Jakarta Selatan 12750 \n\n\nLocated in: Kementerian Desa, Pembangunan Daerah Tertinggal dan Transmigrasi',
        },
    ];

    const eventAddToCalendar = {
        title: 'Wedding Dara & Asta',
        description: 'Acara Resepsi Pernikahan Dara & Asta',
        location: 'Balai Makarti Muktitama',
        startTime: new Date(2024, 10, 6, 11, 0), // Format: new Date(year, month, day, hour, minute)
        endTime: new Date(2024, 10, 6, 13, 0),
        startDate: new Date('2024-10-06T11:00:00'),
        endDate: new Date('2024-10-06T13:00:00'),
    };

    const handleAddToCalendar = () => {
        const icalData = generateICal(eventAddToCalendar.title, eventAddToCalendar.description, eventAddToCalendar.location, eventAddToCalendar.startDate, eventAddToCalendar.endDate);
        const blob = new Blob([icalData], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        // Create a temporary link element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = `${eventAddToCalendar.title.replace(/\s+/g, '_')}.ics`;
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };


    return (
        <div
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4 bg-base-8 shadow-md bg-cover bg-center"
        >
            <div className="flex flex-col h-auto">
                <div className="flex-grow flex flex-col justify-center px-4">
                    <div className="text-start">
                        <div className='my-4'>
                            <p className="text-4xl font-bold font-adora-bouton">Event Details </p>
                        </div>

                        <div className='my-4 grid-cols-2'>
                            {eventDetails.map((item, idx) => (
                                <EventDetailCard
                                    eventName={item.name}
                                    eventDate={item.date}
                                    eventTime={item.time}
                                    eventVenue={item.venue}
                                    venueAddress={item.address}
                                    key={idx}
                                />
                            ))}
                        </div>

                        <div className='text-center flex items-center justify-center'>
                            {/* <GoogleMapLocation /> */}
                            <button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#121212', // Button color
                                    transition: 'background-color 0.3s',
                                }}
                                onClick={() => window.open(venueUrl)}
                                className="bg-[#121212] text-champagne-gold font-eb-garamond font-medium text-lg py-2 px-5 rounded-lg border-none"
                            >
                                <FaMap style={{ marginRight: '8px', fontSize: '20px' }} />
                                See Location
                            </button>
                        </div>

                        <div className='my-4'>
                            <CountdownTimer />
                        </div>

                        {/* Add to Calendar Button */}
                        <div className='flex items-center justify-center'>
                            <div className='inline-flex items-center mb-4 font-eb-garamond text-lg'>
                                <FaCalendarPlus className="mr-2" />
                                <AddToCalendar
                                    buttonIconClass={
                                        <FaCalendarPlus className="mr-2" />
                                    }
                                    event={eventAddToCalendar}
                                    buttonLabel="Add to Calendar"
                                    buttonClassName="space-x-2 px-5 py-2 bg-[#121212] text-champagne-gold rounded-lg border-none"
                                />
                            </div>
                        </div>

                        <div className='text-center flex items-center justify-center mb-4'>
                            <button onClick={handleAddToCalendar} className="flex items-center bg-[#121212] text-champagne-gold font-eb-garamond font-medium text-lg py-2 px-5 rounded-lg border-none">
                                <FaCalendarPlus className="mr-2" />
                                Add to Calendar
                            </button>
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

export default EventDetailsMobile;
