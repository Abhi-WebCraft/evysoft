import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Section from '@/components/Layout/Section';
import Container from '@/components/Layout/Container';
import Banner from '@/components/Containers/Home/Banner';
import HolidayPackages from '@/components/Containers/Home/HolidayPackages';
import BannerSection from '@/components/HomePage/BannerSection/BannerSection';
import Key from '@/components/HomePage/Key/Key';
import About from '@/components/HomePage/About/About';
import OurService from '@/components/HomePage/OurService/OurService';
import Counter from '@/components/HomePage/Counter';
import CtaBlock from '@/components/HomePage/CtaBlock';
import Testimonials from '@/components/Common/Testimonials';
// import Form from '@/components/Common/Form';

export default function Home({referrer }) {
  console.log(referrer)
    const PageMeta = 
        {
        title: "web site ",
        description:"Discover Dar Aluloom International, your trusted education consultant in Dubai, offering test prep, tutoring & consulting for academic and career success.",
        keywords: "Global Education Consultants in UAE, Study Overseas or Abroad, Educational Consultants,  College Admissions, University Admissions Dubai UAE., Global Education Advisors in UAE,",
        }

    const serviceData = [
      {   
          number:"1",
          image: "/images/abhi/html.svg",
          title: "HTML Basics",
          description:
              "HTML (HyperText Markup Language) is the backbone of any website. It structures the content, allowing browsers to display text, images, and links properly.",
          link: "#",
      },
      {
          number:"2",
          image: "/images/abhi/style-sheet.svg",
          title: "CSS Styling",
          description:
              " CSS (Cascading Style Sheets) adds style to your HTML content. From colors to layout, it controls how your website looks on different devices.",
          link: "#",
      },
      { 
          number:"3",
          image: "/images/abhi/javascript.svg",
          title: "JavaScript Power",
          description:
              "JavaScript adds interactivity to your site. Whether it's dropdowns, pop-ups, or animations, JavaScript makes the site dynamic and engaging.",
          link: "#",
      },
      { 
          number:"4",
          image: "/images/abhi/cross-platform.svg",
          title: "Responsive Design",
          description:
              "With responsive design, your website adjusts gracefully to different screen sizes. It’s essential for providing a good experience on both phones and desktops.",
          link: "#",
      },  
  ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
      <BannerSection/>
      <OurService/>
      <Counter/>
      <About/>
      <CtaBlock/>
      <Key services={serviceData}  subtitle="Welcome to Web Dev World" title="Your guide to building beautiful and functional websites" />
      <Testimonials/>
      {/* <Form/> */}
    </Layout>
    </>
  );
}
