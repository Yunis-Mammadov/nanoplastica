import React, { useState, useEffect } from 'react';
import './index.module.css'; // Stil dosyası

const Slider = ({ interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Slider için sabit veri öğeleri
    const items = [
        <div key={1}>İçerik 1</div>,
        <div key={2}>İçerik 2</div>,
        <div key={3}>İçerik 3</div>,
        // Daha fazla öğe eklenebilir
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === items.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(intervalId);
    }, [items.length, interval]);

    return (
        <div className="slider">
            <div
                className="slider-wrapper"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 1s ease-in-out',
                }}
            >
                {items.map((item, index) => (
                    <div key={index} className="slide">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
