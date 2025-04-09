import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styles from '@/components/Containers/Home/Style/HolidayPackages.module.css'; // Import the CSS module
import Section from "@/components/Layout/Section";
import Container from "@/components/Layout/Container";
import Btn from "@/components/Layout/Btns/Btn";
  const BannerData = [
    { 
        sliderImg: "/images/home/banner/1.webp",
        sliderTitle: "The Tigers Nest",
        sliderContent: "Marvels of Bhutan",
        sliderLink:"/"
    },
    { 
        sliderImg: "/images/home/banner/2.jpg",
        sliderTitle: "Discover your Inner self",
        sliderContent: "Meet the monk on the Hilltop",
        sliderLink:"/"
    },
    { 
        sliderImg: "/images/home/banner/3.jpg",
        sliderTitle: "Bhutan Trek",
        sliderContent: "Experience The Thrills of Himalayan Trek Routes",
        sliderLink:"/"
    },
    { 
        sliderImg: "/images/home/banner/4.webp",
        sliderTitle: "Explore",
        sliderContent: "The Villages of Bhutan",
        sliderLink:"/"
    },
    { 
        sliderImg: "/images/home/banner/5.webp",
        sliderTitle: "Highlander of Bhutan",
        sliderContent: "Experience The Medieval Ambience Of Nomad Lifestyles",
        sliderLink:"/"
    },
    { 
        sliderImg: "/images/home/banner/6.webp",
        sliderTitle: "Escape To The Countryside",
        sliderContent: "Enjoy The Scenic Valleys of Bhutan",
        sliderLink:"/"
    },
    { 
        sliderImg: "/images/home/banner/7.webp",
        sliderTitle: "The Colorful Festival of Bhutan",
        sliderContent: "Relish The Happy Expression",
        sliderLink:"/"
    },
    { 
        sliderImg: "/images/home/banner/8.jpg",
        sliderTitle: "Bhutan Cultural Extravaganza",
        sliderContent: "Enjoy the Guided Tours",
        sliderLink:"/"
    },
    { 
        sliderImg: "/images/home/banner/9.webp",
        sliderTitle: "Royal Manas Park and Birding Tour",
        sliderContent: "Relieve City Stress in Natures Lap",
        sliderLink:"/"
    },
    { 
        sliderImg: "/images/home/banner/10.jpg",
        sliderTitle: "Discover the Wonders of Bhutan",
        sliderContent: "Explore the Valley of Thimphu, Paro and Punakha",
        sliderLink:"/"
    },
    { 
        sliderImg: "/images/home/banner/11.jpg",
        sliderTitle: "Bhutan Luxury Tour",
        sliderContent: "All Inclusive Luxury Holidays",
        sliderLink:"/"
    },
]
export default function HolidayPackages() {
    return (
        <Section className="overflow-hidden">
            <Container>
                <div className={styles.PackagesHeader}>
                    <h1>Bhutan Holiday Packages</h1>
                    <p>If you are planning a worthwhile holiday in Bhutan, Bhutan Best Inbound Tour is the right place to come to. We offer various Bhutan holiday tours ranging from cultural to adventurous and family-friendly tours. Our packages are not rigid as they are tailored as per your likeness. We ensure our packages are properly planned so you enjoy your Bhutan vacation without any worries. We further enhance your Bhutan Tour Experience by adding some activities like lunch at the farmhouse, walk through the woods, or by arranging to meet the monk or Nomads at the hilltop. To help you prepare for your Bhutan trip, we have put together some guidelines on our home page like Places to visit in Bhutan, Things to do in Bhutan to picking your accommodation style so you get what you are looking for on your Bhutan Trip. Explore a variety of itineraries and choose your style of traveling with us. We are a licensed Bhutan travel agency certified by the Tourism Council of Bhutan and booking with us directly will invariably save a lot of your money. Check out our reviews on Trip Advisor or Tour Radar and see what our guests have to say so you are comfortable booking the tour with us. Once you book our tour package, we become your one-stop travel agent, as we can help coordinate your flight tickets at the same or less price offered by airlines.</p>
                </div>
            <div className={styles.PackagesSlider}>
            <Swiper                
                slidesPerView={1}
                spaceBetween={30}
                scrollbar={true}
                navigation={true}
                grabCursor={true}
                style={{ overflow: 'visible' }}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                    1366: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                    1500: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
                modules={[Navigation, Scrollbar]}
                autoplay={{ delay: 3000, disableOnInteraction: false }} 
                className="banner-active swiper-container"
                
            >
                {BannerData.map((banner, i) => (
                <SwiperSlide key={i} className={`${styles.BannerSlide}  swiper-slide`} style={{ backgroundImage: `url(${banner.sliderImg})` }}>
                    <div className={styles.bannercontent}>
                        <Container>  
                            <div className={styles.BannerContentCol}>                  
                                {/* <div className={styles.bigheading}>{banner.sliderTitle}</div> */}
                                {/* <div className={styles.SliderContent}>{banner.sliderContent}</div> */}
                                <Btn link={banner.sliderLink} title="View Our Tour" />
                            </div>  
                        </Container>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </Container>
        </Section>
    );
}
