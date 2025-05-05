import styles from "@/components/HomePage/About/About.module.css"; 
import Btn from "@/components/Layout/Btns/Btn";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import Image from "next/image";

// Props define kiye hain
export default function About({
  imageSrc = "/images/home/about_1_1.png",
  subtitle = "Default Subtitle",
  title = "Default Title",
  description = "Default description...",
  aboutList = [], // Yahan empty array default de diya.
  buttonTitle = "Contact Us",
  buttonLink = "#",
}) {
  return (
    <section id="it-sport-about" className={styles.section}>
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 items-center">
          {/* Left Side Image */}
          <div data-aos="fade-right">
            <Image
              src={imageSrc}
              alt="About Image"
              width={934}
              height={824}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side Content */}
          <div data-aos="fade-left">
            <div className={`flex flex-col gap-6 ${styles.aboutContent}`}>
              <SectionTitle
                subtitle={subtitle}
                title={title}
              />
              <div className="flex flex-col gap-4">
                <p>{description}</p>

                {/* List Loop */}
                <div className="flex flex-col gap-3">
                  {aboutList.length > 0 && aboutList.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt="Feature Icon"
                        width={30}
                        height={30}
                        className={`w-[40px] h-[40px] ${styles.abouticon}`}
                      />
                      <h4 className="font-medium text-[17px]">{item.text}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div>
                <Btn title={buttonTitle} link={buttonLink} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
