import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import InnerBannerDesign from "@/components/Common/InnerBannerDesign";
import WhyUs from "@/components/Common/WhyUs";
import OurEducational from "@/components/Comman/OurEducational";
import CtaBlock from "@/components/HomePage/CtaBlock";

export default function Home() {
    const PageMeta = 
        {
        title: "Expert Subject Tutoring in Dubai, UAE | Dar Aluloom International",
        description:"Get personalized subject tutoring in Dubai, UAE with Dar Aluloom International, designed to meet your unique academic needs and learning success."
    }

    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Subject Tutoring in UAE", href: "/subject-tutoring-in-uae-dubai" },
      ];
     
      const aboutItems = [
        { image: "/images/icons/check.svg", text: "Comprehensive subject tutorials" },
        { image: "/images/icons/check.svg", text: "Personalized tutoring services" },
        { image: "/images/icons/check.svg", text: "All Curriculums Covered" },
        { image: "/images/icons/check.svg", text: "Comprehensive study materials and practice questions" },
        { image: "/images/icons/check.svg", text: "Active learning and engagement" },
        { image: "/images/icons/check.svg", text: "Personalized guidance and support" },
        { image: "/images/icons/check.svg", text: "Experienced tutors" },
        { image: "/images/icons/check.svg", text: "Customized lesson plans" },
      ]; 

    const whyusData = [
      {
        title:"Personalized Consultation",
        description:"We initiate the process by conducting personalized consultations to understand your unique academic goals, strengths, and areas for improvement.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Customized Planning",
        description:"Following the consultation, we create a customized plan tailored to address your specific needs and objectives, offering expert advice and strategic insights.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Comprehensive Support",
        description:"Throughout your academic journey, we provide comprehensive support, granting access to study materials, practice questions, and exam tips to enrich your learning experience.",
        image:"/images/icons/guidance.svg",
      },
      {
        title:"Ongoing Guidance",
        description:"Our team of experienced tutors delivers continuous guidance and support, offering personalized tutoring sessions, bespoke lesson plans, and individualized attention to ensure your academic success.",
        image:"/images/icons/guidance.svg",
      },
    ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
      <Layout>
      <InnerBannerDesign
        title="Subject Tutoring in UAE" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/smm-bg-1.png"
    />
    <OurEducational
          subtitle="What We Do" 
          title="Personalized Subject Tutoring Services" 
          paradescription="At our core, we specialize in offering comprehensive subject tutoring in UAE. Our subject tutorials are tailored to enhance your academic journey. Whether you’re seeking supplementary resources or aiming to support your child’s education, our tutorials cover a broad spectrum of subjects meticulously crafted by experienced educators. Designed to be comprehensive, easily understandable, and engaging, our subject tutoring in Dubai empowers you to confidently tackle challenging topics and achieve academic success."
          aboutItems={aboutItems} 
          imageSrc="/images/service/subject-tutor-2.png" 
        />
        <CtaBlock/>
        <WhyUs whyus={whyusData} title="Why Choose Us"/>
      </Layout>
    </>
  );
}