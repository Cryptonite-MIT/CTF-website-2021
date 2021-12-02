import React, { useEffect, useState } from 'react';

const calculateTimeLeft = () => {
    const eventDate = new Date('10 Dec, 2021 12:00:00').getTime();
    const difference = eventDate - Date.now();
    const seconds = Math.floor( ( difference / 1000 ) % 60 );
    const minutes = Math.floor( ( difference / 1000 / 60 ) % 60 );
    const hours = Math.floor( ( difference / 1000 / 60 / 60 ) % 24 );
    const days = Math.floor( difference / 1000 / 60 / 60 / 24 );
    return {
        days,
        hours,
        minutes,
        seconds,
        total: difference
    };
}

function Timer(eventDate) {

    const [ timeLeft, setTimeLeft ] = useState( calculateTimeLeft( eventDate ) );

    useEffect( () => {
        const t = setTimeout( () => {
            setTimeLeft( calculateTimeLeft( eventDate ) );
        }, 1000 );
        return () => clearTimeout( t );
    } );

    return <span className="timer">{timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes and {timeLeft.seconds} seconds</span>
}

export default Timer;