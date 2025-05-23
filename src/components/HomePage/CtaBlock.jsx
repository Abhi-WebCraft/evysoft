import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";


const CtaBlock = () => {
  return (
    <section className="cta-block py-[50px] bg-[#000] bg-cover bg-no-repeat bg-center border-b" style={{backgroundImage:"url('/images/home/footer_bg_18.jpg')"}}>
      <Container>
        <div className="flex flex-col items-center justify-between h-full gap-6 lg:flex-row">
          <div>
            {/* <p className="text-[18px] font-bold text-[#fff]">
              Web development
            </p> */}
            <div className="md:text-[42px] text-[32px] lg:text-[55px] font-extrabold capitalize text-[#fff] cta-head">
            Ready to Launch Your Next Big Idea?
            </div>
            <p className="text-[20px] text-[#fff] max-w-[800px]">
            Let’s build something amazing together. From design to deployment — we’ve got you covered.
            </p>
          </div>
           <Link href="/contact" className='bg-[#fff] border-2 border[#261fb3] py-[12px] px-[45px] rounded-full text-[17px] font-[600] text-[#261fb3]'>Let's start</Link>
        </div>
      </Container>
    </section>
  );
};

export default CtaBlock;
