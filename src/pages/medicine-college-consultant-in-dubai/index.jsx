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
        title: "Medicine College Consultant in Dubai | Dar Aluloom International",
        description:"Plan your medical career with Dar Aluloom International expert medicine college consultants in Dubai. Your pathway to success starts here."
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Medicine College Consultant in Dubai", href: "/medicine-college-consultants-in-dubai" },
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
          imageSrc: "/images/points/medicine-1.png",
          imageAlt: "Personalized Academic Counseling image",
          title: "Personalized Academic Counseling",
          description:
            "We evaluate your academic achievements, skills, and career aspirations to recommend the best medical colleges tailored to your goals.",
          animationDuration: 400,
        },
        {
          id: 2,
          imageSrc: "/images/points/Application-Assistance.png",
          imageAlt: "Application and Essay Support image",
          title: "Application Support",
          description:
            "From crafting compelling personal statements to submitting all required documents, we ensure your application stands out among the competition.",
          animationDuration: 800,
        },
        {
          id: 3,
          imageSrc: "/images/points/entrance.png",
          imageAlt: "Entrance Exam Preparation image",
          title: "Entrance Exam Preparation",
          description:
            "Our targeted coaching for tests such as UCAT, BMAT, and other country-specific exams equips you with the knowledge and confidence to excel.",
          animationDuration: 1200,
        },
        {
            id: 4,
            imageSrc: "/images/points/interview-3.jpg",
            imageAlt: "Interview Coaching image",
            title: "Interview Coaching",
            description:
              "Medical school interviews are a critical step. We provide expert training, including mock interviews and feedback, to help you present your best self.",
            animationDuration: 1600,
          },
          {
            id: 5,
            imageSrc: "/images/points/uk-college.png",
            imageAlt: "Guidance for International Students image",
            title: "Guidance for International Students",
            description:
              "For those applying to medical colleges abroad, we offer support with visa applications, accommodation arrangements, and cultural acclimatization.",
            animationDuration: 1600,
          },
          {
            id: 6,
            imageSrc: "/images/points/std-scholarships.png",
            imageAlt: "Scholarship Assistance image",
            title: "Scholarship Assistance",
            description:
              "We help identify and apply for scholarships and financial aid programs to make your education journey more affordable.",
            animationDuration: 1600,
          },
          
      ];

      const faqData=[
        {   
            number:"01",
            question: " What makes Dar Aluloom International different from other consultants?",
            answer: "We offer personalized, end-to-end services, focusing on your unique goals and ensuring you have access to the best opportunities globally.",
        },
        {   
            number:"02",
            question: " Can you help me apply to medical colleges in multiple countries?",
            answer: "Yes, we specialize in multi-country applications, guiding you through different requirements and deadlines for each destination.",
        },
        {   
            number:"03",
            question: "Do you assist with entrance exam preparation?",
            answer: "Absolutely. We provide tailored coaching for tests like UCAT, MCAT, and other admission exams required by medical colleges worldwide.",
        },
        {   
            number:"04",
            question: "What if I don’t meet the eligibility criteria for some colleges?",
            answer: "We work with you to identify alternative pathways, such as preparatory programs or partner institutions, to help you achieve your goals.",
        },
        {   
            number:"05",
            question: "Do you offer support after admission?",
            answer: "Yes! Our post-admission services include visa assistance, pre-departure briefings, and settling-in support to ensure a smooth transition to your new academic environment.",
        },
    
    ];

    const whyusData = [
      {
        title:"Extensive Experience",
        description:"With years of expertise in education consultancy, we have helped countless students secure admissions to top medical colleges worldwide.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:" Tailored Services",
        description:"Every student is unique, and so are their goals. Our consultants provide personalized guidance to ensure your individual needs are met.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Global Reach",
        description:"Our network spans across prestigious medical institutions in the UAE, Europe, North America, and beyond, providing you with a wide array of options.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Comprehensive Support",
        description:"From the initial consultation to post-admission assistance, we are with you at every step, ensuring a smooth and stress-free experience.",
        image:"/images/icons/guidance.svg",
      },

    ];

     const innerCtaData = [
        {
          heading: "Start Your Journey Today",
          description:
            "With Dar Aluloom International by your side, you’re one step closer to making your dream of studying medicine a reality. Contact us today to begin your journey toward academic excellence and a rewarding career!",
        },
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
      <Layout>
      <InnerBannerDesign
        title="Medicine College Consultant in Dubai
" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/medicine.jpg"
    />
       <OurEducational
                subtitle="Personalized Support for Your Medical Dream" 
                title="Medicine College Consultant in Dubai" 
                paradescription="At Dar Aluloom International, we understand that pursuing a career in medicine is a life-changing journey. Our dedicated consultants are here to guide you through every step of the process, ensuring you achieve your academic and career goals. With years of experience and a tailored approach, we streamline the intricate process of medical school admissions, helping you achieve your dream of becoming a medical doctor or specialist."
                aboutItems={aboutItems} 
                imageSrc="/images/service/medicine.png" 
                button={true}
              />
       <Points points={pointsData} title="What We Do" subtitle="Empowering Tomorrow's Doctors with Expert Guidance" description="At Dar Aluloom International, we provide a range of specialized services to support aspiring medical students. Here’s how we help:"/>
        <WhyUs whyus={whyusData} title="Why Choose Us"/>
        <Faq faqs={faqData}/>
        <InnerCta innerCta={innerCtaData}/>
      </Layout>
    </>
  );
}