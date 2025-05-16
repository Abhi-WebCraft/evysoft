import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import Image from "next/image";
import styles from './IndustriesWeServe.module.css'; 
import Section from "@/components/Layout/Section";

const project_data = [
  { id: 1, img: "/images/industries/new/retail.jpg", name: "Retail & eCommerce", content:"Ecommerce has revolutionized retail, transforming how businesses connect with customers and drive sales. Through strategic web design, development, and SEO, a web design company empowers retailers to redefine their market presence, expand their customer base, and optimize conversions." },
  { id: 2, img: "/images/about/elearning.jpg", name: "eLearning & Education", content:"The educational landscape has transformed, with eLearning as a cornerstone of modern learning. A website designer creates cutting-edge eLearning platforms, empowering educators and students to reach their full potential. Innovative web design and development turn traditional classrooms into dynamic digital environments." },
  { id: 3, img: "/images/about/rental.jpg", name: "Rental & Sharing", content:"Rental companies thrive in the digital age with cutting-edge web design and development solutions. Focus areas include optimizing operations, enhancing customer experiences, and driving growth. By harnessing technology, rental businesses streamline processes, predict customer demand, and deliver personalized experiences throughout the entire customer journey." },
  { id: 4, img: "/images/about/travel.jpg", name: "Travel & Hospitality", content:"Elevate guest experiences, streamline operations, and boost revenue with custom web solutions from a web development agency. Engaging websites and user-friendly platforms enhance brand awareness and drive customer loyalty. Optimize processes and uncover new revenue streams with cutting-edge technology." },
  { id: 5, img: "/images/about/food.jpg", name: "Food & Grocery", content:"Food and grocery companies boost direct-to-consumer sales through innovative web design, development, and data-driven strategies. Solutions enable businesses to understand customer preferences, optimize online shopping experiences, and drive conversions. Stay ahead of the competition and build lasting customer relationships with digital marketing expertise." },
  { id: 6, img: "/images/about/professional.jpg", name: "Professional & On-Demand Services", content:"Cutting-edge online marketplaces drive digital transformation in the gig economy. Focused on delivering exceptional user experiences, streamlined processes, and significant cost and time savings, a web design company empowers businesses to thrive in the dynamic gig economy."},
  { id: 7, img: "/images/about/manufacturing.jpg", name: "Manufacturing & Logistics", content:"Manufacturing and logistics companies achieve operational excellence with data-driven strategies. Expertise in web design, development, and data analytics streamlines processes, enhances product development, boosts revenue, and optimizes supply chains. Turning data into actionable insights drives growth and efficiency." },
  { id: 8, img: "/images/about/b2b.jpg", name: "B2B & Enterprises", content:"Exceptional digital experiences deliver measurable value for global B2B enterprises. Tailored solutions blend cutting-edge web design, development, and marketing strategies to deeply engage target audiences. Highly personalized interactions help businesses stay ahead of the competition and achieve outstanding outcomes." },
  { id: 9, img: "/images/about/realestate.jpg", name: "Real Estate", content:"Real estate firms excel and enhance customer satisfaction with innovative web design and development solutions. Focus on improving security, fostering team-client collaboration, reducing costs, and streamlining processes to maximize revenue. Cutting-edge technology helps real estate businesses thrive in today’s competitive market." }
];

export default function IndustriesWeServe() {
  return (
    <Section className={styles.section}>
      <Container>
        <SectionTitle title="Industries We Serve" content="" />
        <div className={styles.industriesList}>
          {project_data.map((item) => (
            <div key={item.id} className={styles.industryCard}>
              <div className={styles.industryName}>{item.name}</div>
              <div className={styles.industryCardBody}>
                <div className={styles.industryImg}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={450}
                    height={250}
                  />
                </div>
                <div className={`${styles.industryContent} industry-content`} title={item.name}>
                  <div className={styles.industryContentInner}>
                    <h3 className={styles.industryContentTitle}>{item.name}</h3>
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
