// components/ServiceCards.jsx
import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function ServiceCards({ services }) {
  return (
    <>
      <section id="it-sprot-our-services" className="relative overflow-hidden py-[100px]">
        <Container>
          <div className="text-center mb-[50px] lg:max-w-[700px] mx-auto">
            <SectionTitle
              subtitle=""
              title=" All Services"
              content="At EvySoft, we offer end-to-end software services tailored to your business goals. Whether you're a startup or an enterprise, our expert team builds innovative digital products that scale."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link href="/contact"
                key={index}
               className="relative rounded-xl overflow-hidden shadow-md lg:h-[400px] flex flex-col items-center justify-center text-center"
                data-aos={service.animation || "fade-up"}
              >
                {/* Background image per card */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.bgimg}
                    alt="Service Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/60"></div> {/* Optional overlay */}
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-6">
                  {/* <div className="service-card_number text-3xl font-bold text-primary mb-4">
                    {service.number}
                  </div> */}

                  <h3 className="box-title  text-[#fff] font-semibold mb-2">
                    <Link
                      href={service.link}
                      className="text-blue-600 hover:underline "
                    >
                      {service.title}
                    </Link>
                  </h3>

                  <p className="service-card_text  text-[#fff] mb-4">
                    {service.text}
                  </p>

                  {/* Decorative shape */}
                  <div className="bg-shape absolute bottom-0 right-0 opacity-20">
                    <Image
                      width={1000}
                      height={1000}
                      src={service.bgShape}
                      alt="Background Shape"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
