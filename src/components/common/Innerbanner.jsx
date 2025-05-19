import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";

const Innerbanner = ({ subtt,title, description, image }) => {
  return (
    <section className="relative innerbanner_bg section">
      <div
        className="absolute overly_inner inset-0 top-0 right-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: ` url('${image}')`,
        }}
      />
      <div className="relative z-10">
        <Container>
          <div className="text-white lg:w-[900px] w-auto">
            <span className="font-bold text-[18px] text-[#fff]">{subtt}</span>
            <h2 className="text-[42px] text-[#fff] leading-[45px]">{title}</h2>
            <p className="text-[#fff]">{description}</p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Innerbanner;
