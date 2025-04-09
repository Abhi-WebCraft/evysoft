import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "@/components/Layout/SectionTitle";
import TestimonialsData from "../../Data/TestimonialsData";
import FiveStar from "../../SVG/FiveStar";
import LongArrowRight from "../../SVG/LongArrowRight";
import styles from './Testimonials.module.css'; 

// Swiper settings
const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
  },
  breakpoints: {
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 1,
    },
    '768': {
      slidesPerView: 1,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

export default function Testimonials({
  subtitle,
  title,
  content
}) {
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <div className={styles.testimonialWrapper}>
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-8">
          <SectionTitle subtitle={subtitle ? subtitle : 'Client Feedback'} title={title ? title : 'Client Feedback'} content={content} />
        </div>
        <div className="md:col-span-4">
          <div className={styles.testimonialNavigation}>
            <div className={`${styles.testimonialButton} testimonial-button-prev`}>
              <LongArrowRight width="w-5" />
            </div>
            <div className={`${styles.testimonialButton} testimonial-button-next`}>
              <LongArrowRight width="w-5" />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        {...setting}
        loop={isLoop}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        className="testimonial-active swiper-container"
      >
        {TestimonialsData.map((item, i) => (
          <SwiperSlide key={i} className="testimonial swiper-slide">
            <div className={styles.testimonialBox}>
              <div className={styles.testimonialBoxRatting}>
                <FiveStar />
              </div>
              <div className={styles.testimonialBoxReview}>{item.des}</div>
              <div className={styles.testimonialBg}>
                <Image
                  src="/images/testimonial/testi-icon-bg.png"
                  alt="them-pure"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className={styles.testimonialReviewer}>
              <div className="testimonial-reviewer-avata mr-4">
                <Image
                  src={item.img}
                  alt="them-pure"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.testimonialReviewerName}>
                <h4>{item.name}</h4>
                <span>{item.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
