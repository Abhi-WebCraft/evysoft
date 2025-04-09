import styles from "@/components/HomePage/About/About.module.css"; 
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import Image from "next/image";
const about =[
    {
        image:"/images/icons/check.svg",
        text:"Modern Tech Stack, Next.js, React, Tailwind CSS",
    },
    {
        image:"/images/icons/check.svg",
        text:"Goal-Oriented, Built to convert & scale",
    },
    {
        image:"/images/icons/check.svg",
        text:"Client-Centric, You imagine, we build",
    },
];
export default function About (){
    return (
        <section className={styles.section}>
            <Container>
                <div className="grid-cols-1 gap-8 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
                    <div>
                        <Image src="/images/abhi/about.jpg" alt="" width="934" height="824" className=" w-[100%] h-[100%] object-cover"/>
                    </div>
                    <div >
                       <div className={'flex flex-col gap-6 {styles.aboutContent}'}>
                       <SectionTitle
                            subtitle="About The Company"
                            title="Turning Ideas into Scalable Digital Experiences"
                        />
                        <div className="flex flex-col gap-4">
                            <p>We’re a team of passionate developers and designers dedicated to building fast, responsive, and scalable websites that help businesses grow. Whether you're a startup or an established brand, we craft tailored digital solutions that meet your unique needs.</p>
                            {/* <p className="text-[#261FB3]">Here is the list of various college admissions consultation services we offer :</p> */}
                            <div className="flex flex-col gap-3">
                            {about.map((aboutus, index) => (
                              <div className="flex items-center gap-3">
                                <Image 
                                src={aboutus.image}
                                alt="vector" 
                                width="30" 
                                height="30" 
                                className={`w-[30px] h-[30px] ${styles.abouticon}`} 
                                />
                                <h4 className="font-medium text-[17px]">{aboutus.text}</h4>
                              </div>
                            ))}
                            </div>
                        </div>
                       </div>
                        
                    </div>
                </div>
            </Container>
        </section>
    )
}
