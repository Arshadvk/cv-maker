"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Carousel() {
    return (
        <section className="flex justify-center items-center h-[400px]">
            <Swiper
                modules={[EffectCoverflow, Autoplay]}
                slidesPerView={3} // Show 3 slides at a time
                centeredSlides={true} // Center the active slide
                loop={true} // Infinite scrolling
                autoplay={{ delay: 3000 }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 50,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                className="w-full max-w-4xl"
            >
                {[1, 2, 3, 4, 5].map((num) => (
                    <SwiperSlide key={num}>
                        <div className="flex justify-center items-center bg-blue-500 text-white h-64 rounded-lg text-2xl font-bold shadow-xl transition-transform duration-300 transform hover:scale-105">
                            Slide {num}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
