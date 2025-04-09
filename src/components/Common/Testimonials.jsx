"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "../Layout/SectionTitle";
import Container from "../Layout/Container";

const testimonials = [
  {
    name: "Furkan Giray",
    role: "Web Developer",
    image:
      "/image/about/casds.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus.",
  },
  {
    name: "Furkan Giray",
    role: "Web Developer",
    image:
      "/image/about/casds.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus.",
  },
  {
    name: "Furkan Giray",
    role: "Web Developer",
    image:
      "/image/about/casds.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus.",
  },
  {
    name: "Furkan Giray",
    role: "Web Developer",
    image:
      "/image/about/casds.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus.",
  },
  {
    name: "Furkan Giray",
    role: "Web Developer",
    image:
      "/image/about/casds.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus.",
  },
  {
    name: "Furkan Giray",
    role: "Web Developer",
    image:
      "/image/about/casds.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus.",
  },
  // Add more testimonials here
];

export default function Testimonials() {
  return (
    
    <section
      className="relative bg-[#f2f2f2] bg-cover bg-center py-12">
      <div className="absolute inset-0"></div>
      <div className="relative z-10 text-center">
        <SectionTitle subtitle="Testimonials"  title="What our clients say" />
      </div>

      <div className="relative z-10 mt-8">
        <Container>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 }, 
            640: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
          }}
          className="py-6"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
             <div className="bg-[#ffffff] rounded-[25px] p-[10px] testimonials flex items-center justify-center text-center ">
                <div className=" bg-[#fff] px-8 rounded-[20px] py-4 lg:py-12" style={{ boxShadow: "0 10px 60px rgba(15, 53, 103, 0.1)" }}>
                  <div className=" gap-8 mb-2  ">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="w-[50px] h-[50px] rounded-[100px] mx-auto max-w-[50px]  object-cover"
                          />
                          <div className="">
                            <p className="text-lg font-bold text-gray-900">{testimonial.name}</p>
                            <span className=" font-medium text-sm">{testimonial.role}</span>
                          </div>
                        </div>
                        <p className=" text-gray-700">{testimonial.review}</p>
                        <div className="text-yellow-500 text-2xl mt-4">★ ★ ★ ★ ★</div>
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </Container>
      </div>
    </section>
  );
}
