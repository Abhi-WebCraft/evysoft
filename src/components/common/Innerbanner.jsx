import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";

const Innerbanner = ({ title, description, image }) => {
  return (
    <section className="relative innerbanner_bg section">
      <div
        className="absolute overly_inner inset-0 top-0 right-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(84, 132, 255, 0.82) 45%, rgba(255, 255, 255, 0.56) 100%), url('${image}')`,
        }}
      />
      <div className="relative z-10">
        <Container>
          <div className="text-white lg:w-[700px] w-auto">
            <h2 className="text-[42px] text-[#fff]">{title}</h2>
            <p className="text-[#fff]">{description}</p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Innerbanner;
