import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";

const InnerCta = ({innerCta}) => {

  return (
    <section
      className="cta-block py-[50px] bg-[#28aa4a] bg-cover bg-no-repeat bg-center inner-cta"
      style={{ backgroundImage: "url('/images/bg/cta-bg.webp')" }}
    >
      <Container>
        {innerCta.map((cta, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between h-full gap-6 mb-6 lg:flex-row"
          >
            <div>
              <div className="text-[45px] font-extrabold capitalize cta-head">
                {cta.heading}
              </div>
              <p className="text-[18px] text-black max-w-[800px]">
                {cta.description}
              </p>
            </div>
            <Btn title="Let’s Get Started!" link="tel:+971524495817" />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default InnerCta;
