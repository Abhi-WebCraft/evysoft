import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './BannerSection1.module.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Container from '@/components/Layout/Container';
import Btn from '@/components/Layout/Btns/Btn';
import Link from 'next/link';
import Image from 'next/image';

export default function BannerSection1() {
  // Array of banner data
  const bannerbg = [
    {
      heading: 'Empowering  ',
      heading1: ' Digital',
      heading2: 'Innovation',
      para:'Cutting-edge IT solutions that drive your business forward.'
    },
      {
      heading: 'Transforming     ',
      heading1: 'Ideas Into',
      heading2: 'Technology',
      para:'Custom software. Scalable systems. Smarter future.'
    },
     {
      heading: 'Smart Solutions  ',
      heading1: 'for a',
      heading2: ' Digital World  ',
      para:'IT services that simplify, streamline, and succeed.'
    },
  ];

  return (
    <section className={styles.bannerslider}>
      {/* Static background image */}
      <div className="absolute inset-0 w-full h-[700px] bg-center bg-cover" style={{ backgroundImage: 'url(/images/banner/4.jpg)' }}></div>

      {/* Swiper component for sliding text content */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Navigation]}
        className={styles.bannerslider}
      >
        {bannerbg.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[700px]">
              <div className="overlay"></div>
              <Container>
                <div className="absolute top-[50%] left-[20%] transform -translate-x-[20%] -translate-y-[50%] max-w-[800px] banner-content">
                  <div className='flex flex-col gap-6'>
                    {index === 0 ? (
                      <h1 className='text-[#261fb3]'>{banner.heading} <span className='rajeev text-[65px] leading-[75px] banner-h2 '> {banner.heading1}</span>&nbsp;
                      <span className='text-[65px] leading-[75px] text-[#261fb3] banner-h2'>{banner.heading2}</span></h1>
                    ) : (
                      <h2 className='text-[65px] leading-[75px] text-[#261fb3] banner-h2'>{banner.heading} <span className='rajeev text-[65px] leading-[75px] banner-h2'> {banner.heading1}</span>&nbsp;
                      <span className='text-[65px] leading-[75px] text-[#261fb3] banner-h2'>{banner.heading2}</span></h2>
                    )}
                    <p className='text-[18px] text-banner text-white'>
                    IT services that simplify, streamline, and succeed.
                    </p>
                    <div className='flex gap-5 pt-3 buttons-banner'>
                      <div>
                        <Btn title="Contact Us" link="/contact" />
                      </div>
                      <Link href="tel:+971524495817">
                        {/* <div className='flex items-center gap-3'>
                          <Image src="/images/icons/call.svg" alt="phone-vector" width="20" height="20" className="w-[30px] h-[30px] banner-icon" />
                          <p className='text-[25px] font-bold banner-cta text-white'>+911234567</p>
                        </div> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
