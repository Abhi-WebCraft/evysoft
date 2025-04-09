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
import SectionTitle from "@/components/Layout/SectionTitle";
import Container from "@/components/Layout/Container";

export default function Home() {
    const PageMeta = 
        {
        title: "Expert IELTS Test Preparation in Dubai | Dar Aluloom International",
        description:"Prepare for the IELTS Test Preparation in Dubai with Dar Aluloom's expert training. Boost your skills & get the band score you need for global opportunities."
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "IELTS Test Preparation in Dubai", href: "/ielts-test-prep-in-dubai" },
      ];
      const aboutItems = [
      ];

      const faqData=[
        {   
            number:"01",
            question: "What is the IELTS test?",
            answer: "The IELTS (International English Language Testing System) is a standardized test that assesses your English language proficiency. It is required for admission to many universities and immigration purposes in English-speaking countries.",
        },
        {   
            number:"02",
            question: "How long does it take to prepare for the IELTS test?",
            answer: "Preparation time varies depending on your current English level and target score. On average, students spend 4-8 weeks preparing for the IELTS test. Our courses are flexible and can be tailored to fit your schedule and goals.",
        },
        {   
            number:"03",
            question: "What is the difference between the Academic and General Training IELTS tests?",
            answer: "The Academic IELTS test is for students applying to study at a higher education level. The General Training IELTS test is for those seeking work experience or immigration. We offer preparation courses for both versions of the test.",
        },
        {   
            number:"04",
            question: "How are the IELTS scores calculated?",
            answer: "IELTS scores are reported on a 9-band scale, with each section (Listening, Reading, Writing, and Speaking) receiving a separate score. The average of these scores forms your overall band score.",
        },
        {   
            number:"05",
            question: "What are the minimum IELTS scores required by universities?",
            answer: "Minimum IELTS score requirements vary by institution and program. Typically, universities require a score between 6.0 and 7.5 for admission. Our instructors can help you achieve the score required for your specific goals.",
        },
        {   
          number:"06",
          question: "How do you approach PTE and TOEFL preparation?",
          answer: "Our PTE and TOEFL prep programs are designed to enhance your English proficiency in reading, writing, listening, and speaking. With personalized coaching and practice tests, we ensure you achieve top scores in these exams",
      },
      {   
        number:"07",
        question: "How often can I take the IELTS test?",
        answer: "You can take the IELTS test as many times as you like, but it’s recommended to allow sufficient preparation time between attempts. Our courses help you prepare thoroughly to maximize your chances of success on your first attempt.",
    },
   
    ];

    const whyusData = [
      {
        title:"Diagnostic Test and Initial Consultation",
        description:"Begin your journey with a diagnostic test to assess your current English level. During the initial consultation, our experts will identify your strengths and weaknesses and create a customized study plan.",
        image:"/images/icons/communication.svg",
      },
      {
        title:"Targeted Lessons and Practice Sessions",
        description:"Engage in targeted lessons designed to improve your skills in Listening, Reading, Writing, and Speaking. Our practice sessions are designed to simulate real test conditions, ensuring you’re fully prepared on test day.",
        image:"/images/icons/book.svg",
      },
      {
        title:"Mock Tests and Feedback",
        description:"Take mock IELTS exams to measure your progress. Our instructors will provide detailed feedback and suggest strategies to help you improve your scores. This process helps build your confidence and reduces test-day anxiety.",
        image:"/images/icons/checklist-1.svg",
      },
      {
        title:"Final Review and Test-Taking Strategies",
        description:"In the final phase, review key concepts and practice essential test-taking strategies. Our instructors will ensure you’re fully prepared, both mentally and academically, to achieve your desired band score.",
        image:"/images/icons/strategy.svg",
      },
    ];
    const slidesData = [
        { 
          title: "Tailored Programs for Every Learner",
          description: "At Dar Aluloom, we know that every student is unique. Whether you’re aiming for a high academic score or simply need to meet immigration requirements, our courses are tailored to suit your specific goals and learning style. Our expert instructors provide personalized feedback and targeted strategies to ensure you excel.",
          imageUrl: "/images/icons/number-1.svg",
        },
        { 
          title: "Proven Success with Expert Instructors",
          description: "Our team of certified IELTS instructors has a proven track record of helping students achieve their desired scores. With years of experience and in-depth knowledge of the IELTS format, our instructors guide you through every aspect of the test—Listening, Reading, Writing, and Speaking.",
          imageUrl: "/images/icons/number-2.svg",
        },
        { 
          title: "Flexible Learning Options",
          description: "We offer flexible learning options that fit your schedule. Choose from online classes, in-person sessions, or hybrid programs that combine the best of both worlds. No matter where you are in the UAE, Dar Aluloom International ensures that high-quality IELTS preparation is accessible to you.",
          imageUrl: "/images/icons/number-3.svg",
        },
        { 
          title: "Innovative Learning Tools",
          description: "Stay ahead with our state-of-the-art learning tools and resources. Our courses include interactive practice tests, mock exams, and real-time feedback. Our innovative approach helps you understand the test format, identify your weaknesses, and turn them into strengths.",
          imageUrl: "/images/icons/number-4.svg",
        },
        { 
          title: "Comprehensive Study Materials ",
          description: "Gain access to a wealth of study materials, including practice tests, sample essays, and speaking prompts. Our resources are continuously updated to reflect the latest IELTS trends and requirements, ensuring you’re always prepared for what’s next.",
          imageUrl: "/images/icons/five-1.svg",
        },
        
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
      <Layout>
      <InnerBannerDesign
        title="IELTS Test Preparation in Dubai" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/ielts.jpg"
    />
       <OurEducational
          subtitle="IELTS Test Preparation in Dubai" 
          title=" Your Gateway to Global Opportunities" 
          paradescription="Achieve Your Dreams – At Dar Aluloom International, we understand that the IELTS (International English Language Testing System) is more than just a test—it’s your gateway to studying, working, and living in English-speaking countries. Our comprehensive IELTS Test Preparation in Dubai is designed to help you achieve the band score you need with confidence and ease."
          aboutItems={aboutItems} 
          imageSrc="/images/service/sat.png" 
          button={true}
        />
        <div className="pb-[100px]">
            <Container>
            <div className="text-center py-[40px] bg-[#28aa4a] rounded-xl text-white">
                <h2 className="pb-3 text-[#1a1a1a]">Unlock Your Potential with Dar Aluloom International</h2>
                <p className="max-w-[1000px] mx-auto">Join the thousands of successful students who have achieved their dreams with Dar Aluloom International’s IELTS Test Preparation in Dubai. Whether you’re aiming for top universities, career advancement, or immigration, our expert guidance will help you reach your goals.</p>
                </div>
            </Container>
        </div>
       <ProgramsSlider programSlides={slidesData} title="International Test Prep Programs"/>
       <CtaBlock/>
        <WhyUs 
          whyus={whyusData}
          title="Our Step-by-Step IELTS Prep Plan"
          subtitle="Prepare with Confidence"
        />
        
        <Faq faqs={faqData}/>
      </Layout>
    </>
  );
}