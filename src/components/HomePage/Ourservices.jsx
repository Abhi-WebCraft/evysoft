import Container from "@/components/Layout/Container";
import Image from "next/image";
import SectionTitle from "../Layout/SectionTitle";
import Link from "next/link";
import Btn from "../Layout/Btns/Btn";

const servicesData = [
  {
    id: 1,
    title: "Expertise You Can Trust",
    tags: ["React Js Development", "Laravel Development", "Angular Js Development", "Vue Js Development"],
    animation: "fade-up",
    para: "Our team consists of skilled professionals with deep expertise in custom software development, UI/UX design, mobile apps, and cloud solutions. We ensure top-quality delivery with every project."
  },
  {
    id: 2,
    title: " Proven Track Record",
    tags: ["iOS Development", "Android Development", "Flutter", "React Native"],
    animation: "fade-up",
    para: "With years of experience working with both startups and large enterprises, we’ve built a strong portfolio of successful projects, creating tangible results for our clients."
  },
  {
    id: 3,
    title: " Agile & Flexible Approach",
    tags: ["Wireframing", "Prototyping", "User Testing", "Responsive Design"],
    animation: "fade-up",
    para: "We use an agile development process to ensure that your project is adaptive to changing needs and priorities. We value open communication and flexibility, so you're always in the loop."
  },
  {
    id: 4,
    title: "Results-Driven Solutions",
    tags: ["Logo Design", "Branding", "Social Media Graphics", "Print Design"],
    animation: "fade-up",
    para: "At EvySoft, we focus on delivering measurable results. Whether it's increased efficiency, reduced costs, or improved user engagement, our goal is to help you achieve success."
  },
  {
    id: 5,
    title: "Client-Centered Service",
    tags: ["SEO", "Content Marketing", "PPC Ads", "Social Media Marketing"],
    animation: "fade-up",
    para: "Your satisfaction is our top priority. We work closely with you, understanding your business challenges and goals, and delivering solutions that make a real impact."
  },
];

export default function Ourservices() {
  return (
    <section className="section overflow-hidden">
      <Container>
        <div className="text-center mb-[50px] mx-auto max-w-[800px]">
          <SectionTitle
            subtitle="EvySoft"
            title="Why Choose EvySoft?"
            content=""
          />
        </div>

        <div className="space-y-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-[#eff1f9] hover:bg-[#000] transition-all duration-500 p-6 md:p-10 space-y-4 rounded-[30px] grid grid-cols-1 lg:grid-cols-2 items-center justify-between"
              data-aos={service.animation}
            >
              <div className="space-y-4">
                <h2 className="text-[#000] group-hover:text-[#ffffff] transition-colors duration-500 text-[22px] md:text-[30px] font-semibold">
                  <span>{service.id}.</span> {service.title}
                </h2>
                <p className="text-[#333] group-hover:text-white transition-colors duration-500">
                  {service.para}
                </p>

                <div className="space-y-3">
                  {/* {[0, 1].map((rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap gap-4">
                      {service.tags.slice(rowIndex * 2, rowIndex * 2 + 2).map((tag, index) => (
                        <Link
                          key={`${tag}-${index}`}
                          href="#"
                          className="bg-[#fff] border py-[7px] px-[20px] rounded-[50px] min-w-[150px] md:w-[250px] text-center"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  ))} */}
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end mt-4 lg:mt-0">
                <div className="flex items-center gap-4">
                  <Btn title="See Details" link="#" />
                  <div className="bg-[#fff] transition-all duration-500 rounded-full p-2 border-2 border-[rgb(84,132,255)]">
                    <Image
                      src="/images/icons/arrows.svg"
                      alt="icon"
                      width={50}
                      height={50}
                      className="w-[35px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
