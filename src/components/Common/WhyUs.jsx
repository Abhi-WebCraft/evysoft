import Link from "next/link";
import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function WhyUs ({whyus, subtitle, title, content}){
    return (
        <section className="section">
            <Container>
                <div className="text-center">
                    <SectionTitle
                    subtitle={subtitle}
                        title={title}
                        content={content}
                    />
                </div>
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-[50px] case-temp-main">
                    {whyus.map((whyus, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col gap-4 solution-box" 
                            style={{ backgroundColor: whyus.bg }} 
                            data-aos="fade-up" 
                            data-aos-duration={whyus.time}
                        >
                        <div className="flex items-center justify-between">
                        <h4 className="text-[20px] text-[#28aa4a]">{whyus.title}</h4>
                            <Image
                                src={whyus.image}
                                alt={whyus.title}
                                width={45}
                                height={45}
                                className="w-[45px] h-[45px] "
                            />
                            
                            </div>
                            <p>{whyus.description}</p>
                        </div>
                    ))}
             
                </div>
            </Container>
        </section>
    )
}