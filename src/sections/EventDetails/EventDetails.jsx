import React from 'react'
import EventDetailCard from '../../components/EventDetailCard/EventDetailCard'
import GoogleMapLocation from '../../components/GoogleMapLocation/GoogleMapLocation'

const EventDetails = () => {
    const venueUrl = 'https://www.google.com/maps/place/Makarti+Muktitama+Hall/@-6.2550064,106.8501041,19z'

    const eventDetails = [
        {
            name: 'Akad Nikah',
            date: 'Saturday, 27th November 2021',
            time: '07:00 - 08:00',
            venue: 'Makarti Muktitama Hall',
            address:
                `Jl. TMP. Kalibata No.17 6, RT.6/RW.7, Rawajati, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12750 \n\n\nLocated in: Kementerian Desa, Pembangunan Daerah Tertinggal dan Transmigrasi`,
        },
        {
            name: 'Resepsi Nikah',
            date: 'Saturday, 27th November 2021',
            time: '11:00 - 13:00',
            venue: 'Makarti Muktitama Hall',
            address:
                'Jl. TMP. Kalibata No.17 6, RT.6/RW.7, Rawajati, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12750 \n\n\nLocated in: Kementerian Desa, Pembangunan Daerah Tertinggal dan Transmigrasi',
        },
    ]

    return (
        <div className="h-auto  bg-cover bg-no-repeat bg-center">

            <div className="min-h-screen pt-8 pb-8 bg-backdrop-img-ten bg-cover bg-no-repeat bg-center">
                <div className="text-[#412222] px-4">
                    <p className="mt-8 text-center text-2xl font-kaushan md:text-3xl lg:text-4xl">
                        WE WANT YOU THERE!
                    </p>
                    <p className="mt-4 text-center text-2xl font-kaushan md:text-3xl lg:text-4xl">
                        Join our happy moment
                    </p>
                    <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
                        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 mx-auto">
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
                    </div>
                </div>
                <div className=" flex flex-col items-center px-4 sm:px-0">
                    <GoogleMapLocation className="w-full h-[300px] sm:h-[400px] " />
                    <button
                        onClick={() => window.open(venueUrl)}
                        className="mt-8 bg-[#412222] text-white font-kaushan text-lg py-2 px-5 rounded-lg border-none cursor-pointer sm:text-base sm:py-2.5 sm:px-5"
                    >
                        Lihat lokasi
                    </button>
                </div>
            </div >
        </div >



    )
}

export default EventDetails
