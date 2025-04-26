import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import BannerSection from '@/components/HomePage/BannerSection/BannerSection';
import About from '@/components/HomePage/About/About';
import Slider from '@/components/HomePage/Slider';
import Services from '@/components/HomePage/Services';
import Ourservices from '@/components/HomePage/Ourservices';
import ServiceCards from '@/components/common/ServiceCard';
import CtaBlock from '@/components/HomePage/CtaBlock';
import Contactus from '@/components/common/Contactus';
import Absection from '@/components/common/Absection';

export default function Home({referrer }) {
  console.log(referrer)
    const PageMeta = 
        {
        title: "web site ",
        description:"Discover Dar Aluloom International, your trusted education consultant in Dubai, offering test prep, tutoring & consulting for academic and career success.",
        keywords: "Global Education Consultants in UAE, Study Overseas or Abroad, Educational Consultants,  College Admissions, University Admissions Dubai UAE., Global Education Advisors in UAE,",
        }
        const services = [
          {
            number: "01",
            icon: "/images/icons/icon.svg",
            title: "Web Development",
            text: "We build fast, scalable, and responsive websites.",
            link: "/services/web-development",
            bgShape: "/images/home/service_card_bg.webp",
            animation: "fade-up-right",
          },
          {
            number: "02",
            icon: "/images/icons/icon.svg",
            title: "App Development",
            text: "Get smooth and powerful mobile apps.",
            link: "/services/app-development",
            bgShape: "/images/home/service_card_bg.webp",
            animation: "flip-down",
          },
          {
            number: "03",
            icon: "/images/icons/icon.svg",
            title: "App Development",
            text: "Get smooth and powerful mobile apps.",
            link: "/services/app-development",
            bgShape: "/images/home/service_card_bg.webp",
            animation: "fade-up-left",
          },
          {
            number: "04",
            icon: "/images/icons/icon.svg",
            title: "Web Development",
            text: "We build fast, scalable, and responsive websites.",
            link: "/services/web-development",
            bgShape: "/images/home/service_card_bg.webp",
            animation: "fade-up-right"
          },
          {
            number: "05",
            icon: "/images/icons/icon.svg",
            title: "App Development",
            text: "Get smooth and powerful mobile apps.",
            link: "/services/app-development",
            bgShape: "/images/home/service_card_bg.webp",
            animation: "flip-down",
          },
          {
            number: "06",
            icon: "/images/icons/icon.svg",
            title: "App Development",
            text: "Get smooth and powerful mobile apps.",
            link: "/services/app-development",
            bgShape: "/images/home/service_card_bg.webp",
            animation: "fade-up-left",
          },
        ];
        
        
        
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
      <BannerSection/>
      <Absection/>
      <About/>
      <ServiceCards services={services} />
      <Slider/>
      <Services/>
      <Ourservices/>
      <Contactus/>
      <CtaBlock/>
    </Layout>
    </>
  );
}
