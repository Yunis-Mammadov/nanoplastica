import React, { useState, useEffect } from 'react';
import styles from "./index.module.css"

const Countdown = () => {
    const calculateTimeLeft = () => {
        let difference = +new Date('2024-01-11');
        let currentTime = +new Date();
        let timeLeft = difference - currentTime;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [time, setTime] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className={styles.countdown}>
            <div className={styles.countdownText}>
                <p style={{textAlign:"center"}}>{time.days}</p>
                <p>days</p>
            </div>
            <div>
                <p style={{textAlign:"center"}}>{time.hours}</p>
                <p>hours</p>
            </div>
            <div>
                <p style={{textAlign:"center"}}>{time.minutes}</p>
                <p>minutes</p>
            </div>
            <div>
                <p style={{textAlign:"center"}}>{time.seconds}</p> 
                <p>seconds</p>
            </div>
        </div>
    );
};

export default Countdown;
