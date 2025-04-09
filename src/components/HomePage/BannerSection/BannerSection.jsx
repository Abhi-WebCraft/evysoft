import Container from '@/components/Layout/Container';
import React from 'react';
import styles from "@/components/HomePage/BannerSection/BannerSection.module.css"
import Btn from '@/components/Layout/Btns/Btn';

export default function App() {
 
  return (
   <>
   <section className={styles.banner}>
      <Container>
        <div className='grid lg:grid-cols-12 '>
          <div className='flex  flex-col items-start justify-center col-span-9'>
              <h1 className={styles.hero_title }>Seamless IT Solutions for <span>business</span> growth</h1>
              <p className={styles.hero_text }>Unleash the full portential of rapid data analysis. Empowering timely decision-making and driving business exellence</p>
              <div >
                <Btn title="Get Start a Project" link="#"/>
              </div>
          </div>
          <div className='col-span-3'>

          </div>
        </div>
      </Container>
   </section>
   </>
  );
}
