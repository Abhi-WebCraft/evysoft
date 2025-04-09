import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import styles from "@/components/HomePage/Key/Key.module.css";

export default function StepCards({ services, subtitle, title, content }) {
  return (
    <section className={`bg-center bg-no-repeat bg-cover ${styles.serviceSection}`}>
      <Container>
        <div className="max-w-[1000px] mx-auto text-center mb-[50px]">
          <SectionTitle subtitle={subtitle} title={title} content={content} />
        </div>
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative flex flex-col gap-4 bg-white shadow-lg rounded-lg overflow-hidden ${styles.serviceBox}`}
            >
              {/* Shape Section */}
              <div className={`${styles.serviceShape} flex justify-center items-center h-[120px]`}>
                <h2 className={`${styles.servicenumber} text-[50px] font-bold text-gray-500`}>
                  {service.number}
                </h2>
              </div>
              {/* Content Section */}
              <div className="flex flex-col gap-4 p-4">
                <Image
                  src={service.image}
                  alt={`${service.title} Icon`}
                  width={50}
                  height={50}
                  className={`w-[50px] h-[50px] ${styles.serviceIcon}`}
                />
                <h4 className="text-[20px] uppercase">{service.title}</h4>
                <p className={`text-gray-600 ${styles.servicepara}`}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
