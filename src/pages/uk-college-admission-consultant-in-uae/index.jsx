import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import About from "@/components/HomePage/About/About";
import InnerBannerDesign from "@/components/Common/InnerBannerDesign";
import Faq from "@/components/Common/Faq";
import Points from "@/components/Common/Points";
import WhyUs from "@/components/Common/WhyUs";
import OurEducational from "@/components/Comman/OurEducational";
import InnerCta from "@/components/Common/InnerCta";

export default function Home() {
    const PageMeta = 
        {
        title: "UK College Admission Consultant UAE | Dar Aluloom International",
        description:"Get expert UK college admissions consulting in UAE with Dar Aluloom International. Tailored guidance for your dream university in the United Kingdom."
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "UK College Admission Consultant in UAE", href: "/uk-college-admission-consultant-in-uae" },
      ];

      const aboutItems = [
        { image: "/images/icons/check.svg", text: " Expert guidance for every step of your journey" },
        { image: "/images/icons/check.svg", text: "Personalized approach tailored to your goals" },
        { image: "/images/icons/check.svg", text: "Simplified admission process for top medical colleges" },
        { image: "/images/icons/check.svg", text: "Years of experience in education consultancy" },
        { image: "/images/icons/check.svg", text: "Dedicated support to turn your dreams into reality" },
      ];

      const pointsData = [
        {
          id: 1,
          imageSrc: "/images/points/uk-college-admission-consultant-in-uae/Academic-Profiling.jpg",
          imageAlt: "Academic Profiling image",
          title: "Academic Profiling",
          description:
            "We assess your academic achievements, career goals, and extracurricular activities to identify the best UK colleges and universities for you.",
          animationDuration: 400,
        },
        {
          id: 2,
          imageSrc: "/images/points/uk-college-admission-consultant-in-uae/Application-and-Personal-Statement-Support.jpg",
          imageAlt: "Application and Personal Statement Support image",
          title: "Application and Personal Statement Support",
          description:
            "Crafting an impressive application is crucial for UK admissions. We assist with preparing standout applications, including tailored personal statements that reflect your strengths and ambitions.",
          animationDuration: 800,
        },
        {
          id: 3,
          imageSrc: "/images/points/entrance.png",
          imageAlt: "Entrance Exam Preparation image",
          title: "Entrance Exam Preparation",
          description:
            "Some UK universities require entrance exams like UCAT , LNAT, BMAT or IELTS for specific programs. We provide expert coaching to ensure you excel.",
          animationDuration: 1200,
        },
        {
            id: 4,
            imageSrc: "/images/points/interview-1.png",
            imageAlt: "Interview Preparation image",
            title: "Interview Preparation",
            description:
              "For programs requiring interviews, we offer training, mock interviews, and constructive feedback to help you present your best self to admissions panels.",
            animationDuration: 1600,
          },
          {
            id: 5,
            imageSrc: "/images/points/visa-1.png",
            imageAlt: "Visa Assistance image",
            title: "Visa Assistance",
            description:
              "Navigating the UK student visa process can be challenging. We guide you through the application, ensuring compliance with all requirements.",
            animationDuration: 1600,
          },
          {
            id: 6,
            imageSrc: "/images/points/scholarships-1.png",
            imageAlt: " Scholarship and Financial Aid Guidance image",
            title: " Scholarship and Financial Aid Guidance",
            description:
              "We help identify scholarship opportunities and assist with financial aid applications to make studying in the UK more accessible.",
            animationDuration: 1600,
          },
          
      ];

      const faqData=[
        {   
            number:"01",
            question: " What makes UK universities unique?",
            answer: "The UK is home to globally renowned institutions offering diverse academic programs, exceptional research opportunities, and strong links to industries worldwide.",
        },
        {   
            number:"02",
            question: "Do UK universities require a personal statement?",
            answer: "Yes, a well-written personal statement is a key part of your application. We provide expert guidance to ensure your statement showcases your strengths and aspirations.",
        },
        {   
            number:"03",
            question: " Can I apply to multiple UK universities?",
            answer: "Yes, through the UCAS system, you can apply to multiple universities with a single application. We help you navigate this process effectively.",
        },
        {   
            number:"04",
            question: "Do you assist with accommodation arrangements?",
            answer: "Yes, we guide you in finding suitable accommodation near your university, whether it’s on-campus housing or private rentals.",
        },
        {   
            number:"05",
            question: "What if I need financial assistance?",
            answer: "We help identify scholarship opportunities and financial aid options to ease the cost of your education in the UK.",
        },
    
    ];

    const whyusData = [
      {
        title:"Expertise in UK Admissions",
        description:"Our consultants have extensive experience and in-depth knowledge of UK university requirements, ensuring your application aligns with the highest standards.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Personalized Guidance",
        description:"We believe every student is unique. Our services are tailored to match your individual goals, academic profile, and career aspirations.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Strong Relationships with UK Universities",
        description:"We have a strong network of connections with top universities across the UK, giving you access to a wide range of programs and opportunities.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"End-to-End Support",
        description:"From the initial consultation to post-enrollment guidance, we are with you every step of the way to make your admission journey stress-free.",
        image:"/images/icons/guidance.svg",
      },

    ];

     const innerCtaData = [
        {
          heading: "Start Your UK Education Journey Today",
          description:
            "With Dar Aluloom International as your trusted partner, you’re one step closer to achieving academic success in the United Kingdom. Contact us today to begin your journey toward a brighter future!",
        },
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
      <Layout>
      <InnerBannerDesign
        title="UK College Admission Consultant in UAE" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/uk.jpg"
    />
       <OurEducational
                subtitle="Your Trusted Partner for Higher Education in the United Kingdom" 
                title="UK College Admission Consultant in UAE" 
                paradescription="At Dar Aluloom International, we are committed to helping students in the UAE achieve their dream of studying in the United Kingdom. Renowned for its prestigious universities, rich history, and innovative academic programs, the UK is a prime destination for students seeking world-class education and unparalleled career opportunities. Our team of experienced consultants offers comprehensive support to ensure a smooth, successful, and personalized admission process."
                aboutItems={aboutItems} 
                imageSrc="/images/service/uk.png" 
                button={true}
              />
       <Points points={pointsData} title="What We Do" subtitle="Your Pathway to Academic Success in the UK" description="Our specialized UK College Admission services are tailored to meet your academic aspirations, guiding you through every step of the process."/>
        <WhyUs whyus={whyusData} title="Why Choose Us"/>
        <Faq faqs={faqData}/>
        <InnerCta innerCta={innerCtaData}/>
      </Layout>
    </>
  );
}