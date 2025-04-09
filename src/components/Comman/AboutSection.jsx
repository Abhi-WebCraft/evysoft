import styles from "@/components/HomePage/About/About.module.css";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import Image from "next/image";
import Btn from "../Layout/Btns/Btn";

export default function AboutSection({ imageSrc, subtitle, title, description, btnTitle, btnLink }) {
  return (
    <>
      <section className="py-[100px]">
        <Container>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
            {/* Left Section: Image */}
            <div>
              <Image src={imageSrc} width={500} height={300} alt="About Section Image" />
            </div>

            {/* Right Section: Text Content */}
            <div>
              <SectionTitle subtitle={subtitle} title={title} />
              <p>{description}</p>
              <div className="mt-[30px]">
                <Btn title={btnTitle} link={btnLink} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
