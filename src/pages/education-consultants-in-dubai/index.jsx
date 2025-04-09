import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import About from "@/components/HomePage/About/About";
import InnerBannerDesign from "@/components/Common/InnerBannerDesign";
import Faq from "@/components/Common/Faq";
import Points from "@/components/Common/Points";
import WhyUs from "@/components/Common/WhyUs";
import OurEducational from "@/components/Comman/OurEducational";
import InnerCta from "@/components/Common/InnerCta";
import Key from "@/components/HomePage/Key/Key";

export default function Home() {
    const PageMeta = 
        {
        title: "Expert Education Consultants in Dubai | Dar Aluloom International",
        description:"Looking for expert education consultants in Dubai? Dar Aluloom International offers top educational services to help you achieve your academic goals."
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Education Consultants in Dubai", href: "/education-consultants-in-dubai" },
      ];

      const aboutItems = [
       
      ];



      const pointsData = [
        {
          id: 1,
          imageSrc: "/images/points/University-Selection.png",
          imageAlt: "University Selection image",
          title: "University Selection",
          description:
            "Helping students identify the best universities and programs that align with their academic goals and career aspirations.",
          animationDuration: 400,
        },
        {
          id: 2,
          imageSrc: "/images/points/Application-Assistance.png",
          imageAlt: "Application Assistance image",
          title: "Application Assistance",
          description:
            "Providing guidance on crafting compelling personal statements, writing effective essays, and preparing strong application packages.",
          animationDuration: 800,
        },
        {
          id: 3,
          imageSrc: "/images/points/visa.png",
          imageAlt: "Visa and Immigration Procedures image",
          title: "Visa and Immigration Procedures",
          description:
            "Assisting students with visa applications, immigration formalities, and other documentation requirements.",
          animationDuration: 1200,
        },
        {
            id: 4,
            imageSrc: "/images/points/test-prep.png",
            imageAlt: "Test Preparation image",
            title: "Test Preparation",
            description:
              " Offering specialized training for standardized tests like the SAT, ACT, IELTS, and TOEFL etc.",
            animationDuration: 1600,
          },
          {
            id: 5,
            imageSrc: "/images/points/scholarships-2.png",
            imageAlt: "Financial Aid and Scholarships image",
            title: "Financial Aid and Scholarships",
            description:
              "Advising students on scholarships, grants, and other financial aid options.",
            animationDuration: 1600,
          },
      ];

      const faqData=[
        {   
            number:"01",
            question: "What services do educational consultants in Dubai offer?",
            answer: "Educational consultants provide a range of services, including academic counseling, college admissions guidance, test preparation (SAT, ACT, UCAT, IELTS etc), subject-specific tutoring, and career counseling. They help students identify suitable programs, streamline applications, and prepare for success.",
        },
        {   
            number:"02",
            question: " Why should I choose Dar Aluloom International for educational consultancy?",
            answer: "Dar Aluloom International is a trusted name in Dubai, offering personalized services tailored to your academic goals. With expert consultants, comprehensive resources, and a commitment to excellence, we ensure you’re well-prepared for success in your educational journey.",
        },
        {   
            number:"03",
            question: " How can Dar Aluloom help with college admissions?",
            answer: "We guide students through every step of the college admissions process, from selecting universities to crafting compelling applications. We specialize in admissions to top global colleges and assist with entrance exams like SAT, ACT, UCAT, and IELTS etc.",
        },
        {   
            number:"04",
            question: "Do you offer test preparation services?",
            answer: "Yes, we offer targeted preparation for a range of tests, including SAT, ACT, IELTS, UCAT, and more. Our experienced instructors provide tailored strategies, practice tests, and personalized feedback to help students achieve their desired scores.",
        },
        {   
            number:"05",
            question: " Can I get personalized tutoring in specific subjects?",
            answer: "Absolutely! We offer one-on-one subject tutoring in a variety of disciplines. Our experienced tutors provide customized lesson plans to suit your learning style and academic needs.",
        },
        {   
          number:"06",
          question: " Do you assist with career counseling?",
          answer: "Yes, our team of experts provides career counseling to help you identify your strengths and align them with suitable career paths. We guide students toward programs and opportunities that match their aspirations.",
      },
      {   
          number:"07",
          question: " How can Dar Aluloom support students interested in studying abroad?",
          answer: "Our consultants have extensive experience with international education systems. We help with university selection, application processes, test preparation, visa assistance, and more to ensure a smooth transition to studying abroad.",
      },
      {   
          number:"08",
          question: " What is the process to get started with Dar Aluloom International?",
          answer: "Simply contact us through our website or call our office to schedule a consultation. During the initial meeting, we’ll discuss your goals and create a customized plan to achieve them.",
      },
      {   
          number:"09",
          question: "Are your services available for students of all ages?",
          answer: "Yes, we cater to students from different age groups, including high school, undergraduate, and postgraduate levels. Whether you need academic support or career guidance, we’re here to help.",
      },
    ];

    const whyusData = [
      {
        title:"Personalized Guidance",
        description:" We understand that every student is unique. Our consultants provide tailored advice to meet your specific needs.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Comprehensive Services",
        description:"Our comprehensive range of services ensures a seamless transition to your desired institution.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Expert Knowledge",
        description:"Our team stays updated with the latest trends and regulations in international education.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Global Network",
        description:" We have strong connections with universities and institutions worldwide.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Proven Track Record",
        description:" Our success stories speak for themselves. We have helped numerous students secure admissions to top-tier universities.",
        image:"/images/icons/guidance.svg",
      },
    ];

    const serviceData = [
      {   
          number:"1",
          image: "/images/icons/guidance-1.svg",
          title: " Expert Consultants",
          description:
              "Our experienced consultants offer unmatched guidance, ensuring optimal academic and career decisions for a brighter future.",
          link: "#",
      },
      {
          number:"2",
          image: "/images/icons/approach.svg",
          title: "Customised Approach",
          description:
              " We craft personalized solutions, addressing unique academic needs to unlock each student's full potential.",
          link: "#",
      },
      { 
          number:"3",
          image: "/images/icons/solution.svg",
          title: "Dynamic Solutions",
          description:
              " We embrace innovative strategies to provide cutting-edge solutions, ensuring an exceptional and dynamic educational experience.",
          link: "#",
      },
      { 
          number:"4",
          image: "/images/icons/compliance.svg",
          title: "Accountability",
          description:
              " We prioritize honest communication, accountability and clear processes, building trust and confidence at every step of your journey.",
          link: "#",
      },  
  ];

     const innerCtaData = [
        {
          heading: "Your Journey to Excellence Starts Here!",
          description:
            "At Dar Aluloom International, we provide expert educational consultancy, tailored test preparation, and personalised subject tutoring to help you achieve your academic and professional aspirations. With our global expertise and innovative solutions, we guide students toward success while opening doors to world-class opportunities. Partner with us to unlock your potential and transform your future.",
        },
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
      <Layout>
      <InnerBannerDesign
        title="Education Consultants in Dubai" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/education.jpg"
    />
       <OurEducational
                       subtitle="Transform Your Aspirations into Achievements" 
                       title="Education Consultant in Dubai" 
                       paradescription="In Dubai’s fast-paced and diverse educational landscape, Dar Aluloom International is offering the right guidance. Educational consultants in Dubai play a vital role in shaping students' futures by offering expert advice, personalized strategies, and access to global academic opportunities. Dar Aluloom International stands out as a premier educational consultancy, dedicated to empowering students and professionals to achieve their goals."
                       aboutItems={aboutItems} 
                       imageSrc="/images/service/education-consultancy.png" 
                       button={true}
                     />
              <Points points={pointsData} title="What Do Educational Consultants in Dubai Do?"/>
               <WhyUs whyus={whyusData} title="Why Choose Dar Aluloom International?" content="At Dar Aluloom International, we are committed to providing exceptional educational consultancy services. Our team of experienced professionals is dedicated to helping you achieve your academic dreams. Here's why you should choose us:"/>
        <Faq faqs={faqData}/>
        <InnerCta innerCta={innerCtaData}/>
        <Key services={serviceData}  title="We're Your Reliable Education Consultants" />
      </Layout>
    </>
  );
}