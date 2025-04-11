import Container from "@/components/Layout/Container";
import Image from "next/image";
import SectionTitle from "../Layout/SectionTitle";
import Link from "next/link";
import Btn from "../Layout/Btns/Btn";

const servicesData = [
  {
    id: 1,
    title: "Website Development",
    tags: ["React Js Development", "React Js Development", "React Js Development", "React Js Development"],
    animation: "zoom-in-down",
  },
  {
    id: 2,
    title: "Mobile Application Development",
    tags: ["React Js Development", "React Js Development", "React Js Development", "React Js Development"],
    animation: "zoom-in-down",
  },
  {
    id: 3,
    title: "UX/UI Design",
    tags: ["React Js Development", "React Js Development", "React Js Development", "React Js Development"],
    animation: "zoom-in-down",
  },
  {
    id: 4,
    title: "Graphics Design",
    tags: ["React Js Development", "React Js Development", "React Js Development", "React Js Development"],
    animation: "zoom-in-down",
  },
  {
    id: 5,
    title: "Digital Marketing",
    tags: ["React Js Development", "React Js Development", "React Js Development", "React Js Development"],
    animation: "zoom-in-down",
  },
];

export default function Ourservices() {
  return (
    <>
    <section className="section">
      <Container>
        <div className="text-center mb-[50px] mx-auto max-w-[800px]">
          <SectionTitle
            subtitle="Work Process"
            title="Easy, Dynamic, and Optimal Workflow"
            content="Unveiling the extraordinary power. Delving into the exceptionally powerful features of data analysis"
          />
        </div>

        <div className="space-y-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-[#eff1f9] hover:bg-[#000] transition-all duration-500 p-6 md:p-10 space-y-4 rounded-[30px] grid grid-cols-1 lg:grid-cols-2 items-center justify-between"
              data-aos={service.animation || "fade-up"}
            >
              <div className="space-y-4">
                <h2 className="text-[#000] group-hover:text-[#ffffff] transition-colors duration-500 text-[22px] md:text-[30px] font-semibold">
                  <span>{service.id}.</span> {service.title}
                </h2>

                <div className="space-y-3">
                  {[0, 1].map((rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap gap-4">
                      {service.tags.slice(rowIndex * 2, rowIndex * 2 + 2).map((tag, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="bg-[#fff] border py-[7px] px-[20px] rounded-[50px] min-w-[150px] md:w-[200px] text-center"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end mt-4 lg:mt-0">
                <div className="flex items-center gap-4">
                  <Btn title="See Details" link="#" />
                  <div className="bg-[#fff] group-hover:bg-[#000] transition-all duration-500 rounded-full p-2 border-2 border-[rgb(84,132,255)]">
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

     {/* <WhatsAppChat
              phoneNumber="971524495817"
              accountName="Dar Aluloom International"
              statusMessage="We are here to help you! 😊"
              chatMessage="Hi there! 👋 Welcome to Dar Aluloom International.How can We help you?"
              avatar="/images/logo/main-logo.png"
              serviceOptions="Educational Consultancy , Subject Tutoring , Test Prep , Others"
          /> */}
        {/* <FloatingWhatsApp
          phoneNumber="971524495817"
          accountName="Dar Aluloom International"
          statusMessage="Can We Help You Today?"
          chatMessage="Hello there! 🤝 How can We help you?"
          avatar="/images/logo/main-logo.png"
          notification
          allowEsc
          allowClickAway
        /> */}
        </>
  );
}
