import Image from "next/image";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";
export default function HomeBanner() {
    return (
        <>
            <section className="bg-[#f7f8fd] section h-[550px] lg:h-[580px] xl:h-[800px] flex flex-col items-center justify-center overflow-hidden">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 py-[60px] lg:pt-[100px]">
                        <div className="new-bn-text relative">
                            <Image src="/images/bg/hero_shape_3_1.png" alt="" width={500} height={500} className=" absolute top-[-150px] left-0 animate-slide-up-down" />
                            <span data-aos="fade-down-right">Welcome to EvySoft</span>
                            <h1 data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-easing="ease-in-sine" className="text-[]">Building the Future of Software Innovation</h1>
                            <p data-aos="fade-right"
                                data-aos-offset="300">At EvySoft, we create powerful, custom-built software solutions that accelerate business growth and digital transformation.</p>
                           <p data-aos="fade-down-right"> <Btn title="Contact Us" link="" /></p>
                        </div>
                        <div className=" relative new-bn-image" data-aos="fade-down-left">
                            <Image src="/images/bg/hero_bg_10_1.png" alt="" width={500} height={500} className=" absolute lg:top-[-180px] xl:top-[-220px] lg:left-[70px] z-10  banner-img-new xl:block lg:block hidden" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}