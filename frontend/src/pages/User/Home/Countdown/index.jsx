import React, { useState, useEffect } from 'react';
import styles from "./index.module.css"
import { getAllKeratin } from '../../../../api/request';

const Countdown = () => {
    const calculateTimeLeft = () => {
        let difference = +new Date('2024-02-11');
        let currentTime = +new Date();
        let timeLeft = difference - currentTime;
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [time, setTime] = useState(calculateTimeLeft());
    const [keratin, setKeratin] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    useEffect(() => {
        getAllKeratin().then(data => {
            setKeratin(data);
        });
    }, []);

console.log(keratin.bestSeller);

    return (
        <div className={styles.parentCountdown}>
            <div className={styles.countdown}>
                <h2 className={styles.countdownText}>Həftənin təklifi</h2>
                <div className={styles.timer}>
                    <div>
                        <p style={{ textAlign: "center" }}>{time.days}</p>
                        <p style={{ textAlign: "center" }}>gün</p>
                    </div>
                    <div>
                        <p style={{ textAlign: "center" }}>{time.hours}</p>
                        <p style={{ textAlign: "center" }}>saat</p>
                    </div>
                    <div>
                        <p style={{ textAlign: "center" }}>{time.minutes}</p>
                        <p style={{ textAlign: "center" }}>dəqiqə</p>
                    </div>
                    <div>
                        <p style={{ textAlign: "center" }}>{time.seconds}</p>
                        <p style={{ textAlign: "center" }}>saniyə</p>
                    </div>
                </div>
                <div className={styles.countdownImg}>
                    <img src={keratin.bestSeller === "true" ? keratin.productImgUrl : "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww" }
                    alt='' />
                </div>
            </div>
        </div>
    );
};

export default Countdown;
