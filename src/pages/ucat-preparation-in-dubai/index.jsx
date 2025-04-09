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
import AboutRightLeft from "@/components/Common/Aboutrightleft";

export default function Home() {
    const PageMeta = 
        {
        title: "UCAT Test Preparation in Dubai, UAE | Dar Aluloom International",
        description:"Get the best UCAT test preparation in Dubai, UAE with Dar Aluloom. Ace your UCAT exam and secure your medical school admission now!"
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "UCAT Test Preparation in Dubai", href: "/ucat-preparation-in-dubai" },
      ];
      const aboutItems = [
      ];

      const faqData=[
        {   
            number:"01",
            question: "What is the UCAT?",
            answer: "The University Clinical Aptitude Test (UCAT) is a computer-based test designed to assess cognitive abilities like problem-solving, decision-making, and situational judgment, which are critical for admission to medical and dental schools.",
        },
        {   
            number:"02",
            question: "When is the UCAT held?",
            answer: "The UCAT is typically held annually between July and September. Registration usually opens in May, giving you ample time to prepare.",
        },
        {   
            number:"03",
            question: "How is the UCAT structured?",
            answer: "The UCAT is a two-hour test divided into five sections: Verbal Reasoning, which focuses on understanding and analyzing written information; Quantitative Reasoning, which tests numerical reasoning and problem-solving; Abstract Reasoning, which involves identifying patterns and relationships; Decision Making, which evaluates making informed decisions under pressure; and Situational Judgment, which assesses evaluating ethical and professional scenarios in healthcare.",
        },
        {   
            number:"04",
            question: "Why is the UCAT important?",
            answer: "Medical schools use UCAT scores to assess whether applicants have the right aptitude for a medical career. A strong UCAT score can give you a competitive advantage in the selection process.",
        },
        {   
            number:"05",
            question: "How does Dar Aluloom International’s UCAT preparation program work?",
            answer: "Our program offers tailored coaching, expert tutors, comprehensive study materials, and timed practice sessions to help you improve in areas where you need the most support. We provide one-on-one coaching and focus on critical thinking and decision-making skills.",
        },
        {   
          number:"06",
          question: "What study materials are provided in the UCAT preparation program?",
          answer: "We offer up-to-date resources, practice tests, and study guides that reflect the latest UCAT format. Our online portals allow access to learning materials anytime, anywhere.",
      },
      {   
        number:"07",
        question: "Do you offer mock exams?",
        answer: "Yes, we provide regular mock exams that simulate the actual UCAT experience, helping you become familiar with the test format and build your confidence.",
      },
      {
        number:"08",
        question: "How can I track my progress during the UCAT preparation?",
        answer: "Our program includes performance tracking tools, allowing you to monitor your progress, identify areas for improvement, and adjust your study plan accordingly.",
      },
      {
        number:"09",
        question: "How do I enroll in Dar Aluloom International’s UCAT preparation program?",
        answer: "To enroll, simply contact us for more details on our flexible coaching options. We’ll guide you through the process and help you start your preparation journey.",
      },
    ];

    const whyusData = [
      {
        title:"Online Portals",
        description:"Access a wealth of resources anytime, anywhere.",
        image:"/images/icons/focus.svg",
      },
      {
        title:"Mock Exams",
        description:"Regular mock exams mirror the UCAT, helping you build confidence.",
        image:"/images/icons/professional.svg",
      },
      {
        title:"Performance Tracking",
        description:"Monitor your progress and identify areas for improvement with our detailed analytics.",
        image:"/images/icons/learning.svg",
      },
    ];
    const slidesData = [
        { 
          title: "Expert Guidance	",
          description: "Our expert tutors work closely with you to identify your strengths and weaknesses, tailoring the curriculum to your specific needs.",
          imageUrl: "/images/icons/number-1.svg",
        },
        { 
          title: "Personalized Attention",
          description: "Our expert tutors work closely with you to identify your strengths and weaknesses, tailoring the curriculum to your specific needs.",
          imageUrl: "/images/icons/number-2.svg",
        },
        { 
          title: "Comprehensive Coverage	",
          description: "We cover all sections of the SAT, including Math, Evidence-Based Reading, and Writing, ensuring that you're well-prepared for every aspect of the exam.	",
          imageUrl: "/images/icons/number-3.svg",
        },
        { 
          title: "Extensive Practice	",
          description: "Our program includes a wide range of practice tests and drills to help you familiarize yourself with the exam format and improve your time management skills.",
          imageUrl: "/images/icons/number-4.svg",
        },
        { 
          title: "Strategic Test-Taking Techniques",
          description: "Learn effective strategies to maximize your score, such as time management, guessing techniques, and process of elimination.",
          imageUrl: "/images/icons/five-1.svg",
        },
        
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
      <Layout>
      <InnerBannerDesign
        title="UCAT Test Preparation in Dubai" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/ucat-11.jpg"
    />
       <OurEducational
          subtitle="UCAT Test Preparation in Dubai" 
          title="What is UCAT?" 
          paradescription="<p>The University Clinical Aptitude Test (UCAT)is a computer-based assessment designed to evaluate your cognitive abilities, crucial for admission to medical and dental schools in the United Kingdom, Singapore, Australia and New Zealand in their applicant selection process. It assesses your problem-solving, decision-making, and situational judgment skills.</p>
          <p><strong>Stay Ahead: Know the Test Timeline</strong></p>
          <p>The UCAT is typically held annually between July and September. Registrations open in May, giving you a window to plan and prepare. At Dar Aluloom International, we offer flexible coaching schedules to align with the UCAT timeline, ensuring you’re well-prepared ahead of your test date.</p>"
          aboutItems={aboutItems} 
          imageSrc="/images/service/sat.png" 
          button={true}
        />
        <div className="pb-[100px]">
            <Container>
            <div className="text-center py-[40px] bg-[#28aa4a] rounded-xl text-white">
                 <h2 className="pb-3 text-[#1a1a1a]">Why the UCAT Matters: Stand Out in the Competitive Medical Field</h2>
                <p className="max-w-[1000px] mx-auto">Medical schools use UCAT scores to select students who possess the right aptitude for a medical career. A high UCAT score enhances your application, giving you a competitive edge. That’s why Dar Aluloom International places a strong emphasis on preparing students for this essential test. accurately. Additionally, our writing experts guide you in crafting clear, well-organized essays that showcase your ideas and writing ability.</p>
                </div>
            </Container>
        </div>
        <AboutRightLeft
          title="UCAT Test Structure" 
          paradescription="<p>The UCAT is a two-hour test, with each subtest lasting between 12 to 32 minutes. The total score is 3600, with varying question types such as multiple-choice, true/false, and ranking-based questions.</p>
          <p><strong>The UCAT consists of five sections:</strong></p>
          <p><b>Verbal Reasoning:</b></p>
          <p>Assesses your ability to understand and analyze written information.</p>
          <p><b>Quantitative Reasoning:</b></p>
          <p>Measures your numerical reasoning and problem-solving skills.</p>
          <p><b>Abstract Reasoning:</b></p>
          <p>Tests your ability to identify patterns and relationships.</p>
          <p><b>Decision Making:</b></p>
          <p>Evaluates your ability to make informed decisions under time pressure.</p>
          <p><b>Situational Judgment:</b></p>
          <p>Assesses your understanding of ethical and professional scenarios in healthcare.</p>"
          aboutItems={aboutItems} 
          imageSrc="/images/service/canada.png" 
          button={true}
        />
        
       {/* <ProgramsSlider programSlides={slidesData} title="Our Approach" subtitle="Practice,Refine, and Conquer"/> */}
       <CtaBlock/>
        <WhyUs 
          whyus={whyusData}
          title="Innovative Learning Tools"
          subtitle="Innovative Learning Tools Interactive Learning: Engage with the Best Tools"
          content="Our UCAT prep program includes innovative learning tools, such as:"
        />
        
        <Faq faqs={faqData}/>
      </Layout>
    </>
  );
}