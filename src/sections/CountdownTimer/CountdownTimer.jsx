import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const x = setInterval(function () {
            const countDownDate = new Date('Oct 06, 2024 10:00:00').getTime();
            const now = new Date().getTime();
            const distance = countDownDate - now;

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

            if (distance < 0) {
                clearInterval(x);
            }
        }, 1000);
    }, []);

    const renderCountDownValues = (data, text) => (
        <div className="flex flex-col items-center">
            <p className="text-2xl md:text-2xl lg:text-2xl font-eb-garamond">{data}</p>
            <p className="text-lg md:text-xl lg:text-xl font-cormorant">{text}</p>
        </div>
    );

    return (
        <div className="mt-8 mb-8 pt-8 pb-8 w-full max-w-md md:mx-auto my-10 px-4 md:px-10 flex flex-col items-center justify-center shadow-lg rounded-xl bg-white text-black text-center bg-no-repeat bg-center bg-cover">
            <p className="text-4xl md:text-4xl lg:text-5xl pb-4 lg:pb-8 font-eb-garamond">06 Oktober 2024</p>
            <div className="w-full flex flex-wrap items-center justify-center gap-6 md:gap-12">
                {renderCountDownValues(days, 'Hari')}
                {renderCountDownValues(hours, 'Jam')}
                {renderCountDownValues(minutes, 'Menit')}
                {renderCountDownValues(seconds, 'Detik')}
            </div>
        </div>
    );
};

export default CountdownTimer;
