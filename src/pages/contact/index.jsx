import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Innerbanner from '@/components/common/Innerbanner';
import Contactus from '@/components/common/Contactus';
import Container from '@/components/Layout/Container';
import Image from 'next/image';
export default function  Home({referrer }) {
  console.log(referrer)
    const PageMeta = 
        {
        title: "web site ",
        description:"Discover International, your trusted education consultant in Dubai, offering test prep, tutoring & consulting for academic and career success.",
        keywords: "Global Education Consultants in UAE, Study Overseas or Abroad, Educational Consultants,  College Admissions, University Admissions Dubai UAE., Global Education Advisors in UAE,",
        }
        
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
        <Innerbanner
            title=""
            description=""
            image="/images/from/6.jpg"/>  
            
       <Contactus/>
        <section className='section'>
            <Container>
              <div className='grid lg:grid-cols-3 gap-8'>
                <div className='border shadow-lg rounded-lg flex items-center gap-3 p-3'>
                    <Image src="/images/icons/maps-and-flags.svg" alt='' width={50} height={50} className='w-20 p-3 bg-[#684df4] rounded-lg shadow-2xl' />
                    <div className=''>
                        <h3>Our Office Address</h3>
                        <p className='text-[#737887]'>A-40 A, Extension, Industrial Focal Point, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160059, India</p>
                    </div>
                </div>
                <div className='border shadow-lg rounded-lg flex items-center gap-3 p-3'>
                    <Image src="/images/icons/call.svg" alt='' width={50} height={50} className='w-20 p-3 bg-[#684df4] rounded-lg shadow-2xl' />
                    <div className=''>
                        <h3>Call Us Anytime</h3>
                        <p className='text-[#737887]'>(+91) 8847540817</p>
                    </div>
                </div>
                <div className='border shadow-lg rounded-lg flex items-center gap-3 p-3'>
                    <Image src="/images/icons/email.svg" alt='' width={50} height={50} className='w-20 p-3 bg-[#684df4] rounded-lg shadow-2xl' />
                    <div className=''>
                        <h3>Send An Email</h3>
                        <p className='text-[#737887]'>evysoft13@gmail.com</p>
                    </div>
                </div>
              </div>
            </Container>
        </section>
    </Layout>
    </>
  );
}
