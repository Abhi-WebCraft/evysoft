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
        title: "Engineering College Admissions Consultants in Dubai, UAE",
        description:"Prepare for engineering college admissions consultants in Dubai with Dar Aluloom International. Connect with our trusted consultants today!"
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Engineering College Consultant in Dubai", href: "/engineering-college-consultant-in-dubai" },
      ];

      const aboutItems = [
        { image: "/images/icons/check.svg", text: "Expert guidance for building your engineering future" },
        { image: "/images/icons/check.svg", text: "Personalized support tailored to your aspirations" },
        { image: "/images/icons/check.svg", text: "Simplified admission process for top engineering colleges" },
        { image: "/images/icons/check.svg", text: "Years of proven expertise in education consultancy" },
        { image: "/images/icons/check.svg", text: "Comprehensive support from start to finish" },
      ];

      const pointsData = [
        {
          id: 1,
          imageSrc: "/images/points/counselling.png",
          imageAlt: "Personalized Academic Counseling image",
          title: "Personalized Academic Counseling",
          description:
            "We assess your academic strengths, interests, and ambitions to recommend the best engineering programs tailored to your needs.",
          animationDuration: 400,
        },
        {
          id: 2,
          imageSrc: "/images/points/application.png",
          imageAlt: "Application Support image",
          title: "Application Support",
          description:
            "From creating impactful personal statements to handling document submissions, we ensure your application shines among others.",
          animationDuration: 800,
        },
        {
          id: 3,
          imageSrc: "/images/points/entrance-11.png",
          imageAlt: "Entrance Exam Preparation image",
          title: "Entrance Exam Preparation",
          description:
            "We provide focused coaching for standardized tests like IELTS, SAT, ACT, GRE, and country-specific engineering entrance exams, equipping you with the skills to succeed.",
          animationDuration: 1200,
        },
        {
            id: 4,
            imageSrc: "/images/points/interview-1.png",
            imageAlt: "Interview Coaching image",
            title: "Interview Coaching",
            description:
              "Engineering admissions often include interviews. We offer mock interviews and coaching to help you present yourself confidently and effectively.",
            animationDuration: 1600,
          },
          {
            id: 5,
            imageSrc: "/images/points/guidance.png",
            imageAlt: "Guidance for International Students image",
            title: "Guidance for International Students",
            description:
              "If you're applying to engineering programs abroad, we support you with visa processing, accommodation arrangements, and adapting to your new academic environment.",
            animationDuration: 1600,
          },
          {
            id: 6,
            imageSrc: "/images/points/certificates.png",
            imageAlt: "Scholarship and Financial Aid Assistance image",
            title: "Scholarship and Financial Aid Assistance",
            description:
              "We help you explore and apply for scholarships and funding opportunities, making your engineering education more affordable and accessible.",
            animationDuration: 1600,
          },
          
      ];

      const faqData=[
        {   
            number:"01",
            question: " What sets Dar Aluloom International apart for engineering admissions?",
            answer: "We offer end-to-end, personalized services and have extensive experience guiding students to secure placements in top engineering programs worldwide.",
        },
        {   
            number:"02",
            question: " Can I apply to engineering colleges in multiple countries?",
            answer: "Yes, we specialize in managing multi-country applications and navigating varying requirements to maximize your options.",
        },
        {   
            number:"03",
            question: "Do you assist with specific engineering entrance exams?",
            answer: "Absolutely. We offer tailored preparation for exams such as SAT, ACT, GRE, and other relevant tests required by top engineering institutions.",
        },
        {   
            number:"04",
            question: "What if I’m unsure about which engineering field to choose?",
            answer: "Our academic counselors work with you to identify your strengths, interests, and career goals to recommend the best-fit engineering programs.",
        },
        {   
            number:"05",
            question: "Do you provide post-admission support?",
            answer: "Yes! We assist with visa applications, pre-departure preparation, and settling-in guidance to ensure a seamless transition to college life.",
        },
    
    ];

    const whyusData = [
      {
        title:"Proven Expertise in Engineering Admissions",
        description:"We have a track record of successfully guiding students to top engineering programs worldwide, ensuring their goals are achieved.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Customized Guidance",
        description:"Your goals are unique, and so is our approach. We tailor every aspect of our services to match your individual needs and aspirations.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Global Network of Top Institutions",
        description:"With partnerships and connections to prestigious engineering colleges in the UAE, Europe, North America, and more, we open doors to endless possibilities.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"End-to-End Support",
        description:"From the first consultation to settling in at your new college, we provide comprehensive assistance to make the process smooth and hassle-free.",
        image:"/images/icons/guidance.svg",
      },

    ];

     const innerCtaData = [
        {
          heading: "Start Your Journey Today",
          description:
            "With Dar Aluloom International as your trusted partner, you’re one step closer to a rewarding career in engineering. Contact us today to begin your journey toward academic excellence and professional success!",
        },
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
      <Layout>
      <InnerBannerDesign
        title="Engineering College Consultant in Dubai

" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/engineering.jpg"
    />
       <OurEducational
                subtitle="Design Your Future with Confidence" 
                title="Engineering College Consultant in Dubai" 
                paradescription="At Dar Aluloom International, we know that choosing a career in engineering is more than just selecting a field of study—it's about building the foundation for a bright and successful future. Our dedicated consultants provide expert guidance tailored to your goals, ensuring you navigate the complexities of engineering college admissions with ease. With our years of experience and personalized support, we help you bring your dreams of a career in engineering to life."
                aboutItems={aboutItems} 
                imageSrc="/images/service/uk.png" 
                button={true}
              />
       <Points points={pointsData} title="What We Do" subtitle="Empowering Tomorrow's Engineers with Precision and Expertise" description="At Dar Aluloom International, we offer specialized services to help aspiring engineers reach their academic and career goals. Here's how we assist:"/>
        <WhyUs whyus={whyusData} title="Why Choose Us"/>
        <Faq faqs={faqData}/>
        <InnerCta innerCta={innerCtaData}/>
      </Layout>
    </>
  );
}