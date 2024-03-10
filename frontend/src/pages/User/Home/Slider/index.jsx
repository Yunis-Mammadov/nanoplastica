import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './styles.css';
import { getAllImgs } from '../../../../api/request';

export default function Slider() {
    const [swiper, setSwiper] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        getAllImgs()
            .then(data => {
                setImages(data);
            })
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (swiper !== null) {
                if (swiper.isEnd) {
                    swiper.slideTo(0);
                } else {
                    swiper.slideNext();
                }
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [swiper]);

    return (
        <Swiper
            spaceBetween={100}
            pagination={{ clickable: true }}
            onSwiper={setSwiper}
            className="mySwiper"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} style={{ 
                    backgroundImage: `url(${image.sliderImg})` 
                    }}>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
