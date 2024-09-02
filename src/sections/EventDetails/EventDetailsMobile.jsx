import React from 'react';
import EventDetailCard from '../../components/EventDetailCard/EventDetailCard';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import { FaCalendarPlus, FaMap } from 'react-icons/fa';

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

    const handleAddToGoogleCalendar = () => {
        const event = {
            title: 'Wedding Dara & Asta',
            description: 'Acara Resepsi Pernikahan Dara & Asta',
            location: 'Balai Makarti Muktitama',
            startTime: "2024-10-06T11:00:00",
            endTime: "2024-10-06T13:00:00",
        };

        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${encodeURIComponent(event.startTime.replace(/-|:|\.\d+/g, ''))}/${encodeURIComponent(event.endTime.replace(/-|:|\.\d+/g, ''))}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

        window.open(url, '_blank');
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
                                    backgroundColor: '#121212',
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
                        <div className='text-center flex items-center justify-center mb-4'>
                            <button
                                onClick={handleAddToGoogleCalendar}
                                className="flex items-center bg-[#121212] text-champagne-gold font-eb-garamond font-medium text-lg py-2 px-5 rounded-lg border-none">
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
