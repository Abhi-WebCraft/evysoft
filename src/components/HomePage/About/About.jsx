import styles from "@/components/HomePage/About/About.module.css"; 
import Btn from "@/components/Layout/Btns/Btn";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import Image from "next/image";
const about =[
    {
        image:"/images/icons/check.svg",
        text:"Certified Company",
    },
    {
        image:"/images/icons/check.svg",
        text:"Expart Team",
    },
  
];
export default function About (){
    return (
        <section className={styles.section}>
            <Container>
                <div className="grid-cols-1 gap-8 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 items-center">
                    <div>
                        <Image src="/images/home/about_1_1.png" alt="" width="934" height="824" className=" w-[100%] h-[100%] object-cover"/>
                    </div>
                    <div >
                       <div className={'flex flex-col gap-6 {styles.aboutContent}'}>
                       <SectionTitle
                            subtitle="About The Company"
                            title="We Are Increasing Business Success With IT Solution"
                        />
                        <div className="flex flex-col gap-4">
                            <p>Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate competitive resource and holistic synergy. Uniquely generate efficient schemas before future.</p>
                            {/* <p className="text-[#261FB3]">Here is the list of various college admissions consultation services we offer :</p> */}
                            <div className="flex flex-col gap-3">
                            {about.map((aboutus, index) => (
                              <div className="flex items-center gap-3">
                                <Image 
                                src={aboutus.image}
                                alt="vector" 
                                width="30" 
                                height="30" 
                                className={`w-[40px] h-[40px] ${styles.abouticon}`} 
                                />
                                <h4 className="font-medium text-[17px]">{aboutus.text}</h4>
                              </div>
                            ))}
                            </div>
                        </div>
                        <div>
                            <Btn title="Contact Us" link="#"/>
                        </div>
                       </div>
                        
                    </div>
                </div>
            </Container>
        </section>
    )
}
