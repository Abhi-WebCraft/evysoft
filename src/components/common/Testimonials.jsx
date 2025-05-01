"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import SectionTitle from "../Layout/SectionTitle";
import Container from "../Layout/Container";

const testimonials = [
  {
    text: "I wanted to let you know that the file you sent is excellent and serves our needs. We are impressed with the quality of your work, quick turnaround, and response to communication.",
    author: "Ric Dube",
    bgColor: "#fff"
  },
  {
    text: "We are impressed with the data entry services Computyne and the team provides to us. One ca undoubtedly count on Computyne for their invoice processing needs. Thank You!",
    author: "Craig Archbold",
    bgColor: "#fff"
  },
  {
    text: "We are very satisfied with your resume processing services and you fitted all our deadlines and exceeded our expectations in quality and due that we consider Computyne a valuable component of our squad.",
    author: "Shira Papir",
    bgColor: "#fff"
  },
  {
    text: "I appreciate that Computyne is putting in long hours on short notice with being very flexible and responsive. I continue to be impressed with your work ethic and desire to build a strong relationship.",
    author: "Devin O'Leary",
    bgColor: "#fff"
  }
];

export default function Testimonials() {
  return (
    <section className="section bg-[#f5fbfb]" >
      <div className="review-slider">
        <Container>
          <div className="max-w-[1000px] mx-auto text-center pb-[50px]">
            <SectionTitle title="Client's Review" />
          </div>
          <div className="service-slide-box">
            <Swiper
              spaceBetween={20}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Autoplay]}
              className="review-slider-section"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="review-card flex flex-col gap-6 border-[#684df3]"
                    style={{
                      backgroundColor: testimonial.bgColor,
                      boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
                    }}
                  >
                    <div className="review-quote w-full">
                      <Image
                        src="/images/icons/text.svg"
                        alt=""
                        width="128"
                        height="128"
                        className="h-[50px] object-contain"
                      />
                    </div>
                    <div className="review-text">
                      <p>{testimonial.text}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image src="/images/icons/star.svg" alt="star" width="18" height="18" className="w-[18px] h-[18px]" />
                      <Image src="/images/icons/star.svg" alt="star" width="18" height="18" className="w-[18px] h-[18px]" />
                      <Image src="/images/icons/star.svg" alt="star" width="18" height="18" className="w-[18px] h-[18px]" />
                      <Image src="/images/icons/star.svg" alt="star" width="18" height="18" className="w-[18px] h-[18px]" />
                      <Image src="/images/icons/star.svg" alt="star" width="18" height="18" className="w-[18px] h-[18px]" />
                    </div>
                    <h3 className="text-[22px]">{testimonial.author}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </section>
  );
}
