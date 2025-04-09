
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "../Layout/SectionTitle";
import Container from "../Layout/Container";



export default function ProgramsSlider({programSlides, title, subtitle,content}) {
  return (
    <section
      className="pb-[100px]"
      style={{ backgroundImage: "url(/images/bg/dot-bg.png)" }}
    >
      <Container>
        <div className="text-center">
          <SectionTitle 
             title={title}
             subtitle={subtitle} 
            content={content}
             />
        </div>
        <div>
          <Swiper
            className="workgallery-slider mt-[50px]"
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            breakpoints={{
              450: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {programSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-3 bg-[#fff] p-7 rounded-xl h-[390px] my-5" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px", }}>
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] object-cover"
                  />
                  <p className="text-[#28aa4a] font-bold">{slide.subtitle}</p>
                  <h3 className="">{slide.title}</h3>
                  <p className="">{slide.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
