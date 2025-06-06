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

export default function Home({ referrer }) {
  console.log(referrer)
  const PageMeta =
  {
    title: "web site ",
    description: "Discover International, your trusted education consultant in Dubai, offering test prep, tutoring & consulting for academic and career success.",
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
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout>
        <Innerbanner
          subtt=""
          title=""
          description=""
          image="/images/abhi/5.jpg" />
          <section className='section mb-[100px]  bg-[#f5fbfb]'>
            <Container>
              <div className='space-y-3'>
                <SectionTitle title="About Us" content=""/>
                <p className='text-[22px]'>Evysoft is a forward-thinking IT solutions company founded in 2018 with a mission to help businesses harness the power of technology. Since our inception, we’ve been committed to delivering innovative, scalable, and cost-effective digital solutions that drive real results.</p>
                <p className='text-[22px]'>With a team of passionate developers, designers, and technology strategists, we specialize in custom software development, web and mobile applications, cloud integration, and IT consulting. </p>
                <p className='text-[22px]'>Our goal is to empower organizations of all sizes to stay ahead in a rapidly evolving digital landscape</p>
                <p className='text-[22px]'>At Evysoft, we believe that great technology is built on trust, collaboration, and a deep understanding of our clients' needs. Whether you're a startup looking to launch your first app or an enterprise in need of complex system integration, we bring the expertise and dedication to turn your ideas into reality.</p>
                <h4 className='text-[28px]'>Our Core Values:</h4>
             <ul className="list-disc list-inside">
                <li className="text-[22px]">Innovation-Driven</li>
                <li className="text-[22px]">Quality-Focused</li>
                <li className="text-[22px]">Customer-Centric</li>
                <li className="text-[22px]">Transparent & Reliable</li>
               </ul>
               <p className="text-[22px]">Let’s build something extraordinary—together.</p>
              </div>
            </Container>
          </section>
        {/* <About
          imageSrc="/images/about/faq_1_1.png"
          subtitle="About Us"
          title="Who We Are"
          description="At Evysoft, we’re more than a tech company — we’re your digital growth partner. We combine creativity, technical expertise, and business insight to deliver solutions that drive real results. Our team is committed to building software that works seamlessly and scales effortlessly."
          aboutList={[
            { image: "/images/icons/check.svg", text: "Human-Centered Design: We build solutions with your users in mind, ensuring intuitive and engaging experiences." },
            { image: "/images/icons/check.svg", text: "End-to-End Expertise: From planning to deployment, we cover the entire digital product lifecycle." },
             { image: "/images/icons/check.svg", text: "Results-Driven Approach: Your goals shape our strategy — we focus on measurable outcomes and long-term success." }
          ]}
          buttonTitle="Get Started"
          buttonLink="/contact"
        />
        <WhyCards title="Get to Know Evysoft" subtitle="" content="From our roots in innovation to our passion for creating meaningful digital solutions, Evysoft is built on a foundation of expertise, creativity, and trust. Slide through our story to discover what makes us different — and why we’re the right partner for your next big idea." data={newdata} /> */}
        <Counter />
        {/* <div className='mt-[-100px]'>
          <Points points={pointsData} title="What We Do" description="At International, we offer specialized services to help aspiring engineers reach their academic and career goals. Here's how we assist:" />
        </div> */}
        <Testimonials />
        <CtaBlock />
      </Layout>
    </>
  );
}
