import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 
const Testimonial = () => {
    return (
        <section className="section relative bg-gray-50 testimonial_bg ">
            <div className="absolute top-0">
                <Image 
                    src="/images/about/testi-shape.png" 
                    alt="Decorative Shape" 
                    width={500} 
                    height={500} 
                    className="w-[800px] h-[570px] testimonial_img"
                />
            </div>
            <Container>
                <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
                    <div>
                        <Image 
                            src="/images/about/testi-img.webp" 
                            alt="Testimonial" 
                            width={500} 
                            height={500} 
                            className="w-full mt-[-1.8px]"
                        />
                    </div>
                    <div className="w-full">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 1,
                                },
                            }}
                            className="testimonial-swiper"
                        >
                            <SwiperSlide>
                                <div className=" p-6 ">
                                    <p className="text-white mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                                    <h4 className="text-lg font-semibold text-white">John Doe</h4>
                                    <p className="text-sm text-white">CEO, Company</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" p-6 ">
                                    <p className="text-white mb-4">"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                                    <h4 className="text-lg font-semibold text-white">Jane Smith</h4>
                                    <p className="text-sm text-white">Marketing Head, BrandX</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" p-6 ">
                                    <p className="text-white mb-4">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."</p>
                                    <h4 className="text-lg font-semibold text-white">Emily Johnson</h4>
                                    <p className="text-sm text-white">Designer, CreativeStudio</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </section>
    );
};
 
export default Testimonial;