"use client"; // if you're using Next.js App Router

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

const logos = [
  { src: "/images/icons/brand_8_1.svg", alt: "Wattse" },
  { src: "/images/icons/brand_8_5.svg", alt: "Nextech" },
  { src: "/images/icons/brand_8_2.svg", alt: "Muast" },
  { src: "/images/icons/brand_8_1.svg", alt: "Chatbot" },
  { src: "/images/icons/brand_8_5.svg", alt: "Soluck" },
];

export default function LogoSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
    <section className="">
    <Container>
        <div className="text-center mb-[30px]">
            <SectionTitle subtitle="Trusted by big companies" title="Trusted by big companies"/>
        </div>
    <div className="slider-wrapper">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-card">
            <div className="card-content border">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    

      <style jsx>{`
        .slider-wrapper {
          padding: 20px;
        }

        .logo-card {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .card-content {
          background: linear-gradient(to bottom, #ffffff, #f0f0f0);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card-content:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
    </Container>
    </section>
    </>
  );
}
