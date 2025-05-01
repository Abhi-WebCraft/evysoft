import Image from "next/image";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";
export default function HomeBanner() {
    return (
        <>
            <section className="bg-[#f7f8fd] section h-[700px] lg:h-[750px] xl:h-[800px] flex flex-col items-center justify-center overflow-hidden">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 py-[60px] lg:pt-[100px]">
                        <div className="new-bn-text relative">
                            <Image src="/images/bg/hero_shape_3_1.png" alt="" width={500} height={500} className=" absolute top-[-150px] left-0 animate-slide-up-down" />
                            <span data-aos="fade-down-right">SECURE & IT SERVICES</span>
                            <h1 data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-easing="ease-in-sine">Webteck Best IT Solution 2024</h1>
                            <p data-aos="fade-right"
                                data-aos-offset="400">Energistically harness ubiquitous imperatives without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experiences and front-end.</p>
                           <p data-aos="fade-down-right"> <Btn title="Contact Us" link="" /></p>
                        </div>
                        <div className=" relative new-bn-image" data-aos="fade-down-left">
                            <Image src="/images/bg/hero_img_3_1-1.png" alt="" width={500} height={500} className=" absolute lg:top-[-220px] lg:left-[70px] z-10  banner-img-new" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}