import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Btn from "@/components/Layout/Btns/Btn";
import Container from "@/components/Layout/Container";
import styles from '@/components/Containers/Home/Style/Banner.module.css'; // Import the CSS module
// Swiper settings
const setting = {
    slidesPerView: 1,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    }
  }
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
export default function Banner() {
    const [isLoop, setIsLoop] = useState(false);
    useEffect(() => {
        setIsLoop(true);
    }, []);
    return (
        <div className={styles.bannersection}>
            <div className={styles.BannerSlider}>
                <Swiper
                    {...setting}
                    loop={isLoop}
                    modules={[Navigation, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }} 
                    className="banner-active swiper-container"
                >
                    {BannerData.map((banner, i) => (
                    <SwiperSlide key={i} className={`${styles.BannerSlide}  swiper-slide`} style={{ backgroundImage: `url(${banner.sliderImg})` }}>
                        <div className={styles.bannercontent}>
                            <Container>  
                                <div className={styles.BannerContentCol}>                  
                                    <div className={styles.bigheading}>{banner.sliderTitle}</div>
                                    <div className={styles.SliderContent}>{banner.sliderContent}</div>
                                    <Btn link={banner.sliderLink} title="View Our Tour" />
                                </div>  
                            </Container>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                
            </div>
        </div>
    );
}
