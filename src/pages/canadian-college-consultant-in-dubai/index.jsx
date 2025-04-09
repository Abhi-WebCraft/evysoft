import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import About from "@/components/HomePage/About/About";
import InnerBannerDesign from "@/components/Common/InnerBannerDesign";
import Faq from "@/components/Common/Faq";
import Points from "@/components/Common/Points";
import WhyUs from "@/components/Common/WhyUs";
import OurEducational from "@/components/Comman/OurEducational";

export default function Home() {
    const PageMeta = 
        {
        title: "Canadian College Consultant in Dubai | Dar Aluloom International",
        description:"Pursue higher education in Canada with Dar Aluloom's expert consultants in Dubai. Get the support you need for a successful application."
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Canadian College Consultant in Dubai", href: "/canadian-college-consultant-in-dubai" },
      ];

      const aboutItems = [
        { image: "/images/icons/check.svg", text: "Expert guidance for Canadian college admissions" },
        { image: "/images/icons/check.svg", text: "Comprehensive support tailored to your needs" },
        { image: "/images/icons/check.svg", text: "Partnerships with top Canadian institutions" },
        { image: "/images/icons/check.svg", text: " Years of experience in education consultancy" },
        { image: "/images/icons/check.svg", text: "End-to-end assistance, from application to arrival" },
      ];

      const pointsData = [
        {
          id: 1,
          imageSrc: "/images/points/academic.png",
          imageAlt: "Personalized Academic Counseling image",
          title: "Personalized Academic Counseling",
          description:
            "We analyze your academic background, interests, and career goals to recommend the most suitable Canadian colleges and programs tailored to your aspirations.",
          animationDuration: 400,
        },
        {
          id: 2,
          imageSrc: "/images/points/documents.png",
          imageAlt: "Application and Documentation Support image",
          title: "Application and Documentation Support",
          description:
            "Our team ensures your applications are well-prepared, from crafting compelling personal statements to gathering and submitting all required documents.",
          animationDuration: 800,
        },
        {
          id: 3,
          imageSrc: "/images/points/uae-visa.png",
          imageAlt: "Visa and Immigration Assistance image",
          title: "Visa and Immigration Assistance",
          description:
            "Navigating the visa process can be daunting. We guide you through every step, ensuring all requirements are met for a smooth visa application experience.",
          animationDuration: 1200,
        },
        {
            id: 4,
            imageSrc: "/images/points/uae-scholarships.png",
            imageAlt: "Scholarship and Financial Aid Guidance image",
            title: "Scholarship and Financial Aid Guidance",
            description:
              "We help identify and apply for scholarships, bursaries, and financial aid opportunities to make studying in Canada more affordable.",
            animationDuration: 1600,
          },
          {
            id: 5,
            imageSrc: "/images/points/predeparture-1.png",
            imageAlt: "Pre-Departure and Settlement Support image",
            title: "Pre-Departure and Settlement Support",
            description:
              "From pre-departure briefings to arranging accommodations and understanding Canadian culture, we prepare you for a successful transition to college life.",
            animationDuration: 1600,
          },
          {
            id: 6,
            imageSrc: "/images/points/coaching.png",
            imageAlt: "Coaching for Entrance Tests image",
            title: "Coaching for Entrance Tests",
            description:
              "For programs that require standardized tests such as IELTS or TOEFL, we provide targeted preparation to help you achieve competitive scores.",
            animationDuration: 1600,
          },
          
      ];

      const faqData=[
        {   
            number:"01",
            question: "Why should I study in Canada?",
            answer: "Canada offers high-quality education, affordable tuition fees, excellent research opportunities, and a multicultural environment that enhances personal and professional growth.",
        },
        {   
            number:"02",
            question: " Do I need to take the IELTS or TOEFL for admission?",
            answer: "Most Canadian colleges require proof of English proficiency. We provide preparation support to help you achieve the required scores.",
        },
        {   
            number:"03",
            question: "Can you help me secure a scholarship in Canada?",
            answer: "Yes, we assist in identifying and applying for scholarships, grants, and bursaries based on your academic achievements and financial needs.",
        },
        {   
            number:"04",
            question: "How do I apply for a student visa to Canada?",
            answer: "Our team guides you through the entire visa application process, ensuring all documents and requirements are met for a successful outcome.",
        },
        {   
            number:"05",
            question: "What if I don’t get accepted into my preferred college?",
            answer: "We explore alternative pathways, such as preparatory programs or other reputable institutions, to ensure you stay on track toward your academic goals.",
        },
    
    ];

    const whyusData = [
      {
        title:" Expertise in Canadian Education",
        description:"With years of experience, we understand the Canadian education system and admission processes, ensuring you have the best chances of success.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Personalized Approach",
        description:"Every student is unique. We tailor our services to match your academic background, goals, and preferences.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Strong Network with Canadian Colleges",
        description:"We have connections with top Canadian institutions, giving you access to a wide range of programs and opportunities.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Comprehensive, End-to-End Support",
        description:"From your first consultation to settling in Canada, we provide full-spectrum assistance to make your journey seamless and stress-free. ",
        image:"/images/icons/guidance.svg",
      },
    ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
      <Layout>
      <InnerBannerDesign
        title="Canadian College Consultant in Dubai" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/canada.jpg"
    />
       <OurEducational
                subtitle="Achieve Your Dreams of Studying in Canada" 
                title="Canadian College Consultant in Dubai" 
                paradescription="At Dar Aluloom International, we specialize in helping students turn their aspirations into reality by guiding them through the process of securing admissions to leading Canadian colleges and universities. Canada, known for its world-class education, diverse culture, and career opportunities, offers the ideal environment for academic and personal growth. With our expertise and personalized support, we make your journey to studying in Canada seamless and stress-free."
                aboutItems={aboutItems} 
                imageSrc="/images/service/canada.png" 
                button={true}
              />
       <Points points={pointsData} title="What We Do" subtitle="Empowering Students to Succeed in Canada" description="Dar Aluloom International provides a range of services designed to meet the unique needs of students planning to study in Canada. Here’s how we help:
"/>
        <WhyUs whyus={whyusData} title="Why Choose Us"/>
        <Faq faqs={faqData}/>
      </Layout>
    </>
  );
}