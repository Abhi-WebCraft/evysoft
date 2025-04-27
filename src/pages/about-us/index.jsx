import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import About from '@/components/HomePage/About/About';
import CtaBlock from '@/components/HomePage/CtaBlock';
import Innerbanner from '@/components/common/Innerbanner';
import ThreeCards from '@/components/common/ThreeCards';
import Ourservice from '@/components/common/OurService/OurService';
import Counter from '@/components/common/Counter';
import Points from '@/components/common/Points';

export default function Home({referrer }) {
  console.log(referrer)
    const PageMeta = 
        {
        title: "web site ",
        description:"Discover Dar Aluloom International, your trusted education consultant in Dubai, offering test prep, tutoring & consulting for academic and career success.",
        keywords: "Global Education Consultants in UAE, Study Overseas or Abroad, Educational Consultants,  College Admissions, University Admissions Dubai UAE., Global Education Advisors in UAE,",
        }
        
        const pointsData = [
          {
            id: 1,
            imageSrc: "/images/services/service1.png",
            imageAlt: "Personalized Academic Counseling image",
            title: "Personalized Academic Counseling",
            description:
              "We assess your academic strengths, interests, and ambitions to recommend the best engineering programs tailored to your needs.",
            animationDuration: 400,
          },
          {
            id: 2,
            imageSrc: "/images/services/service2.png",
            imageAlt: "Application Support image",
            title: "Application Support",
            description:
              "From creating impactful personal statements to handling document submissions, we ensure your application shines among others.",
            animationDuration: 800,
          },
          {
            id: 3,
            imageSrc: "/images/services/service3.png",
            imageAlt: "Entrance Exam Preparation image",
            title: "Entrance Exam Preparation",
            description:
              "We provide focused coaching for standardized tests like IELTS, SAT, ACT, GRE, and country-specific engineering entrance exams, equipping you with the skills to succeed.",
            animationDuration: 1200,
          },
          {
              id: 4,
              imageSrc: "/images/services/service1.png",
              imageAlt: "Interview Coaching image",
              title: "Interview Coaching",
              description:
                "Engineering admissions often include interviews. We offer mock interviews and coaching to help you present yourself confidently and effectively.",
              animationDuration: 1600,
            },
            {
              id: 5,
              imageSrc: "/images/services/service2.png",
              imageAlt: "Guidance for International Students image",
              title: "Guidance for International Students",
              description:
                "If you're applying to engineering programs abroad, we support you with visa processing, accommodation arrangements, and adapting to your new academic environment.",
              animationDuration: 1600,
            },
            {
              id: 6,
              imageSrc: "/images/services/service3.png",
              imageAlt: "Scholarship and Financial Aid Assistance image",
              title: "Scholarship and Financial Aid Assistance",
              description:
                "We help you explore and apply for scholarships and funding opportunities, making your engineering education more affordable and accessible.",
              animationDuration: 1600,
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
      {/* <ThreeCards/> */}
      <Ourservice/>
      <Counter/>
      <Points points={pointsData} title="What We Do" description="At Dar Aluloom International, we offer specialized services to help aspiring engineers reach their academic and career goals. Here's how we assist:"/>
      <CtaBlock/>
    </Layout>
    </>
  );
}
