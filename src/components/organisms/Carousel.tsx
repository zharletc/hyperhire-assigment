"use client";
import Card from "../molecules/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useState } from "react";

interface CarouselProps {
    className?: string;
    candidates: Candidate[];
}
const Carousel: React.FC<CarouselProps> = ({ className, candidates }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (e: any) => {
        console.log(e.realIndex);
        setCurrentIndex(e.realIndex);
    }

    return (
        <div className={className}>
            <div className="w-full flex justify-center">
                <div className="relative bg-nephritis-05 px-4 py-2 max-w-max rounded-lg mb-6 opacity-0 animate-fadeIn500 absolute mdb:left-[5%]">
                    <div className="flex gap-1 items-center">
                        <img src="/icons/ic_dollar.svg" alt="logo" />
                        <p className="font-bold text-trabuddy-alternative text-lg">
                            {candidates[currentIndex].price}
                        </p>
                    </div>

                    {/* Pseudo-element menggunakan Tailwind */}
                    <div className="absolute bottom-[-10px] right-[50%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                            <path d="M6.43301 10.25C6.24056 10.5833 5.75944 10.5833 5.56699 10.25L0.370835 1.25C0.178386 0.916665 0.418948 0.499999 0.803848 0.499999L11.1962 0.5C11.5811 0.5 11.8216 0.916667 11.6292 1.25L6.43301 10.25Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>

            <Swiper
                onSlideChange={(e) => handleSlideChange(e)}
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    '--swiper-navigation-size': '32px',
                } as React.CSSProperties}
                effect="coverflow"
                grabCursor={false}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 150,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false
                }}
                allowTouchMove={false}
                navigation={true}
                spaceBetween={50}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                initialSlide={1}
                breakpoints={{
                    360: {
                        slidesPerView: 2,
                        coverflowEffect: {
                            rotate: 0,
                            stretch: 120,
                            depth: 200,
                            modifier: 1,
                            slideShadows: false,

                        }
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1560: {
                        slidesPerView: 3
                    }
                }}
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {candidates.map((card, index) => (
                    <SwiperSlide key={index}><Card {...card} /></SwiperSlide>
                ))}
            </Swiper>
        </div >

    )
}

export default Carousel;