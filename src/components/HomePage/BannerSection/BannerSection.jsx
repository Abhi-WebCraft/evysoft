import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './BannerSection.module.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Container from '@/components/Layout/Container';
import Btn from '@/components/Layout/Btns/Btn';
import Link from 'next/link';
import Image from 'next/image';

export default function App() {
  // Array of banner data
  const bannerbg = [
    {
      heading: 'High-Quality  ',
      heading1: 'Services',
      heading2: '',
    },
    {
      heading: 'On-Time ',
      heading1: 'Delivery:',
      heading2: '',
    },
    {
      heading: 'Customer  ',
      heading1: 'Satisfaction',
      heading2: '',
    },
  ];

  return (
    <section className={styles.bannerslider}>
      {/* Static background image */}
      <div className="absolute inset-0 w-full h-[700px] bg-center bg-cover" style={{ backgroundImage: 'url(/images/abhi/banner-bg.jpg)' }}></div>

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
                      <h1 className='text-[#fff]'>{banner.heading} <span className='rajeev text-[65px] leading-[75px] banner-h2 '> {banner.heading1}</span>&nbsp;
                      <span className='text-[65px] leading-[75px] text-[#fff] banner-h2'>{banner.heading2}</span></h1>
                    ) : (
                      <h2 className='text-[65px] leading-[75px] text-[#fff] banner-h2'>{banner.heading} <span className='rajeev text-[65px] leading-[75px] banner-h2'> {banner.heading1}</span>&nbsp;
                      <span className='text-[65px] leading-[75px] text-[#fff] banner-h2'>{banner.heading2}</span></h2>
                    )}
                    <p className='text-[18px] text-banner text-white'>
                    We create custom websites and applications for your business that are not only visually appealing but also user-friendly.
                    </p>
                    <div className='flex gap-5 pt-3 buttons-banner'>
                      <div>
                        <Btn title="BOOK NOW" link="/contact" />
                      </div>
                      <Link href="tel:+">
                        <div className='flex items-center gap-3'>
                          <Image src="/images/icons/phone-call.svg" alt="phone-vector" width="50" height="50" className="w-[50px] h-[50px] banner-icon" />
                          <p className='text-[25px] font-bold banner-cta text-white'>+7341173250</p>
                        </div>
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
