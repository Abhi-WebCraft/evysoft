import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import BannerSection from '@/components/HomePage/BannerSection/BannerSection';
import About from '@/components/HomePage/About/About';
import Slider from '@/components/HomePage/Slider';
import Services from '@/components/HomePage/Services';
export default function Home({referrer }) {
  console.log(referrer)
    const PageMeta = 
        {
        title: "web site ",
        description:"Discover Dar Aluloom International, your trusted education consultant in Dubai, offering test prep, tutoring & consulting for academic and career success.",
        keywords: "Global Education Consultants in UAE, Study Overseas or Abroad, Educational Consultants,  College Admissions, University Admissions Dubai UAE., Global Education Advisors in UAE,",
        }

  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
      <BannerSection/>
      <About/>
      <Slider/>
      <Services/>
      {/* <Key services={serviceData}  subtitle="Welcome to Web Dev World" title="Your guide to building beautiful and functional websites" /> */}
    </Layout>
    </>
  );
}
