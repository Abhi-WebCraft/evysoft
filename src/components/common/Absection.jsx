import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";
import SectionTitle from "../Layout/SectionTitle";


const Absection = () => {
  return (
        <section className=" pb-[100px]">
            <Container>
                <div className="grid lg:grid-cols-12">
                    <div className=" col-span-6">
                        <Image src="/images/abhi/img-1.png" alt=""width={500} height={500} className="w-full h-[600px] object-contain"/>
                    </div>
                    <div className=" col-span-6">
                        <SectionTitle subtitle="AI for Social" title="AI for Social Good Leveraging Technology for Positive" content="AI Artificial Intelligence is a branch of computer science that focuses on the development of intelligent machines that can perform tasks that typically require"/>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="border-4 p-4 bg-[#fff] border-[#684df4] rounded-[30px]">
                                <span className="text-[62px] font-[900]">01</span>
                                <h3>Abhishek</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ab accusamus ad libero eaque quidem exercitationem, eligendi error tempore numquam maxime illum quisquam recusandae, quis voluptatibus sed est aut? Vel.</p>
                            </div>
                            <div className="border-4 p-4 bg-[#fff] border-[#684df4]  rounded-[30px]">
                                <span className="text-[62px] font-[900]">02</span>
                                <h3>Abhishek</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ab accusamus ad libero eaque quidem exercitationem, eligendi error tempore numquam maxime illum quisquam recusandae, quis voluptatibus sed est aut? Vel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

  );
};

export default Absection;
