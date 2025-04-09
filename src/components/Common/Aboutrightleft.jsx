import styles from "@/components/HomePage/About/About.module.css";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import Image from "next/image";
import Btn from "@/components/Layout/Btns/Btn";

export default function AboutRightLeft({
  title,
  subtitle,
  aboutItems,
  imageSrc,
  paradescription,
  button,
}) {
  return (
    <section className="pb-[100px]">
      <Container>
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:grid-cols-2">
          <div>
            <div className={`flex flex-col gap-6 ${styles.aboutContent}`}>
              <SectionTitle subtitle={subtitle} title={title} />
              <div className="flex flex-col gap-4">
              <p dangerouslySetInnerHTML={{ __html: paradescription }} className="flex flex-col gap-2"></p>
                
                <div className="flex flex-col gap-3">
                  {aboutItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt="Icon"
                        width={30}
                        height={30}
                        className={`w-[30px] h-[30px] ${styles.abouticon}`}
                      />
                      <h4 className="font-medium text-[17px]">{item.text}</h4>
                    </div>
                  ))}
                  
                  {button && (
                    <div className="pt-5">
                      <Btn title="Contact Us" link="/contact" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={imageSrc}
              alt="About Us"
              width={934}
              height={824}
              className="w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
