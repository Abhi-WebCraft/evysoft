import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Layout/SectionTitle";
import Container from "../Layout/Container";

const teamMembers = [
  {
    name: "Dr. Ahmed Al-Mansoori",
    role: "Founder & Educational Advisor",
    description: "Shaping students' global academic journeys.",
    image: "/images/team/1.jpg",
  },
  {
    name: "Sarah Khalid",
    role: "Admissions Specialist",
    description: "Assisting students with seamless university applications.",
    image: "/images/team/2.jpg",
  },
  {
    name: "Omar Al-Sayeed",
    role: "Career Consultant",
    description: "Guiding career paths for a brighter future.",
    image: "/images/team/1.jpg",
  },
  {
    name: "Layla Hussain",
    role: "Scholarship Coordinator",
    description: "Securing financial aid for deserving students.",
    image: "/images/team/2.jpg",
  },
];

export default function Team() {
  return (
    <section className="section">
      <Container>
        <div className="max-w-[800px] mx-auto text-center justify-center mb-12 flex flex-col gap-4">
          <SectionTitle subtitle="The management team" title="Dar Aluloom Team" />
        </div>
        <div className="lg:grid lg:grid-cols-4 lg:gap-5 md:grid md:grid-cols-2 md:gap-0 sm:grid sm:grid-cols-1">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-box">
              <div className="relative team-img">
                <Image
                  src={member.image}
                  alt={member.name}
                  width="300"
                  height="351"
                  className="w-[100%] h-[100%] object-cover"
                />
                <div className="relative group">
                  <Image
                    src="/images/icons/share.svg"
                    alt="Share"
                    width="55"
                    height="55"
                    className="w-[55px] h-[55px] p-3 bg-[#28aa4a] absolute bottom-0 left-0 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-3 bg-[#fff] h-[30px] py-[22px] px-[20px]">
                    <Link href="#">
                      <Image
                        src="/images/icons/facebook-1.svg"
                        alt="Facebook"
                        width="20"
                        height="20"
                        className="w-[20px] h-[20px] transition-transform duration-300 transform translate-x-[-20px] group-hover:translate-x-0"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src="/images/icons/social-media-1.svg"
                        alt="YouTube"
                        width="20"
                        height="20"
                        className="w-[20px] h-[20px] ml-2 transition-transform duration-300 transform translate-x-[-20px] group-hover:translate-x-0"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src="/images/icons/twitter.svg"
                        alt="Twitter"
                        width="20"
                        height="20"
                        className="w-[20px] h-[20px] ml-2 transition-transform duration-300 transform translate-x-[-20px] group-hover:translate-x-0"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-intro py-5 px-4 h-[170px]">
                <h4 className="text-[22px] font-semibold text-[#fff]">{member.name}</h4>
                <p className="text-[15px] text-[#28aa4a] font-semibold pt-[4px]">{member.role}</p>
                <p className="pt-[10px]">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
