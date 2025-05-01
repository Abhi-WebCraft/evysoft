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
import WhyCards from '@/components/common/WhyCards';
import Newbanner from '@/components/HomePage/Newbanner';
import Faq from '@/components/common/Faq';
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

  const faqData = [
    {
      number: "01",
      question: " What sets  International apart for engineering admissions?",
      answer: "We offer end-to-end, personalized services and have extensive experience guiding students to secure placements in top engineering programs worldwide.",
    },
    {
      number: "02",
      question: " Can I apply to engineering colleges in multiple countries?",
      answer: "Yes, we specialize in managing multi-country applications and navigating varying requirements to maximize your options.",
    },
    {
      number: "03",
      question: "Do you assist with specific engineering entrance exams?",
      answer: "Absolutely. We offer tailored preparation for exams such as SAT, ACT, GRE, and other relevant tests required by top engineering institutions.",
    },
    {
      number: "04",
      question: "What if I’m unsure about which engineering field to choose?",
      answer: "Our academic counselors work with you to identify your strengths, interests, and career goals to recommend the best-fit engineering programs.",
    },
    {
      number: "05",
      question: "Do you provide post-admission support?",
      answer: "Yes! We assist with visa applications, pre-departure preparation, and settling-in guidance to ensure a seamless transition to college life.",
    },

  ];
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout>
        {/* <BannerSection/> */}
        <Newbanner />
        {/* <Absection/> */}
        <About  imageSrc="/images/home/about_1_1.png"
        subtitle="About Company"
        title="We Grow Your Business With IT"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia fugiat neque quam ad in assumenda laudantium libero quod omnis aperiam hic laborum earum, inventore sequi temporibus, voluptas recusandae molestias"
        aboutList={[
          { image: "/images/icons/check.svg", text: "Certified Company" },
          { image: "/images/icons/check.svg", text: "Expert Team" }
        ]}
        buttonTitle="Get Started"
        buttonLink="/contact"/>
        <ServiceCards services={services} />
        <div className='mb-[-50px]'>
          <WhyCards title="Website Development" subtitle="Web Site " content="" data={newdata} />
        </div>
        <Services />
        <Ourservices />
        <div className='pb-[100px]'>
          <Faq faqs={faqData} />
        </div>
        {/* <Contactus /> */}
        <CtaBlock />
      </Layout>
    </>
  );
}
