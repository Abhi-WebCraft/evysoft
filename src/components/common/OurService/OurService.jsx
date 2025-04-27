
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/common/OurService/OurService.module.css"; 
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";

const ourservices = [
    {   
        number: "1",
        image: "/images/services/service3.png",
        title: "Artifacia Sensitivo",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptas porro, assumenda, laudantium sit ab officia quae quas harum, nobis numquam voluptatibus officiis aspernatur labore nihil! Ratione inventore atque non.",
        link: "#",
    },
    {
        number: "2",
        image: "/images/services/service1.png",
        title: "Artifacia Sensitivo",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptas porro, assumenda, laudantium sit ab officia quae quas harum, nobis numquam voluptatibus officiis aspernatur labore nihil! Ratione inventore atque non.",
        link: "#",
    },
    { 
        number: "3",
        image: "/images/services/service2.png",
        title: "Artifacia Sensitivo",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptas porro, assumenda, laudantium sit ab officia quae quas harum, nobis numquam voluptatibus officiis aspernatur labore nihil! Ratione inventore atque non.",
        link: "#",
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
                                        className="object-cover w-full h-[300px]"
                                        loading="lazy"
                                        quality={100}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 px-4 py-8 h-[240px]">
                                    <h4 className="text-[25px] font-semibold text-[rgb(84,132,255)]">{ourservice.title}</h4> 
                                    <p className="">{ourservice.description}</p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-4 border-t">
                                    <p className="uppercase text-[15px] font-semibold text-[rgb(84,132,255)]">Read More</p>
                                    <Image 
                                        src="/images/icons/arrows.svg" 
                                        alt="Fast forward icon" 
                                        width={13} 
                                        height={13} 
                                        className="w-[35px] h-[35px]"
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
