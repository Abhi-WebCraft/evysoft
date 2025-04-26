import Container from '@/components/Layout/Container';
import React from 'react';
import styles from "@/components/HomePage/BannerSection/BannerSection.module.css"
import Btn from '@/components/Layout/Btns/Btn';
import Image from 'next/image';

export default function App() {
 
  return (
   <>
   <section className={styles.banner}>
    {/* <div className=" absolute top-0 inset-0">
    <Image src="/images/home/hero_bg_3.png" alt="" width={500} height={500} className=" w-full  object-cover"/>
    </div> */}
      <Container>
        <div className='grid lg:grid-cols-12 '>
          <div className='flex  flex-col items-start justify-center col-span-12 lg:col-span-9 ' data-aos="fade-right">
              <h1 className={styles.hero_title }>Seamless IT Solutions for <span>business</span> growth</h1>
              <p className={styles.hero_text }>Unleash the full portential of rapid data analysis. Empowering timely decision-making and driving business exellence</p>
              <div >
                <Btn title="Get Start a Project" link="#"/>
              </div>
          </div>
          <div className='col-span-0 lg:col-span-3'>

          </div>
        </div>
      </Container>
   </section>
   </>
  );
}
