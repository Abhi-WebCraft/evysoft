import styles from "@/components/HomePage/About/About.module.css";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import Image from "next/image";

export default function CollegeAdmissions({ admissionsData }) {
  return (
    <section className="">
      <Container>
        <div>
          {admissionsData.map((admission, index) => (
            <div
              key={index}
              className="border-t py-4 border-[#28aa4a] flex gap-6 items-center"
            >
              <div className="w-[100px]">
                <Image
                  src={admission.icon}
                  alt="Icon"
                  width={500}
                  height={500}
                  className={`w-[50px] h-[50px] ${styles.abouticon}`}
                />
              </div>
              <div>
                <h3>{admission.title}</h3>
                <p>{admission.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
