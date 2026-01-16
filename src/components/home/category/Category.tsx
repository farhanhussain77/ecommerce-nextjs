'use client'
import LeftArrow from "@/components/icons/left-arrow";
import CategoryCard from "./CategoryCard";
import RightArrow from "@/components/icons/right-arrow";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper/modules";
import { useRef } from "react";

const categories = [
    "Phones",
    "Smart Watches",
    "Cameras",
    "Headphones",
    "Computers",
    "Gaming"
]

const Category = () => {
    const swiperRef = useRef<SwiperRef>(null);

    const handlePrev = () => {
        swiperRef.current?.swiper.slidePrev();
    }
    const handleNext = () => {
        swiperRef.current?.swiper.slideNext();
    }
    return (
        <div className="xl:max-w-[1120px] lg:max-w-[1000px] md:max-w-[850px] sm:max-w-[600px] max-w-[550px] mx-auto mt-20 mb-20 xl:px-0 md:px-10 px-4">
            <div className="">
                <div className="flex items-center justify-between">
                    <p>Browse By Category</p>
                    <div className="flex items-center gap-8">
                        <LeftArrow />
                        <RightArrow />
                    </div>
                </div>
                
                <div className="">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".left-arrow",
                            nextEl: ".right-arrow",
                        }}
                        spaceBetween={32}
                        slidesPerView="auto"
                        slidesPerGroup={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            0: { spaceBetween: 16 },
                            768: { spaceBetween: 32 },
                        }}
                    >
                        {categories.map((category, idx:number) => (
                            <SwiperSlide key={idx} className="!w-[160px]">
                                <CategoryCard title={category} />
                            </SwiperSlide>
                        ))}
                        {/* <SwiperSlide className="!w-[200px]"><CategoryCard title="Phones" /></SwiperSlide>
                        <SwiperSlide><CategoryCard title="Smart Watches" /></SwiperSlide>
                        <SwiperSlide><CategoryCard title="Cameras" /></SwiperSlide>
                        <SwiperSlide><CategoryCard title="Headphones" /></SwiperSlide>
                        <SwiperSlide><CategoryCard title="Computers" /></SwiperSlide>
                        <SwiperSlide><CategoryCard title="Gaming" /></SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Category;