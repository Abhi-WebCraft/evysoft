import Container from "@/components/Layout/Container";
import Image from "next/image";
import SectionTitle from "../Layout/SectionTitle";


export default function Services(){
    return (
        <section className="section mt-[50px] services_bg overflow-hidden">
            <Container>
                <div className="text-center mb-[50px] mx-auto max-w-[800px]">
                    <SectionTitle
                    subtitle="Work Process"
                    title="Easy, Dynamic, and optimal Workflow"
                    content="Unveiling the extraordinary power. delving into the exceptionally powerfull features of data analysis"
                />
                </div>
               <div className="grid lg:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4 " data-aos="fade-right">
                        <div className="py-9 px-8 bg-[#fff] flex items-center gap-10 rounded-[16px]">
                            <div>
                                <Image src="/images/icons/magnifying-glass.svg" alt="" width={500} height={500} className="w-[80px]"/>
                            </div>
                            <div>
                                <h3>Research</h3>
                                <p>We do research before we start any projects</p>
                            </div>
                        </div>
                        <div className="py-9 px-8 bg-[#fff] flex items-center gap-10 rounded-[16px]">
                            <div>
                                <Image src="/images/icons/blueprint.svg" alt="" width={500} height={500} className="w-[80px]"/>
                            </div>
                            <div>
                                <h3> Designing</h3>
                                <p>Designed according to client’s requirements</p>
                            </div>
                        </div>
                        <div className="py-9 px-8 bg-[#fff] flex items-center gap-10 rounded-[16px]">
                            <div>
                                <Image src="/images/icons/coding.svg" alt="" width={500} height={500} className="w-[80px]"/>
                            </div>
                            <div>
                                <h3>Development</h3>
                                <p>Developed by skilled developers team</p>
                            </div>
                        </div>
                        <div className="py-9 px-8 bg-[#fff] flex items-center gap-10 rounded-[16px]">
                            <div>
                                <Image src="/images/icons/checklist.svg" alt="" width={500} height={500} className="w-[80px]"/>
                            </div>
                            <div>
                                <h3>Live Testing</h3>
                                <p>After completing the work, live test have done</p>
                            </div>
                        </div>
                        
                    </div>
                    <div data-aos="fade-left">
                    <Image src="/images/home/process-image.jpg" alt="" width={500} height={500} className="w-full object-cover rounded-[40px]"/>
                    </div>
               </div>
            </Container>
        </section>
    )
}
