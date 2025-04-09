import InnerBanner from "@/components/Comman/InnerBanner";
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import OurEducational from "@/components/Comman/OurEducational";
import InnerBannerDesign from "@/components/Common/InnerBannerDesign";
import Faq from "@/components/Common/Faq";
import CtaBlock from "@/components/HomePage/CtaBlock";
import Key from "@/components/HomePage/Key/Key";
export default function Aboutus(){
const PageMeta = 
{
title: "About Us | Dar Aluloom International",
description:"Learn more about Dar Aluloom International & see how we empower students with expert tutoring, test prep, and college admissions consulting."
}
const breadcrumbs = [
{ label: "Home", href: "/" },
{ label: "About Us", href: "/about" },
];
const aboutItems = [

];

const faqData=[
    {   
        number:"01",
        question: "What educational services does Dar Aluloom International offer?",
        answer: "Dar Aluloom International offers a comprehensive suite of educational services, including expert consultancy, test preparation, subject tutoring, and innovative e-learning solutions tailored to your needs.",
    },
    {   
        number:"02",
        question: "How can Dar Aluloom International help me with my test preparation?",
        answer: "We provide personalized and targeted test preparation services designed to help you excel in your exams. Our experienced tutors offer comprehensive study plans, practice tests, and strategies to optimize your performance.",
    },
    {   
        number:"03",
        question: "What sets Dar Aluloom International apart from other educational consultancies?",
        answer: "At Dar Aluloom International, we prioritize personalized attention and tailored solutions for each client. Our team of experts is dedicated to understanding your unique goals and needs, ensuring that you receive the highest quality support and guidance throughout your educational journey.",
    },
    {   
        number:"04",
        question: "Does Dar Aluloom International offer services for professionals?",
        answer: "Yes, in addition to our educational services, we provide professional development solutions, including resume writing assistance, interview preparation, and career coaching. Whether you're starting your career or looking to advance, we're here to help you achieve your professional goals.",
    },
    {   
        number:"05",
        question: "How can I get started with Dar Aluloom International's services?",
        answer: "Getting started is easy! Simply reach out to us through our website or contact our team directly. We'll schedule a consultation to discuss your needs and goals, and then create a personalized plan to help you succeed.",
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
return (
<>
<PageHead PageMeta={PageMeta} />
<Layout>
    <InnerBannerDesign 
        title="About Us" 
        breadcrumbs={breadcrumbs} 
        image="/images/banner/about-bg-1.jpg"
    />
    <OurEducational 
        title="Take the First Step Towards Your Global Future!" 
        subtitle="What We Do" 
        paradescription="Dar Aluloom International, established in 2023, is your trusted destination for comprehensive educational and professional services designed to meet your unique goals. From expert educational consultancy and targeted test preparation to personalized subject tutoring, we are committed to guiding you on your path to success. Our mission is to help you enhance your academic performance, unlock your full potential, and pursue new opportunities. Experience excellence, dedication, and growth – only at Dar Aluloom International."
        aboutItems={aboutItems} 
        imageSrc="/images/bg/about-image.png" 
        />
        <CtaBlock/>
        <Key services={serviceData}  subtitle="Key Differentiators" title="We're Your Reliable Education Consultants" />
        <Faq faqs={faqData}/>
</Layout>
</>
)
}