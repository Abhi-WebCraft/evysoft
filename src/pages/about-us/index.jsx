import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import About from '@/components/HomePage/About/About';
import Slider from '@/components/HomePage/Slider';
import Services from '@/components/HomePage/Services';
import Ourservices from '@/components/HomePage/Ourservices';
import ServiceCards from '@/components/common/ServiceCard';
import CtaBlock from '@/components/HomePage/CtaBlock';
import Contactus from '@/components/common/Contactus';
import Innerbanner from '@/components/common/Innerbanner';

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
          },
          {
            number: "02",
            icon: "/images/icons/icon.svg",
            title: "App Development",
            text: "Get smooth and powerful mobile apps.",
            link: "/services/app-development",
            bgShape: "/images/home/service_card_bg.webp",
          },
          {
            number: "03",
            icon: "/images/icons/icon.svg",
            title: "App Development",
            text: "Get smooth and powerful mobile apps.",
            link: "/services/app-development",
            bgShape: "/images/home/service_card_bg.webp",
          },
          {
            number: "04",
            icon: "/images/icons/icon.svg",
            title: "Web Development",
            text: "We build fast, scalable, and responsive websites.",
            link: "/services/web-development",
            bgShape: "/images/home/service_card_bg.webp",
          },
          {
            number: "05",
            icon: "/images/icons/icon.svg",
            title: "App Development",
            text: "Get smooth and powerful mobile apps.",
            link: "/services/app-development",
            bgShape: "/images/home/service_card_bg.webp",
          },
          {
            number: "06",
            icon: "/images/icons/icon.svg",
            title: "App Development",
            text: "Get smooth and powerful mobile apps.",
            link: "/services/app-development",
            bgShape: "/images/home/service_card_bg.webp",
          },
        ];
        
        
        
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
    <Innerbanner
      title="About Us"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia fugiat neque quam ad in assumenda laudantium libero quod omnis aperiam hic laborum earum, inventore sequi temporibus, voluptas recusandae molestias?"
      image="/images/about-bg.jpg"/>
      <About/>
      <ServiceCards services={services} />
      {/* <Slider/> */}
      {/* <Services/> */}
     <div className='mt-[-100px]'>
     <Ourservices/>
     </div>
      <Contactus/>
      <CtaBlock/>
    </Layout>
    </>
  );
}
