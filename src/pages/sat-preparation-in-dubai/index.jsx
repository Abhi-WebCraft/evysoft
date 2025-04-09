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
        title: "SAT Preparation in Dubai, UAE | Dar Aluloom International",
        description:"Excel in SAT exams with Dar Aluloom's expert preparation services in Dubai, UAE. Maximize your test scores and college opportunities today!"
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "SAT Preparation in Dubai", href: "/sat-preparation-in-dubai" },
      ];
      const aboutItems = [
      ];

      const faqData=[
        {   
            number:"01",
            question: "What is the SAT, and why is it important?",
            answer: "The SAT is a standardized test used by many colleges and universities for admissions. It assesses your math, reading, and writing skills, and your SAT score plays a key role in gaining admission to top universities globally.",
        },
        {   
            number:"02",
            question: "What does your SAT preparation program include?",
            answer: "Our SAT preparation program covers all sections of the exam—Math, Evidence-Based Reading, and Writing. We provide in-depth lessons, practice tests, strategic test-taking techniques, and personalized tutoring to help you achieve your highest score.",
        },
        {   
            number:"03",
            question: "How does your program help with the Math section?",
            answer: "We teach students how to break down complex math problems into simple steps. Our experienced tutors cover topics such as algebra, geometry, and advanced math, equipping you with the strategies to solve problems confidently and efficiently.",
        },
        {   
            number:"04",
            question: "What skills will I learn in the Evidence-Based Reading and Writing sections?",
            answer: "Our program focuses on critical reading strategies to help you identify key information in texts quickly and accurately. We also guide you in writing clear and well-organized essays, strengthening both your reading comprehension and writing skills.",
        },
        {   
            number:"05",
            question: "How do you tailor the SAT preparation to individual students?",
            answer: "We offer personalized attention, where tutors assess your strengths and weaknesses. The curriculum is then customized to address your specific needs, ensuring you get the targeted help necessary for success.",
        },
        {   
          number:"06",
          question: "What kind of practice do students get during the program?",
          answer: "Our program includes extensive practice tests and drills that mimic the real SAT exam. This helps students become familiar with the test format and improve time management, making them more confident on test day.",
      },
      {   
        number:"07",
        question: "What strategies do you teach for maximizing SAT scores?",
        answer: "We teach various strategic test-taking techniques, including time management, process of elimination, and guessing strategies. These methods help students approach the exam efficiently and score higher.",
      },
      {
        number:"08",
        question: "Do you offer flexible learning options?",
        answer: "Yes, we offer in-person classes, online courses, and one-on-one tutoring sessions to fit your schedule and learning preferences.",
      },
      {
        number:"09",
        question: "How experienced are your tutors?",
        answer: "Our tutors are highly qualified with years of experience in preparing students for the SAT. They have a proven track record of helping students achieve impressive scores and gain admission to top universities.",
      },
      {
        number:"09",
        question: "What kind of results have your students achieved?",
        answer: "Our students consistently achieve high SAT scores, leading to admission at prestigious universities around the world.",
      },
      {
        number:"09",
        question: "How can I enroll in the SAT preparation program?",
        answer: "You can enroll by contacting us directly to schedule a consultation. We will provide you with all the necessary information about our courses and help you get started on your SAT preparation journey.",
      },
      {
        number:"10",
        question: "Is there any support after enrolling?",
        answer: "Yes, we offer continuous support throughout your preparation, ensuring you stay motivated and focused on your goals in a friendly and encouraging learning environment.",
      },
   
    ];

    const whyusData = [
      {
        title:"Proven Results",
        description:"Our students consistently achieve impressive SAT scores, gaining admission to top universities worldwide.",
        image:"/images/icons/focus.svg",
      },
      {
        title:"Experienced Tutors",
        description:"Our team of experienced educators is dedicated to your success and will provide you with the support you need to excel.",
        image:"/images/icons/professional.svg",
      },
      {
        title:"Flexible Learning Options",
        description:"We offer a variety of learning formats, including in-person classes, online courses, and one-on-one tutoring, to accommodate your schedule and preferences.",
        image:"/images/icons/learning.svg",
      },
      {
        title:"Supportive Learning Environment",
        description:"Our friendly and supportive environment fosters a positive learning experience, helping you stay motivated and focused.",
        image:"/images/icons/book-1.svg",
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
        title="SAT Preparation in Dubai" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/sat.jpg"
    />
       <OurEducational
          subtitle="SAT Preparation in Dubai" 
          title="Your Gateway to Global Universities" 
          paradescription="At Dar Aluloom International, we understand that the SAT is more than just an exam; it’s a stepping stone to your dream university. Our comprehensive SAT Preparation in Dubai program will equip you with the knowledge, skills, and confidence to achieve your highest possible score."
          aboutItems={aboutItems} 
          imageSrc="/images/service/sat-1.png" 
          button={true}
        />
        <AboutRightLeft
          subtitle="Turn Complex Problems into Simple Solutions" 
          title="Mastering SAT Math" 
          paradescription="The Math section of the SAT can be challenging, but with Dar Aluloom International, you’ll learn how to approach every question confidently. Our tutors focus on breaking down complex problems into manageable steps, ensuring that you understand the underlying concepts and can apply them effectively. Whether it’s algebra, geometry, or advanced math, we provide the tools and strategies you need to excel."
          aboutItems={aboutItems} 
          imageSrc="/images/service/uk.png" 
          button={true}
        />
        <div className="pb-[100px]">
            <Container>
            <div className="text-center py-[40px] bg-[#28aa4a] rounded-xl text-white">
                 <h2 className="pb-3 text-[#1a1a1a]">Excelling in Evidence-Based Reading and Writing</h2>
                <p className="max-w-[1000px] mx-auto">The Evidence-Based Reading and Writing sections of the SAT require strong analytical and comprehension skills. Our program emphasizes reading strategies that help you quickly identify key information, understand complex texts, and answer questions accurately. Additionally, our writing experts guide you in crafting clear, well-organized essays that showcase your ideas and writing ability.</p>
                </div>
            </Container>
        </div>
       <ProgramsSlider programSlides={slidesData} title="Our Approach" subtitle="Practice,Refine, and Conquer"/>
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