import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import About from '@/components/HomePage/About/About';
import CtaBlock from '@/components/HomePage/CtaBlock';
import Innerbanner from '@/components/common/Innerbanner';
import WhyCards from '@/components/common/WhyCards';
import Counter from '@/components/common/Counter';
import Points from '@/components/common/Points';
import Testimonials from '@/components/common/Testimonials';
import SectionTitle from '@/components/Layout/SectionTitle';
import Container from '@/components/Layout/Container';
import ServiceCards from '@/components/common/ServiceCard';

export default function Home({ referrer }) {
  console.log(referrer)
  const PageMeta =
  {
    title: "web site ",
    description: "Discover International, your trusted education consultant in Dubai, offering test prep, tutoring & consulting for academic and career success.",
    keywords: "Global Education Consultants in UAE, Study Overseas or Abroad, Educational Consultants,  College Admissions, University Admissions Dubai UAE., Global Education Advisors in UAE,",
  }

    const services = [
      {
        number: "01",
        icon: "/images/icons/icon.svg",
        title: "Custom Software Development",
        text: "We build scalable, secure, and high-performance software tailored to your unique needs — from simple tools to complex platforms.",
        link: "/contact",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "fade-up-right",
        bgimg:"/images/about/3.jpg"
      },
      {
        number: "02",
        icon: "/images/icons/icon.svg",
        title: "Web Application Development",
        text: "Using modern frameworks like Next.js and React, we create responsive, fast, and user-friendly web apps optimized for performance and SEO.",
      link: "/contact",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "flip-down",
        bgimg:"/images/about/4.jpg"
      },
      {
        number: "03",
        icon: "/images/icons/icon.svg",
        title: "Mobile App Development",
        text: "We develop cross-platform mobile apps for iOS and Android that deliver great user experiences and business value.",
      link: "/contact",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "fade-up-left",
        bgimg:"/images/about/5.jpg"
      },
      {
        number: "04",
        icon: "/images/icons/icon.svg",
        title: "Artificial Intelligence",
        text: "AI enables businesses to lean into the power of data and insights to  enable better responsiveness and decision-making to reimagine operations, experiences, and products.",
      link: "/contact",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "fade-up-right",
        bgimg:"/images/about/6.jpg"
      },
      {
        number: "05",
        icon: "/images/icons/icon.svg",
        title: " Process Automation",
        text: "Process Automation is the use of technology to perform repetitive, rule-based tasks and workflows without human intervention. It helps businesses improve efficiency, reduce errors, cut costs, and increase productivity.",
      link: "/contact",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "flip-down",
        bgimg:"/images/about/7.jpg",
      },
      {
        number: "06",
        icon: "/images/icons/icon.svg",
        title: "IT Consulting & Strategy",
        text: "Not sure where to start? Our tech experts help you choose the right tools and architecture to future-proof your product.",
      link: "/contact",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "flip-down",
        bgimg:"/images/about/8.jpg"
      },

  ];
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout>
        <Innerbanner
          subtt=""
          title=""
          description=""
          image="/images/abhi/5.jpg" />
          <ServiceCards services={services} />
        <Counter />
        <Testimonials />
        <CtaBlock />
      </Layout>
    </>
  );
}
