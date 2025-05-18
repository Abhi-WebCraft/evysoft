import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import styles from './BannerSection1.module.css'; // optional
import Container from '@/components/Layout/Container';
import Btn from '@/components/Layout/Btns/Btn';
import Link from 'next/link';

export default function BannerSection1() {
  const slides = [
    {
      heading: 'Empowering Digital Innovation',
      para: 'Cutting-edge IT solutions that drive your business forward.',
      image: '/images/home/2.jpg',
    },
    {
      heading: 'Transforming Ideas Into Technology',
      para: 'Custom software. Scalable systems. Smarter future.',
      image: '/images/home/3.jpg',
    },
    {
      heading: 'Smart Solutions for a Digital World',
      para: 'IT services that simplify, streamline, and succeed.',
      image: '/images/home/4.jpg',
    },
  ];

  return (
    <section className={`${styles.bannerslider}`}>
      <Swiper
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className=" w-full h-[450px] lg:h-[700px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <Container>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[100%] lg:max-w-2xl z-10">
                  <h1 className="text-[42px] lg:text-[50px] font-[400] leading-[45px] lg:leading-[55px] mt-[50px] md:mt-[60px] lg:mt-[0px] mb-2 lg:mb-4">{slide.heading}</h1>
                  <p className="text-lg md:text-[22px] font-medium mb-6">{slide.para}</p>
                  <div className="flex justify-center gap-5">
                    {/* <Btn title="Contact Us" link="/contact" /> */}
                    <Link href="/contact" className='bg-[#fff] border-2 border[#261fb3] py-[12px] px-[45px] rounded-full text-[17px] font-[600] text-[#261fb3]'>Contact Us</Link>
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
