import styles from "@/components/HomePage/About/About.module.css";
import Container from "@/components/Layout/Container";
import Image from "next/image";
import Link from "next/link";

export default function About({
  videoSrc = "/images/vidos/banner.mp4", // Path inside /public folder
  subtitle = "Default Subtitle",
  title = "Default Title",
  description = "Default description...",
  aboutList = [],
  buttonTitle = "Contact Us",
  buttonLink = "/contact",
}) {
  return (
    <section id="it-sport-about" className={`${styles.section} relative overflow-hidden`}>
      
      {/* 🔹 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Optional Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,1) 100%)",
          opacity: 0.8,
        }}
      ></div>

      {/* 🔹 Main Content */}
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 items-center relative z-10">
          <div data-aos="fade-left">
            <div className={`flex flex-col gap-6 ${styles.aboutContent}`}>
              <h2 className="text-white text-[40px] leading-[50px] font-bold">{title}</h2>
              <p className="text-white">{description}</p>

              {/* 🔹 Feature List */}
              <div className="flex flex-col gap-3">
                {aboutList.length > 0 &&
                  aboutList.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt={`Icon ${index + 1}`}
                        width={40}
                        height={40}
                        className={`w-[40px] h-[40px] ${styles.abouticon}`}
                      />
                      <h4 className="font-medium text-[17px] text-white">{item.text}</h4>
                    </div>
                  ))}
              </div>

              {/* 🔹 Button */}
              <div className="mt-5">
                <Link
                  href={buttonLink}
                  className="bg-white border-2  py-[12px] px-[45px] rounded-full text-[17px] font-[600] text-[#261fb3] hover:bg-[#261fb3] hover:text-white transition"
                >
                  {buttonTitle}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
