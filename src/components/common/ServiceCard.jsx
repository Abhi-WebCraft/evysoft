// components/ServiceCards.jsx
import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
export default function ServiceCards({ services }) {
  return (
    <>
      <section id="it-sprot-our-services">

        <Container>
          <div className="pb-[100px] overflow-hidden">
            <div className="text-center mb-[50px] lg:max-w-[700px] mx-auto">
              <SectionTitle
                subtitle="Evysoft"
                title=" Our Services"
                content="At EvySoft, we offer end-to-end software services tailored to your business goals. Whether you're a startup or an enterprise, our expert team builds innovative digital products that scale."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card p-6 rounded-xl shadow-md relative bg-white"
                  data-aos={service.animation || "fade-up"} // 👈 fallback if no animation
                >
                  <div className="service-card_number text-3xl font-bold text-primary mb-4">
                    {service.number}
                  </div>

                  <div className="shape-icon flex items-center justify-center relative mb-4">
                    <Image
                      width={1000}
                      height={1000}
                      src={service.icon}
                      alt={service.title}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="dots "></span>
                  </div>

                  <h3 className="box-title text-xl font-semibold mb-2">
                    <Link
                      href={service.link}
                      className="text-blue-600 hover:underline"
                    >
                      {service.title}
                    </Link>
                  </h3>

                  <p className="service-card_text text-gray-600 mb-4">
                    {service.text}
                  </p>

                  {/* <Link
                    href={service.link}
                    className="th-btn inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Read More
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link> */}

                  <div className="bg-shape absolute bottom-0 right-0  opacity-20">
                    <Image
                      width={1000}
                      height={1000}
                      src={service.bgShape}
                      alt="Background Shape"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
