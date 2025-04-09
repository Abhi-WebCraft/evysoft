import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Layout/Container";
import Btn from "../Layout/Btns/Btn";

export default function InnerBanner({ bgImage, heading, btnTitle, btnLink }) {
  return (
    <>
      <section 
        className="w-full md:h-[500px] h-[400px] lg:h-[600px] bg-center relative bg-cover" 
        style={{ 
          backgroundImage: ` linear-gradient(to right, rgb(0 0 0), rgba(0, 0, 0, 34%)), url(${bgImage})` 
        }} 
      >
        <Container>
          <div className="text-white w-full md:translate-y-32 translate-y-32 lg:translate-y-50">
            <h1 className="text-white text-[38px] md:text-[42px] md:leading-normal leading-[40px] lg:leading-normal lg:text-[64px] w-full md:w-[70%] lg:w-[70%]">
              {heading}
            </h1>
            <div className="mt-6">
              <Btn title={btnTitle} link={btnLink} />
            </div>
          </div>
        </Container>
        <div 
          className="w-full md:h-[100px] h-[70px] lg:h-[130px] bg-[#28aa4a] absolute bottom-[0px]" 
          style={{ clipPath: "polygon(0% 20%, 0px 0px, 60% 0%, 70% 100%, 59% 100%, 59% 100%, 0px 100%)" }} 
        ></div>
      </section>
    </>
  );
}
