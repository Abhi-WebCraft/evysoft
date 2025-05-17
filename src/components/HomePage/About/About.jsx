import styles from "@/components/HomePage/About/About.module.css"; 
import Btn from "@/components/Layout/Btns/Btn";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import Image from "next/image";
import Link from "next/link";

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
    <section
      id="it-sport-about"
      className={`${styles.section} relative  bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url('/images/home/1.jpg')` }}
    >
         <div
    className="absolute inset-0 z-0"
    style={{
      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.36) 0%, rgb(0, 0, 0) 100%)',
      opacity: 0.8, // Optional: adjust for visibility
    }}
  ></div>
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 items-center">
          {/* Left Side Image */}
          {/* <div data-aos="fade-right">
            <Image
              src={imageSrc}
              alt="About Image"
              width={934}
              height={824}
              className="w-full lg:h-[500px] object-cover"
            />
          </div> */}

          {/* Right Side Content */}
          <div data-aos="fade-left">
            <div className={`flex flex-col gap-6 ${styles.aboutContent}`}>
              {/* <SectionTitle
                subtitle={subtitle}
                title={title}
              /> */}
              <h2 className="text-[#fff] text-[40px] leading-[50px]">{title}</h2>
              <div className="flex flex-col gap-4">
                <p className="text-[#fff]">{description}</p>

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
                      <h4 className="font-medium text-[17px] text-[#fff]">{item.text}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="mt-[20px]">
                <Link href="/contact" className='bg-[#fff] border-2 border[#261fb3] py-[12px] px-[45px] rounded-full text-[17px] font-[600] text-[#261fb3]'>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
