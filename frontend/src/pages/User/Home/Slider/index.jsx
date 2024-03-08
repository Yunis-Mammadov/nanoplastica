import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './styles.css';

export default function Slider() {
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (swiper !== null) {
                if (swiper.isEnd) {
                    swiper.slideTo(0);
                } else {
                    swiper.slideNext();
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [swiper]);

    return (
        <Swiper
            spaceBetween={100}
            pagination={{ clickable: true }}
            onSwiper={setSwiper}
            className="mySwiper"
        >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
        </Swiper>
    );
}
