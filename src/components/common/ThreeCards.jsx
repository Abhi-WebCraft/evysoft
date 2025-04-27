import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

const cardData = [
  {
    id: 1,
    image: "/images/home/process-image.jpg",
    title: "AI in Space Exploration Robotic Missions Data",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus obcaecati repudiandae iure molestiae, minus debitis perferendis a labore doloremque! Expedita distinctio eos non, aspernatur ut fugit quibusdam temporibus! Vitae!",
  },
  {
    id: 2,
    image: "/images/home/process-image.jpg",
    title: "AI in Space Exploration Robotic Missions Data",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus obcaecati repudiandae iure molestiae, minus debitis perferendis a labore doloremque! Expedita distinctio eos non, aspernatur ut fugit quibusdam temporibus! Vitae!",
  },
  {
    id: 3,
    image: "/images/home/process-image.jpg",
    title: "AI in Space Exploration Robotic Missions Data",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus obcaecati repudiandae iure molestiae, minus debitis perferendis a labore doloremque! Expedita distinctio eos non, aspernatur ut fugit quibusdam temporibus! Vitae!",
  },
];

const ThreeCards = () => {
  return (
    <section className="section bg-[#eff1f9]">
      <Container>
        <div className="max-w-[700px] mx-auto text-center mb-[50px]">
          <SectionTitle subtitle="AI in Space" title="Bridging the Virtual and Physical Worlds" />
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="border p-6 threecrads space-y-4 overflow-hidden group bg-[#fff]"
              data-aos="fade-up"
            >
              <div className="overflow-hidden rounded-[30px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-[26px] font-bold">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ThreeCards;
