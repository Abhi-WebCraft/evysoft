import Image from "next/image";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";
export default function HomeBanner() {
return (
    <>
        <section className="bg-[#f7f8fd] section h-[800px] flex flex-col items-center justify-center overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2">
                    <div className="new-bn-text relative">
                        <Image src="/images/bg/hero_shape_3_1.png" alt="" width={500} height={500} className=" absolute top-[-150px] left-0 animate-slide-up-down"/>
                        <span >SECURE & IT SERVICES</span>
                        <h1>Webteck Best IT Solution 2024</h1>
                        <p>Energistically harness ubiquitous imperatives without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experiences and front-end.</p>
                        <Btn title="Contact Us" link=""/>
                    </div>
                    <div className=" relative new-bn-image">
                    <Image src="/images/bg/hero_img_3_1-1.png" alt="" width={500} height={500} className=" absolute top-[-220px] left-[70px] z-10"/> 
                    </div>
                </div>
            </Container>
        </section>
    </>
)
}