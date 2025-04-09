import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import About from "@/components/HomePage/About/About";
import InnerBannerDesign from "@/components/Common/InnerBannerDesign";
import Faq from "@/components/Common/Faq";
import Points from "@/components/Common/Points";
import WhyUs from "@/components/Common/WhyUs";
import CtaBlock from "@/components/HomePage/CtaBlock";
import ProgramsSlider from "@/components/Common/ProgramsSlider";
import OurEducational from "@/components/Comman/OurEducational";

export default function Home() {
    const PageMeta = 
        {
        title: "Test Preparation in UAE | Go Ahead with Dar Aluloom International",
        description:"Achieve academic excellence with our expert test preparation services in UAE, tailored to help you succeed in exams like SAT, IELTS, UCAT, and more."
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Test Prep in UAE", href: "/test-preparation-in-uae" },
      ];
      const aboutItems = [
      ];

      const faqData=[
        {   
            number:"01",
            question: "What test preparation programs does Dar Aluloom International offer?",
            answer: "At  Dar Aluloom International, we offer specialized test preparation programs for various international and UAE-specific exams. These include SAT, UCAT, IELTS,GMAT, GRE, PTE, TOEFL, LNAT, and BMAT.",
        },
        {   
            number:"02",
            question: "How does your SAT preparation program work?",
            answer: "Our SAT preparation program covers all sections—Math, Evidence-Based Reading, and Writing. We provide expert tutors, comprehensive study materials, and extensive practice tests to ensure you are fully prepared for college admissions.",
        },
        {   
            number:"03",
            question: "What makes your UCAT preparation program effective?",
            answer: "Our UCAT preparation focuses on developing the critical thinking, decision-making, and situational judgment skills needed to excel in medical school admissions. We offer personalized coaching tailored to each student's needs, enhancing their performance in this challenging test.",
        },
        {   
            number:"04",
            question: "How does Dar Aluloom International help students prepare for the IELTS exam?",
            answer: "Our IELTS preparation program hones your reading, writing, listening, and speaking skills through personalized coaching and practice tests. We ensure you achieve the band score required for academic or immigration purposes.",
        },
        {   
            number:"05",
            question: "What support do you offer for GMAT and GRE preparation?",
            answer: "For GMAT, we cover all sections, including quantitative, verbal, and analytical writing, providing strategies to excel in the exam. Our GRE prep focuses on verbal reasoning, quantitative reasoning, and analytical writing, ensuring you're fully prepared for graduate school admissions.",
        },
        {   
          number:"06",
          question: "How do you approach PTE and TOEFL preparation?",
          answer: "Our PTE and TOEFL prep programs are designed to enhance your English proficiency in reading, writing, listening, and speaking. With personalized coaching and practice tests, we ensure you achieve top scores in these exams",
      },
      {   
        number:"07",
        question: "What sets your LNAT and BMAT preparation apart?",
        answer: "Our LNAT prep sharpens your critical thinking and essay-writing skills, crucial for law school admissions. The BMAT prep covers scientific knowledge, critical thinking, and written communication, helping you excel in biomedical admissions.",
    },
    {   
      number:"08",
      question: "Why should I choose Dar Aluloom International for my test preparation needs?",
      answer: "We offer comprehensive coaching, personalized assistance, and extensive resources tailored to your unique needs. With our localized focus on the UAE education system, we provide specialized prep for both international and UAE-based tests.",
    },
    {   
      number:"09",
      question: "How do I enroll in one of your test preparation programs?",
      answer: "You can enrol by contacting us directly through our website or by phone. Our team will guide you through the process and help you choose the program that best fits your needs.",
  },
  {   
    number:"10",
    question: "Do you offer online test preparation options?",
    answer: "Yes, we offer both in-person and online test preparation programs to accommodate students with different preferences and schedules. Our online programs are just as comprehensive and effective as our in-person sessions.",
  },
  {   
    number:"11",
    question: "How long does it take to complete a test preparation program?",
    answer: "The duration of each program varies depending on the test and the student's starting level. Typically, programs range from a few weeks to several months. We tailor the schedule to meet your needs and ensure you're fully prepared by the exam date.",
  },
  {   
    number:"12",
    question: "What resources do you provide to help students succeed?",
    answer: "We offer a wide range of resources, including practice tests, study guides, and access to expert tutors. Our goal is to equip you with everything you need to succeed in your exams.",
  },
  {   
    number:"13",
    question: "Can you help with test anxiety and exam strategies?",
    answer: "Absolutely! In addition to academic preparation, we offer guidance on managing test anxiety and developing effective exam strategies. Our goal is to build your confidence and ensure you're mentally prepared for test day.",
  },
  {   
    number:"14",
    question: "Can I get a free consultation before enrolling in a program?",
    answer: "Yes, we offer free consultations to help you understand our programs and determine what best suits your needs. Reach out to us to schedule a consultation today.",
  },
    
    ];

    const whyusData = [
      {
        title:"Comprehensive Coaching",
        description:"We offer in-depth preparation for a wide range of tests, ensuring you master every section.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Personalized Assistance",
        description:"Our experienced instructors tailor lessons to your unique needs, maximizing your chances of success.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Extensive Resources",
        description:"From practice tests to study materials, we provide everything you need to excel.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Localized Focus",
        description:"We understand the UAE education system and offer specialized prep for UAE-based tests.",
        image:"/images/icons/guidance.svg",
      },
    ];

    const slidesData = [
      { 
        subtitle:"GMAT Preparation",
        title: "Take Charge of Your Business Career",
        description: "For those pursuing an MBA, the GMAT is a critical step. Our GMAT prep covers all sections, including quantitative, verbal, and analytical writing. We provide targeted strategies to help you excel in this competitive exam.",
        imageUrl: "/images/icons/open-book.svg",
      },
      { 
        subtitle:"GRE Preparation",
        title: "Unlock Graduate School Success",
        description: "The PTE is a computer-based English language test. Our PTE prep program offers personalized coaching to enhance your reading, writing, listening, and speaking skills, ensuring top scores.",
        imageUrl: "/images/icons/open-book.svg",
      },
      { 
        subtitle:"PTE Preparation",
        title: "Perfect Your English Proficiency",
        description: "The TOEFL is another key test for English proficiency. Our TOEFL prep ensures you develop the language skills needed to succeed in academic settings and achieve your desired score.",
        imageUrl: "/images/icons/open-book.svg",
      },
      { 
        subtitle:"TOEFL Preparation",
        title: "Excel in English Language Mastery",
        description: "The TOEFL is another key test for English proficiency. Our TOEFL prep ensures you develop the language skills needed to succeed in academic settings and achieve your desired score.",
        imageUrl: "/images/icons/open-book.svg",
      },
      { 
        subtitle:"LNAT Preparation",
        title: "Conquer Law School Admissions",
        description: "LNAT is a unique test for aspiring law students. Our LNAT prep program sharpens your critical thinking and essay writing skills, giving you the edge needed to succeed in law school applications.",
        imageUrl: "/images/icons/open-book.svg",
      },
      { 
        subtitle:"BMAT Preparation",
        title: "Excel in Biomedical Admissions",
        description: "BMAT is vital for students applying to biomedical courses. Our BMAT prep covers scientific knowledge, critical thinking, and written communication, helping you ace this challenging exam.",
        imageUrl: "/images/icons/open-book.svg",
      },
      { 
        subtitle:"SAT Preparation",
        title: "Unlock College Opportunities Worldwide",
        description: "SAT is your gateway to global universities. Our SAT preparation in UAE  program covers all sections—Math, Evidence-Based Reading, and Writing—ensuring you score your best. With expert tutors and extensive practice tests, you’ll be fully prepared for college admissions.",
        imageUrl: "/images/icons/open-book.svg",
      },
      { 
        subtitle:"UCAT Preparation",
        title: "Excel in Medical School Admissions",
        description: "UCAT is crucial for aspiring medical students. Our UCAT prep focuses on developing critical thinking, decision-making, and situational judgment skills. We offer personalized coaching to help you tackle this challenging test with confidence.",
        imageUrl: "/images/icons/open-book.svg",
      },
      { 
        subtitle:"IELTS Preparation",
        title: "Master the English Language",
        description: "IELTS assesses your English language proficiency for academic and immigration purposes. Our IELTS test preparation in UAE program hones your reading, writing, listening, and speaking skills, ensuring you achieve the band score you need.",
        imageUrl: "/images/icons/open-book.svg",
      },
    
    ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
      <Layout>
      <InnerBannerDesign
        title="Test Prep in UAE" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/college-1.png"
    />
       <OurEducational
          subtitle="Dar Aluloom International" 
          title="Your Gateway to UAE Test Prep Success" 
          paradescription="At Dar Aluloom International, we believe in empowering students to reach their highest academic potential. Our specialised test preparation in UAE are designed to equip you with the skills, strategies, and confidence needed to excel in your exams. Whether you’re aiming for international exams or UAE-specific tests, we’ve covered you with personalised coaching, comprehensive resources, and expert guidance."
          aboutItems={aboutItems} 
          imageSrc="/images/service/test-prep.png" 
          button={true}
        />
       <ProgramsSlider programSlides={slidesData} title="International Test Prep Programs"/>
       <CtaBlock/>
        <WhyUs whyus={whyusData} title="Why Choose Us"/>
        
        <Faq faqs={faqData}/>
      </Layout>
    </>
  );
}