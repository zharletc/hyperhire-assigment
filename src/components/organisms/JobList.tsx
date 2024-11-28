import Link from "next/link";
import JobItem from "../molecules/JobItem";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';
import { Check, TickSquare } from "iconsax-react";
interface JobListProps {
    className?: string;
    services: Service[];
}
const JobList: React.FC<JobListProps> = ({ className, services }) => {
    return (
        <div className={`${className}`}>
            <div className="mdb:block hidden">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    freeMode={true}
                    pagination={false}
                    modules={[Autoplay, FreeMode, Pagination, Navigation]}
                    className="mySwiper"
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    {services.map((item, index) => (
                        <SwiperSlide key={index}><JobItem name={item.name} icon={item.icon} /></SwiperSlide>

                    ))}
                </Swiper>
            </div>
            <div className="mdb:hidden block">
                <div className="flex flex-wrap gap-2 mb-5">
                    {services.map((item, index) => (
                        <div className="flex gap-2 items-center" key={index}>
                            <TickSquare variant="Bold" color="#E8ECFF" size={20} />
                            <p className="text-white font-bold">{item.name}</p>
                        </div>
                    ))}
                </div>
                <Link href="/register" className="text-[#FBFF23] font-bold text-base underline underline-offset-1 mdb:hidden">
                    개발자가 필요하신가요?
                </Link>
            </div>

        </div>
    )
}

export default JobList;