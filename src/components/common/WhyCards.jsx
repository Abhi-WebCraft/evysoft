'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../Layout/SectionTitle';
import Container from '../Layout/Container';

export default function WhyCards({ data , title, subtitle, content }) {
  return (
    <section className='pb-[100px] '>
      <Container>
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
          <div className="">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="whyCard border shadow-md ">
                  <div className="whyCard_img ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={287}
                      height={180}
                    className='h-[200px] object-cover'/>
                    <div className="whyCard-overlay"></div>
                  </div>
                  <div className="whyCard_content">
                    <div className="whyCard_icon">
                      <Image
                        src={item.icon}
                        alt="Service Icon"
                        width={100}
                        height={100}
                        className="w-8"
                      />
                    </div>
                    <h4 className="box-title  ">
                      <Link href={item.link}>
                        {item.title}
                      </Link>
                    </h4>
                    <p className="whyCard_text">
                      {item.description}
                    </p>
                    <div className="bg-shape">
                      <Image
                        src="/images/home/service_card_bg.webp"
                        alt="Background Shape"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>

   
  );
}
