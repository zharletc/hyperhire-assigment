"use client";
// import { useState } from "react";
import Card from "../molecules/Card";
// import { ArrowLeft, ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

interface CarouselProps {
    className?: string;
}
const Carousel: React.FC<CarouselProps> = ({ className }) => {

    // const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        {
            image: '/dummy_1.jpg',
            name: 'Abhishek Gupta',
            position: '마케팅',
            yos: '2y+',
            activities: [
                "마케팅 콘텐츠 제작",
                "인스타그램 관리",
                "트위터 관리",
                "블로그 글 작성",
            ]
        },
        {
            image: '/dummy_1.jpg',
            name: 'Jane Smith',
            position: '마케팅',
            yos: '2y+',
            activities: [
                "마케팅 콘텐츠 제작",
                "인스타그램 관리",
                "트위터 관리",
                "블로그 글 작성",
            ]
        },
        {
            image: '/dummy_1.jpg',
            name: 'Alice Johnson',
            position: '마케팅',
            yos: '2y+',
            activities: [
                "마케팅 콘텐츠 제작",
                "인스타그램 관리",
                "트위터 관리",
                "블로그 글 작성",
            ]
        },
    ];
    // Fungsi untuk berpindah ke next atau previous card
    // const goToNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    // };

    // const goToPrev = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    // };

    // const visibleCards = [
    //     cards[(currentIndex - 1 + cards.length) % cards.length],
    //     cards[currentIndex],
    //     cards[(currentIndex + 1) % cards.length]
    // ];

    return (
        <div className={className}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    // decrease the size of the pagination navigation
                    '--swiper-navigation-size': '32px',
                } as React.CSSProperties}
                effect="coverflow"
                grabCursor={false}
                centeredSlides={true}
                // spaceBetween={50}
                // slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 150,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false
                }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 1
                    },
                    1560: {
                        slidesPerView: 3
                    }
                }}
                loop={false}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}><Card {...card} /></SwiperSlide>
                ))}
            </Swiper>
            {/* <div className="relative w-full flex justify-center items-center">
                <button
                    onClick={goToPrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-white z-1">
                    <ArrowLeft2 size={16} />
                </button>
                <div className="flex overflow-hidden z-0">
                    {visibleCards.map((card, index) => (
                        <div
                            key={index}
                            className={`transition-transform duration-500 ease-in-out w-[300px] ${index === 1 ? 'scale-100' : 'scale-[0.9]'} ${index === 0 ? 'opacity-75' : index === 2 ? 'opacity-75' : 'opacity-100'}`}
                        >
                            
                        </div>
                    ))}
                </div>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-white">
                    <ArrowRight2 size={16} />
                </button>
            </div> */}
        </div>

    )
}

export default Carousel;