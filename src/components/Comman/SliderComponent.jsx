import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import Container from '../Layout/Container';  // Make sure this is correct
import SectionTitle from '../Layout/SectionTitle';  // Make sure this is correct
import 'swiper/css';
import 'swiper/css/navigation';
export default function SliderComponent() {
  const [Faqs, setFaqs] = useState([
    { 
      subTitle: 'TOEFL Preparation',
      title: 'Excel in English Language Mastery',
      description: 'BMAT is vital for students applying to biomedical courses. Our BMAT prep covers scientific knowledge, critical thinking, and written communication, helping you ace this challenging exam.'
    },
    { 
      subTitle: 'LNAT Preparation',
      title: 'Conquer Law School Admissions',
      description: 'LNAT is a unique test for aspiring law students. Our LNAT prep program sharpens your critical thinking and essay writing skills, giving you the edge needed to succeed in law school applications.'
    },
    { 
      subTitle: 'BMAT Preparation',
      title: 'Excel in Biomedical Admissions',
      description: 'BMAT is vital for students applying to biomedical courses. Our BMAT prep covers scientific knowledge, critical thinking, and written communication, helping you ace this challenging exam.'
    },
    { 
      subTitle: 'SAT Preparation',
      title: 'Unlock College Opportunities Worldwide',
      description: 'SAT is your gateway to global universities. Our SAT preparation in UAE program covers all sections—Math, Evidence-Based Reading, and Writing—ensuring you score your best. With expert tutors and extensive practice tests, you’ll be fully prepared for college admissions.'
    },
    { 
      subTitle: 'UCAT Preparation',
      title: 'Excel in Medical School Admissions',
      description: 'UCAT is crucial for aspiring medical students. Our UCAT prep focuses on developing critical thinking, decision-making, and situational judgment skills. We offer personalized coaching to help you tackle this challenging test with confidence.'
    },
    { 
      subTitle: 'IELTS Preparation',
      title: 'Master the English Language',
      description: 'IELTS assesses your English language proficiency for academic and immigration purposes. Our IELTS test preparation in UAE program hones your reading, writing, listening, and speaking skills, ensuring you achieve the band score you need.'
    },
    { 
      subTitle: 'GMAT Preparation',
      title: 'Take Charge of Your Business Career',
      description: 'For those pursuing an MBA, the GMAT is a critical step. Our GMAT prep covers all sections, including quantitative, verbal, and analytical writing. We provide targeted strategies to help you excel in this competitive exam.'
    },
    { 
      subTitle: 'GRE Preparation',
      title: 'Unlock Graduate School Success',
      description: 'GRE is essential for graduate school admissions. Our GRE prep focuses on building your verbal reasoning, quantitative reasoning, and analytical writing skills. With our expert guidance, you’ll be ready to achieve your academic goals.'
    },
    { 
      subTitle: 'PTE Preparation',
      title: 'Perfect Your English Proficiency',
      description: 'The PTE is a computer-based English language test. Our PTE prep program offers personalized coaching to enhance your reading, writing, listening, and speaking skills, ensuring top scores.'
    },
  ]);
  
  return (
    <section className='section bannerslider'>
      <Container>
        <div className='flex flex-col items-center justify-center text-center mb-6'>
          <SectionTitle subtitle="Dar Aluloom" title="International Test Prep Programs"/>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          {Faqs && Faqs.length >0 && Faqs.map((faq,j) =>(
            <SwiperSlide key={j}>
            <div className='  p-12 h-[350px] rounded-[20px]'  style={{boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
              }}>
                <span className='text-[#28aa4a] text-xl font-bold'>{faq.subTitle}</span>
                <h4 className='text-[25px]'>{faq.subTitle}</h4>
                <p>{faq.description}</p>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
