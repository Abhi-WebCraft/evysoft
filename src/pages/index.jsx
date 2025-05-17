import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import BannerSection from '@/components/HomePage/BannerSection/BannerSection';
import About from '@/components/HomePage/About/About';
import Ourservices from '@/components/HomePage/Ourservices';
import ServiceCards from '@/components/common/ServiceCard';
import CtaBlock from '@/components/HomePage/CtaBlock';
import WhyCards from '@/components/common/WhyCards';
import Newbanner from '@/components/HomePage/Newbanner';
import Faq from '@/components/common/Faq';
import Testimonials from '@/components/common/Testimonials';
import BannerSection1 from '@/components/HomePage/BannerSection1/BannerSection/BannerSection1';
import IndustriesWeServe from '@/components/common/IndustriesWeServe/IndustriesWeServe';
export default function Home({ referrer }) {
  console.log(referrer)
  const PageMeta =
  {
    title: "EvySoft | Smart & Scalable Software Solutions",
    description: "EvySoft is a forward-thinking software company delivering tailored solutions for startups and businesses. Web apps, mobile apps, and digital transformation — all in one place.",
    keywords: "EvySoft, software development, web development, mobile app development, custom software solutions, UI UX design, digital transformation, tech startup solutions, scalable applications, enterprise software, SaaS development, business automation, IT consulting, cloud solutions, next.js development"
  }
  const services = [
      {
        number: "01",
        icon: "/images/icons/icon.svg",
        title: "Custom Software Development",
        text: "We build scalable, secure, and high-performance software tailored to your unique needs — from simple tools to complex platforms.",
        link: "#",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "fade-up-right",
        bgimg:"/images/about/3.jpg"
      },
      {
        number: "02",
        icon: "/images/icons/icon.svg",
        title: "Web Application Development",
        text: "Using modern frameworks like Next.js and React, we create responsive, fast, and user-friendly web apps optimized for performance and SEO.",
      link: "#",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "flip-down",
        bgimg:"/images/about/4.jpg"
      },
      {
        number: "03",
        icon: "/images/icons/icon.svg",
        title: "Mobile App Development",
        text: "We develop cross-platform mobile apps for iOS and Android that deliver great user experiences and business value.",
      link: "#",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "fade-up-left",
        bgimg:"/images/about/5.jpg"
      },
      {
        number: "04",
        icon: "/images/icons/icon.svg",
        title: "Artificial Intelligence",
        text: "AI enables businesses to lean into the power of data and insights to  enable better responsiveness and decision-making to reimagine operations, experiences, and products.",
      link: "#",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "fade-up-right",
        bgimg:"/images/about/6.jpg"
      },
      {
        number: "05",
        icon: "/images/icons/icon.svg",
        title: " Process Automation",
        text: "Process Automation is the use of technology to perform repetitive, rule-based tasks and workflows without human intervention. It helps businesses improve efficiency, reduce errors, cut costs, and increase productivity.",
      link: "#",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "flip-down",
        bgimg:"/images/about/7.jpg",
      },
      {
        number: "06",
        icon: "/images/icons/icon.svg",
        title: "IT Consulting & Strategy",
        text: "Not sure where to start? Our tech experts help you choose the right tools and architecture to future-proof your product.",
      link: "#",
        bgShape: "/images/home/service_card_bg.webp",
        animation: "flip-down",
        bgimg:"/images/about/8.jpg"
      },

  ];

  const newdata = [
    {
      image: "/images/about/project_6_1.jpg",
      // icon: "/images/icons/icon.svg",
      // title: "100% Compliance Guarantee",
      // description: "Always on time, every time—no penalties.",
      // link: "#",
    },
    {
      image: "/images/about/project_6_2.jpg",
      // icon: "/images/icons/icon.svg",
      // title: "Real-Time, Accurate Data",
      // description: "Always updated and error-free.",
      // link: "#",
    },
    {
      image: "/images/about/project_12_1.jpg",
      // icon: "/images/icons/icon.svg",
      // title: "Tailored Solutions",
      // description: "Perfect for businesses of all sizes, from startups to enterprises.",
      // link: "#",
    },
    {
      image: "/images/about/project_12_1.jpg",
      // icon: "/images/icons/icon.svg",
      // title: "Expert Guidance",
      // description: "Stay ahead of regulations with our experienced financial advisors.",
      // link: "#",
    },
  ];

  const faqData = [
    {
      number: "01",
      question: "What services does EvySoft offer?",
      answer: "We specialize in custom software development, web and mobile application development, UI/UX design, cloud solutions, business automation, IT consulting, and more. Our goal is to provide end-to-end digital solutions tailored to your business needs.",
    },
    {
      number: "02",
      question: "How long does it take to develop a custom software solution?",
      answer: "The timeline for a custom software solution varies depending on the complexity of the project. Typically, it ranges from a few weeks for smaller apps to several months for more complex, enterprise-level platforms. We work with you to define a clear timeline and milestones for your project.",
    },
    {
      number: "03",
      question: " What technologies does EvySoft use?",
      answer: "We use modern technologies like React, Next.js, Node.js, Flutter, Angular, Tailwind CSS, and AWS for web and mobile app development. We ensure the best fit for your project needs and business goals.",
    },
    {
      number: "04",
      question: " Can you help with my existing software or project?",
      answer: "Absolutely! We provide ongoing maintenance, updates, and improvements for existing applications. Whether you're looking for bug fixes, performance optimization, or new features, our team is here to help.",
    },
    {
      number: "05",
      question: "How do you ensure the security of my project?",
      answer: "We take security seriously. Our development processes follow the best security practices, including data encryption, secure coding standards, and regular security audits. Additionally, we implement robust testing to ensure your product is secure before launch.",
    },
    {
      number: "06",
      question: "How can I get started with EvySoft?",
      answer: "Simply contact us through the [Contact Us] page, and one of our experts will reach out to discuss your project. We offer free consultations to understand your needs and offer the best solution.",
    },

  ];
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout>
        {/* <BannerSection/> */}
        {/* <Newbanner /> */}
        <BannerSection1/>
        {/* <Absection/> */}
        <About imageSrc="/images/about/9.jpg"
          subtitle=""
          title="Empowering Businesses with Smart Technology"
          description="EvySoft is a forward-thinking software company that builds scalable, custom digital solutions for startups, enterprises, and entrepreneurs. From web and mobile apps to cloud platforms and UI/UX design, we combine innovation with reliability to turn your ideas into reality."
          aboutList={[
            { image: "/images/icons/check.svg", text: "Expert Teams" },
            { image: "/images/icons/check.svg", text: "Agile Development" },
            { image: "/images/icons/check.svg", text: "100% Client-Focused" },
          ]}
          buttonTitle="Get Started"
          buttonLink="/contact" />
        <ServiceCards services={services} />
        <IndustriesWeServe/>
        {/* <Services /> */}
        <Ourservices />
        <div className='mb-[-50px]'>
          <WhyCards title="All  Clients" subtitle=" " content="" data={newdata} />
        </div>
        <div className='py-[100px]'>
          <Faq subtitile="" title="Frequently Asked Questions" faqs={faqData} />
        </div>
        <Testimonials/>
        {/* <Contactus /> */}
        <CtaBlock />
      </Layout>
    </>
  );
}
