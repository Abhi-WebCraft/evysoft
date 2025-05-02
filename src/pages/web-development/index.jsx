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
import Container from '@/components/Layout/Container';
import Image from 'next/image';
import Faq from '@/components/common/Faq';

export default function Home({ referrer }) {
  console.log(referrer)
  const PageMeta =
  {
    title: "web site ",
    description: "Discover International, your trusted education consultant in Dubai, offering test prep, tutoring & consulting for academic and career success.",
    keywords: "Global Education Consultants in UAE, Study Overseas or Abroad, Educational Consultants,  College Admissions, University Admissions Dubai UAE., Global Education Advisors in UAE,",
  }
  const faqData = [
    {
      number: "01",
      question: "Where can I get analytics help?",
      answer: "Synergistically evisculate ubiquitous niches whereas holistic resources. Assertively evolve prospective methods of empowerment before diverse web-readiness. Seamlessly incentivize market-driven schemas rather than clicks-and-mortar benefits.",
    },
    {
      number: "02",
      question: "How long should a business plan be?",
      answer: "Synergistically evisculate ubiquitous niches whereas holistic resources. Assertively evolve prospective methods of empowerment before diverse web-readiness. Seamlessly incentivize market-driven schemas rather than clicks-and-mortar benefits.",
    },
    {
      number: "03",
      question: "How To Choose A Good QA Consultant?",
      answer: "Synergistically evisculate ubiquitous niches whereas holistic resources. Assertively evolve prospective methods of empowerment before diverse web-readiness. Seamlessly incentivize market-driven schemas rather than clicks-and-mortar benefits.",
    },
  ];
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout>
        <Innerbanner
          title="Web Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia fugiat neque quam ad in assumenda laudantium libero quod omnis aperiam hic laborum earum, inventore sequi temporibus, voluptas recusandae molestias?"
          image="/images/about-bg.jpg" />

        <section className='section'>
          <Container>
            <div className='grid lg:grid-cols-12 gap-8'>
              <div className=' lg:col-span-8 space-y-10'>
                <Image src="/images/about/service_details.jpg" width={500} height={500} alt='' className='w-full object-cover' />
                <div className='space-y-4'>
                  <h3 className=' text-[32px] lg:text-[52px]'>Web Development</h3>
                  <p className='text-[#7A7A7A]'>Globally optimize highly efficient solution whereas open-source application. Completely strategize quality internal or “organic” sources for virtual e-business. Phosfluorescently re-engineer enterprise markets via value-added networks. Seamlessly restore inexpensive e-markets vis-a-vis corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic.</p>
                  <p className='text-[#7A7A7A]'>Authoritatively scale business meta-services before client-based technologies. Collaboratively strategize synergistic scenarios rather than flexible action items. Continually deliver market positioning convergence and mission-critical infrastructures.</p>
                  <div className='grid lg:grid-cols-2 gap-8'>
                    <div>
                      <Image src="/images/about/service_inner_1.jpg" width={500} height={500} alt='' className='w-full object-cover' />
                    </div>
                    <div>
                      <h4 className='text-[24px] lg:text-[32px]'>We Serve The Best Work</h4>
                      <div className='flex gap-6 items-center  mt-[12px]'>
                        <Image src="/images/icons/check-mark.svg" alt='' width={50} height={50} className='w-[40px] h-[40px] bg-[#684DF4] p-2' />
                        <p className='text-[20px] font-bold'>Up am intention on dependent questions</p>
                      </div>
                      <div className='flex gap-6 items-center  mt-[12px]'>
                        <Image src="/images/icons/check-mark.svg" alt='' width={50} height={50} className='w-[40px] h-[40px] bg-[#684DF4] p-2' />
                        <p className='text-[20px] font-bold'>Surrounded affronting favourable</p>
                      </div>
                      <div className='flex gap-6 items-center  mt-[12px]'>
                        <Image src="/images/icons/check-mark.svg" alt='' width={50} height={50} className='w-[40px] h-[40px] bg-[#684DF4] p-2' />
                        <p className='text-[20px] font-bold'>Sed ut perspiciatis unde omnis iste natus</p>
                      </div>
                      <div className='flex gap-6 items-center  mt-[12px]'>
                        <Image src="/images/icons/check-mark.svg" alt='' width={50} height={50} className='w-[40px] h-[40px] bg-[#684DF4] p-2' />
                        <p className='text-[20px] font-bold'>Special Careness Risk Free</p>
                      </div>
                      <div className='flex gap-6 items-center  mt-[12px]'>
                        <Image src="/images/icons/check-mark.svg" alt='' width={50} height={50} className='w-[40px] h-[40px] bg-[#684DF4] p-2' />
                        <p className='text-[20px] font-bold'>Bibend auctor nisi elit volume are beguiled</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid lg:grid-cols-2 gap-8 mt-[30px]'>
                  <div className='border shadow-lg rounded-lg flex items-center gap-3 px-3 py-5'>
                    <Image src="/images/icons/solution.svg" alt='' width={50} height={50} className='w-20 p-3 bg-[#684df4] rounded-lg shadow-2xl' />
                    <div className=''>
                      <h3>Flexible Solutions</h3>
                      <p className='text-[#737887]'>Completely grow multimedia based content before global scenarios.</p>
                    </div>
                  </div>
                  <div className='border shadow-lg rounded-lg flex items-center gap-3 px-3 py-5'>
                    <Image src="/images/icons/customer-service.svg" alt='' width={50} height={50} className='w-20 p-3 bg-[#684df4] rounded-lg shadow-2xl' />
                    <div className=''>
                      <h3>24/7 Unlimited Support</h3>
                      <p className='text-[#737887]'>Completely grow multimedia based content before global scenarios.</p>
                    </div>
                  </div>
                </div>
                <Faq title="Questions About Service" faqs={faqData} />
              </div>
              <div className=' lg:col-span-4 border p-3 px-[40px] h-[580px] flex flex-col  justify-center  bg-[#f2f2f2]'>
                <div className='bg-[#fff] flex gap-6 p-[8px] items-center group  hover:bg-[#684df4]   justify-center rounded-lg'>
                  <span className='text-[20px] font-[600] group-hover:text-[#fff]'>Web Development</span>
                  <Image src="/images/icons/arrows.svg" alt='' width={50} height={50} className='w-[60px] h-[60px]' />
                </div>
                <div className='bg-[#fff] flex gap-6 p-[8px] items-center mt-[30px] group hover:bg-[#684df4] justify-center rounded-lg'>
                  <span className='text-[20px] font-[600] group-hover:text-[#fff]'>Business Development</span>
                  <Image src="/images/icons/arrows.svg" alt='' width={50} height={50} className='w-[60px] h-[60px]' />
                </div>
                <div className='bg-[#fff] flex gap-6 p-[8px] items-center mt-[30px] group hover:bg-[#684df4] justify-center rounded-lg'>
                  <span className='text-[20px] font-[600] group-hover:text-[#fff]'>Product Management</span>
                  <Image src="/images/icons/arrows.svg" alt='' width={50} height={50} className='w-[60px] h-[60px]' />
                </div>
                <div className='bg-[#fff] flex gap-6 p-[8px] items-center mt-[30px] group hover:bg-[#684df4] justify-center rounded-lg'>
                  <span className='text-[20px] font-[600] group-hover:text-[#fff]'>UI/UX Design</span>
                  <Image src="/images/icons/arrows.svg" alt='' width={50} height={50} className='w-[60px] h-[60px]' />
                </div>
                <div className='bg-[#fff] flex gap-6 p-[8px] items-center mt-[30px] group hover:bg-[#684df4] justify-center rounded-lg'>
                  <span className='text-[20px] font-[600] group-hover:text-[#fff]'>Cloud services</span>
                  <Image src="/images/icons/arrows.svg" alt='' width={50} height={50} className='w-[60px] h-[60px]' />
                </div>
              </div>
            </div>
          </Container>
        </section>
        <CtaBlock />
      </Layout>
    </>
  );
}
