import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function Points({points, title, subtitle, description}) {
  

  return (
    <section>
      <Container>
      <div className="text-center mb-[40px]">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          content={description}
        />
      </div>
        <div className="grid grid-cols-1 gap-4">
          {points.map((point) => (
            <div
              key={point.id}
              className="flex items-center justify-around py-8 border-t border-b border-[#eacadf] points-section"
              data-aos="fade-up"
              data-aos-duration={point.animationDuration}
            >
              <Image
                src={point.imageSrc}
                alt={point.imageAlt}
                width="340"
                height="164"
                className="w-[340px] h-[164px] servicecard-img rounded-xl"
              />
              <span className="number-text">{`0${point.id}`}</span>
              <div className="flex flex-col gap-3">
                <h3>{point.title}</h3>
                <p className="w-[600px] points-description">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
