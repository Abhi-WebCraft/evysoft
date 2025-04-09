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
        title: "US College Admission Consultants UAE | Dar Aluloom International",
        description:"Navigate US college admissions with Dar Aluloom consulting services in UAE. Your dream college is within reach with our expert guidance."
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "US College Consultant in UAE", href: "/us-college-consultant-in-uae" },
      ];

      const aboutItems = [
        { image: "/images/icons/check.svg", text: " Expert guidance for US college admissions" },
        { image: "/images/icons/check.svg", text: "Tailored services to match your goals" },
        { image: "/images/icons/check.svg", text: "Support for international applications" },
        { image: "/images/icons/check.svg", text: "End-to-end assistance from application to enrollment" },
        { image: "/images/icons/check.svg", text: "Years of experience in global education consultancy" },
      ];

      const pointsData = [
        {
          id: 1,
          imageSrc: "/images/points/application-1.png",
          imageAlt: "Personalized Academic Counseling image",
          title: "Personalized Academic Counseling",
          description:
            "We evaluate your academic profile, interests, and career aspirations to recommend the best US colleges and programs for your unique goals.",
          animationDuration: 400,
        },
        {
          id: 2,
          imageSrc: "/images/points/support.png",
          imageAlt: "Application and Essay Support image",
          title: "Application and Essay Support",
          description:
            "Our consultants help you craft standout college applications and compelling essays that highlight your strengths and achievements.",
          animationDuration: 800,
        },
        {
          id: 3,
          imageSrc: "/images/points/test-3.png",
          imageAlt: "Standardized Test Preparation image",
          title: "Standardized Test Preparation",
          description:
            "We provide targeted coaching for exams like SAT, ACT, TOEFL, or IELTS, ensuring you achieve competitive scores required by US colleges.",
          animationDuration: 1200,
        },
        {
            id: 4,
            imageSrc: "/images/points/visa.png",
            imageAlt: "Visa and Immigration Assistance image",
            title: "Visa and Immigration Assistance",
            description:
              "Navigating the US visa process can be challenging. We offer step-by-step guidance to ensure a smooth and successful visa application.",
            animationDuration: 1600,
          },
          {
            id: 5,
            imageSrc: "/images/points/predeparture.png",
            imageAlt: "Pre-Departure and Settlement Support image",
            title: "Pre-Departure and Settlement Support",
            description:
              "From identifying opportunities to preparing applications, we assist you in securing scholarships and financial aid to ease the cost of studying in the US.",
            animationDuration: 1600,
          },
          {
            id: 6,
            imageSrc: "/images/points/departure.png",
            imageAlt: "Pre-departure and Post-Arrival Support image",
            title: "Pre-departure and Post-Arrival Support",
            description:
              "We provide pre-departure orientations and post-arrival support to help you transition smoothly into your new academic environment in the US.",
            animationDuration: 1600,
          },
          
      ];

      const faqData=[
        {   
            number:"01",
            question: " Why should I study in the United States?",
            answer: "The US offers unparalleled academic programs, diverse career opportunities, cutting-edge research facilities, and a multicultural environment, making it an ideal destination for higher education.",
        },
        {   
            number:"02",
            question: " Do US colleges require standardized test scores?",
            answer: "Most colleges require SAT or ACT scores, along with English proficiency tests like TOEFL or IELTS for international students. We provide coaching to help you excel.",
        },
        {   
            number:"03",
            question: " Can you help me secure financial aid or scholarships?",
            answer: "Yes, we assist in identifying and applying for scholarships and financial aid programs to help you finance your education.",
        },
        {   
            number:"04",
            question: "What if I don’t get accepted into my preferred college?",
            answer: "We guide you toward alternative options, such as other reputable institutions or preparatory programs, to ensure you stay on track to achieve your goals.",
        },
        {   
            number:"05",
            question: "Do you offer visa application assistance?",
            answer: "Absolutely. We help you navigate the US student visa application process, ensuring all requirements are met for a successful outcome.",
        },
    
    ];

    const whyusData = [
      {
        title:" Expertise in US College Admissions",
        description:"With years of experience, we understand the intricacies of US college application processes and requirements, ensuring your application stands out.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:" Tailored Guidance",
        description:"We personalize our services to align with your academic profile, career aspirations, and preferred college choices.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Strong Network with US Institutions",
        description:"Our connections with top US colleges and universities give you access to a wide array of programs and opportunities.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Comprehensive Support at Every Step",
        description:"From the initial consultation to post-enrollment guidance, we are with you throughout the journey to make the process stress-free.",
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
        title="US College Consultant in UAE" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/us.jpg"
    />
       <OurEducational
                subtitle="Your Gateway to Higher Education in the United States" 
                title="US College Consultant in UAE" 
                paradescription="At Dar Aluloom International, we are committed to helping students achieve their dreams of studying at prestigious colleges and universities in the United States. With a reputation for academic excellence, innovative programs, and unparalleled opportunities, US institutions are among the most sought-after by students worldwide. Our expert consultants provide personalized support to make your journey to a US college seamless and successful."
                aboutItems={aboutItems} 
                imageSrc="/images/service/us.png" 
                button={true}
              />
       <Points points={pointsData} title="What We Do" subtitle="Empowering Students for Success in the USA" description="Dar Aluloom International offers a comprehensive suite of services designed to simplify your application process and set you on the path to success.
"/>
        <WhyUs whyus={whyusData} title="Why Choose Us"/>
        <Faq faqs={faqData}/>
        <InnerCta innerCta={innerCtaData}/>
      </Layout>
    </>
  );
}