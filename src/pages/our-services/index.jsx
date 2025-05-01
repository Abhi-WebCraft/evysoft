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
import Key from '@/components/HomePage/Key/Key';
import Faq from '@/components/common/Faq';

export default function Home({referrer }) {
  console.log(referrer)
    const PageMeta = 
        {
        title: "web site ",
        description:"Discover International, your trusted education consultant in Dubai, offering test prep, tutoring & consulting for academic and career success.",
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
        
        
        const serviceData = [
          {   
              number:"1",
              image: "/images/icons/guidance-1.svg",
              title: " Expert Consultants",
              description:
                  "Our experienced consultants offer unmatched guidance, ensuring optimal academic and career decisions for a brighter future.",
              link: "#",
          },
          {
              number:"2",
              image: "/images/icons/approach.svg",
              title: "Customised Approach",
              description:
                  " We craft personalized solutions, addressing unique academic needs to unlock each student's full potential.",
              link: "#",
          },
          { 
              number:"3",
              image: "/images/icons/solution.svg",
              title: "Dynamic Solutions",
              description:
                  " We embrace innovative strategies to provide cutting-edge solutions, ensuring an exceptional and dynamic educational experience.",
              link: "#",
          },
          { 
              number:"4",
              image: "/images/icons/compliance.svg",
              title: "Accountability",
              description:
                  " We prioritize honest communication, accountability and clear processes, building trust and confidence at every step of your journey.",
              link: "#",
          },  
      ]; 

      const faqData=[
        {   
            number:"01",
            question: " What sets  International apart for engineering admissions?",
            answer: "We offer end-to-end, personalized services and have extensive experience guiding students to secure placements in top engineering programs worldwide.",
        },
        {   
            number:"02",
            question: " Can I apply to engineering colleges in multiple countries?",
            answer: "Yes, we specialize in managing multi-country applications and navigating varying requirements to maximize your options.",
        },
        {   
            number:"03",
            question: "Do you assist with specific engineering entrance exams?",
            answer: "Absolutely. We offer tailored preparation for exams such as SAT, ACT, GRE, and other relevant tests required by top engineering institutions.",
        },
        {   
            number:"04",
            question: "What if I’m unsure about which engineering field to choose?",
            answer: "Our academic counselors work with you to identify your strengths, interests, and career goals to recommend the best-fit engineering programs.",
        },
        {   
            number:"05",
            question: "Do you provide post-admission support?",
            answer: "Yes! We assist with visa applications, pre-departure preparation, and settling-in guidance to ensure a seamless transition to college life.",
        },
    
    ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
        <Innerbanner
            title="Our Services"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia fugiat neque quam ad in assumenda laudantium libero quod omnis aperiam hic laborum earum, inventore sequi temporibus, voluptas recusandae molestias?"
            image="/images/about-bg.jpg"/>
             <About
                    imageSrc="/images/about/video_shape_1.png"
                    subtitle="About Company"
                    title="We Grow Your Business With IT"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia fugiat neque quam ad in assumenda laudantium libero quod omnis aperiam hic laborum earum, inventore sequi temporibus, voluptas recusandae molestias"
                    aboutList={[
                      { image: "/images/icons/check.svg", text: "Certified Company" },
                      { image: "/images/icons/check.svg", text: "Expert Team" }
                    ]}
                    buttonTitle="Get Started"
                    buttonLink="/contact"
                  />
      {/* <Key services={serviceData}  subtitle="Key Differentiators" title="We're Your Reliable Education Consultants" /> */}
      <ServiceCards services={services} />
      <Faq faqs={faqData}/>
      <CtaBlock/>
    </Layout>
    </>
  );
}
