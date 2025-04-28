// components/ServiceCards.jsx
import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TeamSlider({ services = [] }) {
  return (
    <Container>
      <div className="pb-[100px] overflow-hidden">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="service-card p-6 rounded-xl shadow-md relative bg-white"
                data-aos={service.animation || "fade-up"}
              >
                <div className="service-card_number text-3xl font-bold text-primary mb-4">
                  {service.number}
                </div>

                <div className="shape-icon flex items-center justify-center relative mb-4">
                  <Image
                    width={100}
                    height={100}
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="dots"></span>
                </div>

                <h3 className="box-title text-xl font-semibold mb-2">
                  <Link href={service.link} className="text-blue-600 hover:underline">
                    {service.title}
                  </Link>
                </h3>

                <p className="service-card_text text-gray-600 mb-4">{service.text}</p>

                <Link
                  href={service.link}
                  className="th-btn inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Read More <i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>

                <div className="bg-shape absolute bottom-0 right-0 opacity-20">
                  <Image
                    width={100}
                    height={100}
                    src={service.bgShape}
                    alt="Background Shape"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
