import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import About from "@/components/HomePage/About/About";
import InnerBannerDesign from "@/components/Common/InnerBannerDesign";
import Faq from "@/components/Common/Faq";
import Points from "@/components/Common/Points";
import WhyUs from "@/components/Common/WhyUs";
import InnerCta from "@/components/Common/InnerCta";
import OurEducational from "@/components/Comman/OurEducational";

export default function Home() {
    const PageMeta = 
        {
        title: "College Admissions Consultants in UAE | Dar Aluloom International",
        description:"Secure your future with Dar Aluloom International expert college admissions consultants in UAE. We guide you every step of the way. Visit our website now!"
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "College Admissions Consultant in UAE", href: "/college-admissions-consultant-in-uae" },
      ];

      const aboutItems = [
        { image: "/images/icons/check.svg", text: "Medicine College Admissions Consultant in Dubai" },
        { image: "/images/icons/check.svg", text: "Engineering College Admissions Consultant in Dubai" },
        { image: "/images/icons/check.svg", text: "European College Admissions Consultant in Dubai" },
        { image: "/images/icons/check.svg", text: "Canadian college admissions consultant in Dubai" },
        { image: "/images/icons/check.svg", text: "US College Admissions Consultant in UAE" },
        { image: "/images/icons/check.svg", text: "UK College Admissions Consultant in UAE" },
      ];



      const pointsData = [
        {
          id: 1,
          imageSrc: "/images/points/medicine-college.png",
          imageAlt: "Medicine College Admissions Consultant in Dubai image",
          title: "Medicine College Admissions Consultant in Dubai",
          description:
            "Are you aspiring to become a doctor? Our Medicine College Admissions Consultants in Dubai are experts in helping you navigate the rigorous application process, from acing the entrance exams (UCAT, BMAT) to securing interviews at prestigious medical schools worldwide. We help build a tailored roadmap to your dream medical career.",
          animationDuration: 400,
        },
        {
          id: 2,
          imageSrc: "/images/points/engineering-college.png",
          imageAlt: "Engineering College Admissions Consultant in Dubai image",
          title: "Engineering College Admissions Consultant in Dubai",
          description:
            "Engineering is one of the most competitive fields, and our specialized consultants can guide you toward securing a spot in top engineering schools. Whether it's civil, mechanical, or software engineering, we help craft a strong application that highlights your skills and achievements.",
          animationDuration: 800,
        },
        {
          id: 3,
          imageSrc: "/images/points/european-college.png",
          imageAlt: "European College Admissions Consultant in Dubai image",
          title: "European College Admissions Consultant in Dubai",
          description:
            "If you're looking to study in Europe, our consultants provide comprehensive guidance on university selection, application timelines, and visa processes. From Germany’s technical schools to France’s prestigious  and other EU institutions, we help you find the best fit.",
          animationDuration: 1200,
        },
        {
            id: 4,
            imageSrc: "/images/points/canada-college.png",
            imageAlt: "Canadian College Admissions Consultant in Dubai image",
            title: "Canadian College Admissions Consultant in Dubai",
            description:
              "Canadian universities are known for their high academic standards and welcoming environment. Our consultants provide detailed insights into the application process for Canadian institutions, focusing on building a well-rounded application that highlights your academic and extracurricular strengths.",
            animationDuration: 1600,
          },
          {
            id: 5,
            imageSrc: "/images/points/us-college.png",
            imageAlt: "US College Admissions Consultant in UAE image",
            title: "US College Admissions Consultant in UAE",
            description:
              "The US is home to some of the world’s best universities, and getting in can be challenging. Our US College Admissions Consultants offer in-depth knowledge of the American college system, including guidance on the SAT/ACT exams, essays, and interviews to boost your chances of acceptance.",
            animationDuration: 1600,
          },
          {
            id: 6,
            imageSrc: "/images/points/boy.png",
            imageAlt: "UK College Admissions Consultant in UAE image",
            title: "UK College Admissions Consultant in UAE",
            description:
              "UK universities are globally recognized for their excellence. Our UK College Admissions Consultants are well-versed in applications, personal statements, and preparing for interviews. We help students showcase their unique strengths to stand out in the competitive UK admissions process.",
            animationDuration: 1600,
          },
          
      ];

      const faqData=[
        {   
            number:"01",
            question: "What services does Dar Aluloom International offer for college admissions?",
            answer: "Dar Aluloom International provides personalized college admissions consulting for various fields, including medicine, engineering, and other disciplines. We offer expert guidance for applications to universities in the UAE, US, UK, Canada, and Europe, ensuring a comprehensive approach to admissions.",
        },
        {   
            number:"02",
            question: "How does Dar Aluloom assist students applying to medical schools?",
            answer: "Our Medicine College Admissions Consultants in Dubai specialize in preparing students for the rigorous medical school application process. We assist with entrance exams, interviews, personal statements, and building a strong application tailored to each student’s career goals.",
        },
        {   
            number:"03",
            question: "Can Dar Aluloom help with engineering college applications?",
            answer: "Yes, our Engineering College Admissions Consultants in Dubai are experienced in guiding students through the competitive application process for top engineering programs. We assist in selecting the right universities and help highlight your skills, achievements, and academic performance in your application.",
        },
        {   
            number:"04",
            question: "What kind of support does Dar Aluloom provide for students looking to study in Europe?",
            answer: "Our European College Admissions Consultants offer in-depth guidance on university selection, and application timelines for various European countries. We work with students to ensure they find the best-fit university, whether in Germany, France, or other top European institutions.",
        },
        {   
            number:"05",
            question: "How can Dar Aluloom help with applications to Canadian universities?",
            answer: "Dar Aluloom’s Canadian College Admissions Consultants provide expert advice on how to craft a well-rounded application. We focus on highlighting your academic strengths and extracurricular achievements to improve your chances of being accepted into top Canadian universities.",
        },
        {   
          number:"06",
          question: "What services do you offer for US college admissions?",
          answer: "Our US College Admissions Consultants are experienced in navigating the competitive American college admissions process. We provide comprehensive support for SAT/ACT preparation, essays, interviews, and crafting strong applications for top US universities.",
      },

      {   
            number:"07",
            question: "How does Dar Aluloom help students applying to UK universities?",
            answer: "Our UK College Admissions Consultants are experts in guiding students through the application process, including writing personal statements and preparing for interviews. We help students applying to top UK universities that stand out with their unique strengths and academic achievements.",
        },{   
          number:"08",
          question: "Do you provide consultation for students who need help with interviews?",
          answer: "Yes, we offer interview preparation services for all fields of study, helping students practice and develop the skills they need to excel during university interviews.",
      },
      {   
        number:"09",
        question: "What makes Dar Aluloom International different from other admissions consultants?",
        answer: "We provide a highly personalized approach, focusing on each student's unique strengths, goals, and circumstances. Our consultants have deep expertise in various academic fields and global admissions systems, ensuring that our students receive the most relevant and effective advice for their applications.",
    },
    {   
      number:"10",
      question: "How do I get started with Dar Aluloom’s college admissions consulting services?",
      answer: "To begin your admissions journey with Dar Aluloom, you can contact us through our website or schedule an initial consultation. Our team will assess your goals and help you create a customized plan for your college applications.",
  },

    
    ];

    const whyusData = [
      {
        title:" Personalized Guidance",
        description:"We begin by understanding each student's academic goals and aspirations, providing personalized advice and insights tailored to their unique needs.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Strategic Planning",
        description:"Based on the student's goals, we develop a customized roadmap, offering expert advice on college selection, career planning, and test preparation strategies.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Comprehensive Support",
        description:"Our team provides ongoing support throughout the academic journey, offering guidance on documentation, application processes, and scholarship opportunities.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Skill Enhancement",
        description:"With personalized coaching and tailored practice tests, we focus on enhancing students' skills and confidence, ensuring they are well-prepared to excel in standardized exams and academic pursuits.",
        image:"/images/icons/guidance.svg",
      },

    ];

     const innerCtaData = [
        {
          heading: "Start Your Journey Today",
          description:
            "Start Your Journey Today With Dar Aluloom International by your side, securing admission to a US college is no longer a dream but a reality. Contact us now to take the first step toward your bright future in the United States!",
        },
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
      <Layout>
      <InnerBannerDesign
        title="College Admissions Consultant in UAE" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/college-admissions.jpg"
    />
       <OurEducational
                       subtitle="What We Do" 
                       title="Take the First Step Towards Your Global Future!" 
                       paradescription="At Dar Aluloom International, we specialize in guiding students through the complex college admissions process with personalized advice and strategies. Whether you’re aiming for top-tier medical schools or renowned universities in engineering, we offer expert consultation to help you succeed. Here’s a brief overview of the various admissions services we offer:"
                       aboutItems={aboutItems} 
                       imageSrc="/images/service/subject-tutor-1.png" 
                       button={true}
                     />
              <Points points={pointsData} title="What We Do" subtitle="Empowering Students for Success in the USA" description="Dar Aluloom International offers a comprehensive suite of services designed to simplify your application process and set you on the path to success.
       "/>
               <WhyUs whyus={whyusData} title="Why Choose Us"/>
        <Faq faqs={faqData}/>
        {/* <InnerCta innerCta={innerCtaData}/> */}
      </Layout>
    </>
  );
}