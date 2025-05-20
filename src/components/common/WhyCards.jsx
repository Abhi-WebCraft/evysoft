'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import SectionTitle from '../Layout/SectionTitle';
import Container from '../Layout/Container';

export default function WhyCards({ data, title, subtitle, content }) {
  // Duplicate the array to ensure seamless loop
  const loopedData = [...data, ...data];

  return (
    <section className="">
      <Container>
        {/* Section Title */}
        <div className="mb-[50px] text-center">
          <SectionTitle
            title={title}
            content={content}
            contentColor
            titleColor
            titleSpanColor
            titlespan
            subtitle={subtitle}
            subtitleColor
          />
        </div>

        {/* Swiper Logo Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          loop={true}
          speed={2400} // Slow and smooth
          allowTouchMove={false} // Prevent user interaction interruptions
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {loopedData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[50px]  flex px-6 items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={100}
                  className="object-contain w-full h-full grayscale brightness-75 "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
