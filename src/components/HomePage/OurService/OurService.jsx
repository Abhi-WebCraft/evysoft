
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/HomePage/OurService/OurService.module.css"; 
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";

const ourservices = [
    {   
        number: "1",
        image: "/images/abhi/ovrsection.jpg",
        title: "Custom Design, No Templates",
        description:
            "We design every website from scratch — tailored to your brand and goals. No cookie-cutter stuff here.",
        link: "/education-consultants-in-dubai",
    },
    {
        number: "2",
        image: "/images/abhi/ovrsection3.jpg",
        title: "Lightning-Fast Performance",
        description:
            "Our websites are optimized for speed, ensuring quick load times, smooth user experience, and higher Google rankings.",
        link: "/subject-tutoring-in-uae-dubai",
    },
    { 
        number: "3",
        image: "/images/abhi/ovrsection1.jpg",
        title: "Fully Responsive & Mobile Ready",
        description:
            "Whether it’s desktop, tablet, or mobile — your site will look and perform perfectly on every device.",
        link: "/test-preparation-in-uae",
    },
   
];

export default function CaseStudies() {
    return (
        <section className={styles.servicesection}>
            <Container>
                <div className="max-w-[1000px] mx-auto text-center mb-[50px]">
                    <SectionTitle
                        subtitle="What We Offer" 
                        title="Our Remarkable Services" 
                    />
                </div>
                <div className="lg:grid lg:grid-cols-3 lg:gap-10 md:grid md:grid-cols-2 md:gap-6 sm:grid sm:grid-cols-1">
                    {ourservices.map((ourservice, index) => (
                        <Link key={index} href={ourservice.link}>
                            <div className={`relative mb-6 overflow-hidden group ${styles.serviceCard}`}>
                                <div className={`relative overflow-hidden case-study-image ${styles.serviceImage}`}>
                                    <Image
                                        src={ourservice.image}
                                        alt={`${ourservice.title} image`}
                                        width={1536}
                                        height={1024}
                                        className="object-cover w-ful xl:h-[300px]"
                                        loading="lazy"
                                        quality={100}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 px-4 py-8 h-[180px]">
                                    <h4 className="text-[25px] font-semibold text-[#000]">{ourservice.title}</h4> 
                                    <p className="">{ourservice.description}</p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-4 border-t">
                                    <p className="uppercase text-[15px] font-semibold text-[#000]">Read More</p>
                                    <Image 
                                        src="/images/abhi/fast-forward.svg" 
                                        alt="Fast forward icon" 
                                        width={13} 
                                        height={13} 
                                        className="w-[13px] h-[13px]"
                                    />
                                </div>        
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
