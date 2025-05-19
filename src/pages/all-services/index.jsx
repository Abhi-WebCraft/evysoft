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

  // const pointsData = [
  //   {
  //     id: 1,
  //     imageSrc: "/images/services/service1.png",
  //     imageAlt: "Personalized Academic Counseling image",
  //     title: "Personalized Academic Counseling",
  //     description:
  //       "We assess your academic strengths, interests, and ambitions to recommend the best engineering programs tailored to your needs.",
  //     animationDuration: 400,
  //   },
  //   {
  //     id: 2,
  //     imageSrc: "/images/services/service2.png",
  //     imageAlt: "Application Support image",
  //     title: "Application Support",
  //     description:
  //       "From creating impactful personal statements to handling document submissions, we ensure your application shines among others.",
  //     animationDuration: 800,
  //   },
  //   {
  //     id: 3,
  //     imageSrc: "/images/services/service3.png",
  //     imageAlt: "Entrance Exam Preparation image",
  //     title: "Entrance Exam Preparation",
  //     description:
  //       "We provide focused coaching for standardized tests like IELTS, SAT, ACT, GRE, and country-specific engineering entrance exams, equipping you with the skills to succeed.",
  //     animationDuration: 1200,
  //   },
  //   {
  //     id: 4,
  //     imageSrc: "/images/services/service1.png",
  //     imageAlt: "Interview Coaching image",
  //     title: "Interview Coaching",
  //     description:
  //       "Engineering admissions often include interviews. We offer mock interviews and coaching to help you present yourself confidently and effectively.",
  //     animationDuration: 1600,
  //   },
  //   {
  //     id: 5,
  //     imageSrc: "/images/services/service2.png",
  //     imageAlt: "Guidance for International Students image",
  //     title: "Guidance for International Students",
  //     description:
  //       "If you're applying to engineering programs abroad, we support you with visa processing, accommodation arrangements, and adapting to your new academic environment.",
  //     animationDuration: 1600,
  //   },
  //   {
  //     id: 6,
  //     imageSrc: "/images/services/service3.png",
  //     imageAlt: "Scholarship and Financial Aid Assistance image",
  //     title: "Scholarship and Financial Aid Assistance",
  //     description:
  //       "We help you explore and apply for scholarships and funding opportunities, making your engineering education more affordable and accessible.",
  //     animationDuration: 1600,
  //   },

  // ];
  const servicesData = [
    {
      number: "01",
      title: "Web Development",
      text: "We build amazing websites.",
      icon: "/icons/web.svg",
      link: "/services/web-development",
      bgShape: "/shapes/bg1.png",
      animation: "fade-up", // optional
    },
    {
      number: "02",
      title: "App Design",
      text: "Beautiful and user-friendly apps.",
      icon: "/icons/app.svg",
      link: "/services/app-design",
      bgShape: "/shapes/bg2.png",
    },
    {
      number: "02",
      title: "App Design",
      text: "Beautiful and user-friendly apps.",
      icon: "/icons/app.svg",
      link: "/services/app-design",
      bgShape: "/shapes/bg2.png",
    },
    {
      number: "02",
      title: "App Design",
      text: "Beautiful and user-friendly apps.",
      icon: "/icons/app.svg",
      link: "/services/app-design",
      bgShape: "/shapes/bg2.png",
    },
    {
      number: "02",
      title: "App Design",
      text: "Beautiful and user-friendly apps.",
      icon: "/icons/app.svg",
      link: "/services/app-design",
      bgShape: "/shapes/bg2.png",
    },
    // Add more items as needed...
  ];

  const newdata = [
    {
      image: "/images/services/service2.png",
      icon: "/images/icons/icon.svg",
      title: "100% Compliance Guarantee",
      description: "Always on time, every time—no penalties.",
      link: "#",
    },
    {
      image: "/images/services/service2.png",
      icon: "/images/icons/icon.svg",
      title: "Real-Time, Accurate Data",
      description: "Always updated and error-free.",
      link: "#",
    },
    {
      image: "/images/services/service2.png",
      icon: "/images/icons/icon.svg",
      title: "Tailored Solutions",
      description: "Perfect for businesses of all sizes, from startups to enterprises.",
      link: "#",
    },
    {
      image: "/images/services/service2.png",
      icon: "/images/icons/icon.svg",
      title: "Secure & Confidential",
      description: "Your data is protected with advanced encryption and security.",
      link: "#",
    },
    {
      image: "/images/services/service2.png",
      icon: "/images/icons/icon.svg",
      title: "Expert Guidance",
      description: "Stay ahead of regulations with our experienced financial advisors.",
      link: "#",
    },
  ];
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
          image="/images/bg/service-bg.jpg"/>
           <ServiceCards services={services} />
        <Counter />
        <Testimonials />
        <CtaBlock />
      </Layout>
    </>
  );
}
