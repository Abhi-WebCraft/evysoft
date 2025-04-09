import Image from "next/image";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";
export default function HomeBanner() {
return (
<section className="relative bg-center bg-no-repeat bg-cover home-banner section" style={{ backgroundImage: "url('/images/bg/home-banner.jpg')" }}>
<div className="overlay"></div>
{/* Overlay */}
<Container>
    <div className="flex flex-col gap-7 max-w-[900px] home-banner-content">
        <h1 className="text-[54px] leading-[64px] font-bold uppercase text-white banner-head">
            strengthening your <span className="text-[#ff4a17]">business</span> <span>verticals</span>
        </h1>
        <p className="max-w-[700px] text-white text-[18px] leading-[28px]">
            We are #1 when it comes to providing comprehensive back-office solutions at cost-effective rates using both manual and automated process
        </p>
        <div>
            <Btn title="Get in touch" link="/contact-us" />
        </div>
        <div className="flex gap-10 banner-list-icon">
            <ul className="flex flex-col gap-4 text-white">
                <li className="flex items-center gap-4">
                    <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                    <p className="text-[18px] banner-list-points">ISO Certified</p>
                </li>
                <li className="flex items-center gap-4">
                    <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                    <p className="text-[18px] banner-list-points"> 25+ years in the industry</p>
                </li>
                <li className="flex items-center gap-4">
                    <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                    <p className="text-[18px] banner-list-points">15+ industry verticals</p>
                </li>
            </ul>
            <ul className="flex flex-col gap-4 text-white">
                <li className="flex items-center gap-4">
                    <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                    <p className="text-[18px] banner-list-points">ISO Certified</p>
                </li>
                <li className="flex items-center gap-4">
                    <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                    <p className="text-[18px] banner-list-points"> 25+ years in the industry</p>
                </li>
                <li className="flex items-center gap-4">
                    <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                    <p className="text-[18px] banner-list-points">15+ industry verticals</p>
                </li>
            </ul>
        </div>
    </div>
</Container>
</section>
)
}