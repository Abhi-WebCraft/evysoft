import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";


const CtaBlock = () => {
  return (
    <section className="cta-block py-[50px] bg-[#261FB3] bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url('/images/bg/cta-bg.webp')"}}>
      <Container>
        <div className="flex flex-col items-center justify-between h-full gap-6 lg:flex-row">
          <div>
            <p className="text-[18px] font-bold text-[#fff]">
              Web development
            </p>
            <div className=" text-[55px] font-extrabold capitalize text-[#fff] cta-head">
            Ready to Launch Your Next Big Idea?
            </div>
            <p className="text-[20px] text-[#fff] max-w-[800px]">
            Let’s build something amazing together. From design to deployment — we’ve got you covered.
            </p>
          </div>
          <Btn title=" Get a Free Quote" link="tel:+7341173250"/>
        </div>
      </Container>
    </section>
  );
};

export default CtaBlock;
