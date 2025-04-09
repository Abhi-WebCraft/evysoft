import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

const benefitsData = [
  {
    number: "01.",
    title: "SAT Preparation",
    description:"SAT is your gateway to global universities. Our SAT preparation in UAE  program covers all sections—Math, Evidence-Based Reading, and Writing—ensuring you score your best. With expert tutors and extensive practice tests, you’ll be fully prepared for college admissions.",
    icon: "/images/icons/open-book-2.svg",
    duration: 1200,
  },
  {
    number: "02.",
    title: "UCAT Preparation",
    description:"SAT is your gateway to global universities. Our SAT preparation in UAE  program covers all sections—Math, Evidence-Based Reading, and Writing—ensuring you score your best. With expert tutors and extensive practice tests, you’ll be fully prepared for college admissions.",
    icon: "/images/icons/open-book-2.svg",
    duration: 1500,
  },
  {
    number: "03.",
    title: "IELTS Preparation",
    description:"SAT is your gateway to global universities. Our SAT preparation in UAE  program covers all sections—Math, Evidence-Based Reading, and Writing—ensuring you score your best. With expert tutors and extensive practice tests, you’ll be fully prepared for college admissions.",
    icon: "/images/icons/open-book-2.svg",
    duration: 1800,
  },
  {
    number: "04.",
    title: "GMAT Preparation",
    description:"SAT is your gateway to global universities. Our SAT preparation in UAE  program covers all sections—Math, Evidence-Based Reading, and Writing—ensuring you score your best. With expert tutors and extensive practice tests, you’ll be fully prepared for college admissions.",
    icon: "/images/icons/open-book-2.svg",
    duration: 2100,
  },
  {
    number: "05.",
    title: "GRE Preparation",
    description:"SAT is your gateway to global universities. Our SAT preparation in UAE  program covers all sections—Math, Evidence-Based Reading, and Writing—ensuring you score your best. With expert tutors and extensive practice tests, you’ll be fully prepared for college admissions.",
    icon: "/images/icons/open-book-2.svg",
    duration: 2500,
  },
  {
    number: "06.",
    title: "PTE Preparation",
    description:"SAT is your gateway to global universities. Our SAT preparation in UAE  program covers all sections—Math, Evidence-Based Reading, and Writing—ensuring you score your best. With expert tutors and extensive practice tests, you’ll be fully prepared for college admissions.",
    icon: "/images/icons/open-book-2.svg",
    duration: 2800,
  },
  {
    number: "07.",
    title: "TOEFL Preparation",
    description:"SAT is your gateway to global universities. Our SAT preparation in UAE  program covers all sections—Math, Evidence-Based Reading, and Writing—ensuring you score your best. With expert tutors and extensive practice tests, you’ll be fully prepared for college admissions.",
    icon: "/images/icons/open-book-2.svg",
    duration: 2800,
  },
  {
    number: "08.",
    title: "LNAT Preparation",
    description:"SAT is your gateway to global universities. Our SAT preparation in UAE  program covers all sections—Math, Evidence-Based Reading, and Writing—ensuring you score your best. With expert tutors and extensive practice tests, you’ll be fully prepared for college admissions.",
    icon: "/images/icons/open-book-2.svg",
    duration: 2800,
  },
  {
    number: "09.",
    title: "BMAT Preparation",
    description:"SAT is your gateway to global universities. Our SAT preparation in UAE  program covers all sections—Math, Evidence-Based Reading, and Writing—ensuring you score your best. With expert tutors and extensive practice tests, you’ll be fully prepared for college admissions.",
    icon: "/images/icons/open-book-2.svg",
    duration: 2800,
  },

];

export default function Benefits() {
  return (
    <section className="section">
      <Container>
        <div className="max-w-[1000px] mx-auto text-center mb-[50px]">
          <SectionTitle title="International Test Prep Programs" />
        </div>

        <div className="main-div">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-[25px] ${
                index === 0 ? "border-t-1 border-[#fff]" : ""
              } border-b-1 border-[#fff]`}
              data-aos="fade-up"
              data-aos-duration={benefit.duration}
            >
              <div className="flex gap-10 items-center">
                <p className="text-[25px] font-semibold">{benefit.number}</p>
                <div className="flex flex-col gap-3 ">
                <h3 className="font-bold">{benefit.title}</h3>
                <p className="max-w-[95%]">{benefit.description}</p>
                </div>
               
              </div>
              <div className="benefit-image-div">
                <Image
                  src={benefit.icon}
                  alt="icon"
                  width="50"
                  height="50"
                  className="w-[100%] h-[35px] object-contain benefit-image"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
