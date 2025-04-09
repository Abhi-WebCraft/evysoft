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
        title: "E Commerce, Dubai - Daraluloom",
        description:"Get expert guidance and support from Daraluloom, your trusted College Admissions Consultant UAE, Dubai. Secure your spot at the best universities now!"
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "E Commerce", href: "/e-commerce" },
      ];
      const aboutItems = [
        { image: "/images/icons/check.svg", text: "Product Variety" },
        { image: "/images/icons/check.svg", text: "Product Variety Comparison Convenience" },
        { image: "/images/icons/check.svg", text: "Expedited Shipping" },
        { image: "/images/icons/check.svg", text: "Secure Transactions" },
        { image: "/images/icons/check.svg", text: "User-Friendly Design" },
        { image: "/images/icons/check.svg", text: "Global Expansion" },
        { image: "/images/icons/check.svg", text: "Customer Service Excellence" },
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
        title:"User-Centric Design",
        description:"We prioritize user experience by designing our e-commerce platform to be intuitive, user-friendly, and responsive across different devices.",
        image:"/images/icons/user.svg",
      },
      {
        title:"Product Curation & Presentation",
        description:"We carefully curate and present a wide range of products, ensuring that customers can easily find what they're looking for and make informed purchasing decisions.",
        image:"/images/icons/order.svg",
      },
      {
        title:"Secure Transactions & Fast Shipping",
        description:"We implement robust security measures to ensure that transactions are safe and secure. Additionally, we offer fast and reliable shipping options to ensure timely delivery of orders.",
        image:"/images/icons/transaction.svg",
      },
      {
        title:"Continuous Improvement",
        description:"We continuously gather feedback from customers and analyze data to identify areas for improvement. By staying agile and responsive, we can adapt our e-commerce platform to meet evolving customer needs and preferences.",
        image:"/images/icons/improve.svg",
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
        title="E Commerce" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/ecommerce.jpg"
      />
       <OurEducational
          subtitle="What We Do" 
          title="Global Reach and Exceptional Customer Service" 
          paradescription="We specialize in providing a seamless online shopping experience through our dedicated e-commerce platform. Customers can explore a wide range of products, compare prices, read reviews, and make secure purchases effortlessly. With multiple payment options and fast shipping, we ensure safe and convenient transactions. Additionally, our commitment to exceptional customer service ensures that every shopping experience is hassle-free and enjoyable."
          aboutItems={aboutItems} 
          imageSrc="/images/service/ecom.png" 
          button={true}
        />
       {/* <ProgramsSlider programSlides={slidesData}/> */}
       <CtaBlock/>
        <WhyUs 
           whyus={whyusData} 
           title="Elevating the Online Shopping Experience" 
           subtitle="Our Operational Process"
           content="At the heart of our e-commerce operations lies a methodology focused on elevating the online shopping experience for our customers. We continuously strive to provide a seamless, convenient, and secure platform that caters to the diverse needs of our global audience. Our approach emphasizes customer satisfaction, innovation, and continuous improvement to ensure that every interaction with our e-commerce platform is nothing short of exceptional." 
         />
        
        {/* <Faq faqs={faqData}/> */}
      </Layout>
    </>
  );
}