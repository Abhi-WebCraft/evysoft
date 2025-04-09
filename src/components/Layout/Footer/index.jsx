import Container from "@/components/Layout/Container";
import styles from './Footer.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const icons = [
    {
      imageIcon : "/images/icons/whatsapp.svg",
      slug:"",
    },
    {
      imageIcon : "/images/icons/facebook.svg",
      slug:"",
    },
    {
      imageIcon : "/images/icons/social.svg",
      slug:"",
    },
    {
      imageIcon : "/images/icons/linkedin.svg",
      slug:"",
    },
    {
      imageIcon : "/images/icons/youtube-1.svg",
      slug:"",
    },
    {
      imageIcon : "/images/icons/tik-tok-1.svg",
      slug:"",
    },
    {
      imageIcon : "/images/icons/twitter1.svg",
      slug:"",
    },
  ];

  const contacts = [
    { href: "tel:+", icon: "/images/icons/telephone-call-1.svg", text: "+" },
    { href: "mailto:info@daraluloom.com", icon: "/images/icons/email-11.svg", text: "abhishek.com" }, 
    { href: "#", icon: "/images/icons/location-11.svg", text: " ddddddddddddddd" }, 
    { href: "#", icon: "/images/icons/location-11.svg", text: "ddddddddddddddd" }, 
    { href: "#", icon: "/images/icons/location-11.svg", text: "sdsfsdffffffffff" }, 
  ];


  return (
    <>
    <div className={styles.footerTop}>
      <Container>
        <div className="flex items-center justify-center gap-4">
        {icons.map ((item, index)=>(
        <Link href={item.slug} key={index}>
          <Image src={item.imageIcon} alt="vector" width="40" height="40" className={`w-[40px] h-[40px] ${styles.footerIcon}`}/>
          </Link>
        ))}
        </div>
      </Container>
    </div>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerGrid}>
            <div className={styles.footerItems}>
              <div className={styles.footerLogo}>
              <Link href="/" title="Bhutan holiday tours">
                {/* <Image src="/images/logo/main-logo.png" alt="Bhutan Best Inbound Tour" width="100" height="100" className='w-[100%]' priority /> */}
                <h2 className='text-[30px] text-[#000]'><span className='text-[#261FB3]'>Evy</span>Softec</h2>
              </Link>
              </div>
              <p className="leading-[26px] text-[#000]">Look no further than the Educational consultants at Dar Aluloom International, your premier destination for top-tier guidance and support.</p>
                <div className="flex items-center gap-4 pt-6">
                <Image src="/images/icons/time.svg" alt="" width="50" height="50" className="w-[50px] h-[50px] "/>
                <div className="">
                <h3 className="text-[#000]">Business Hours</h3>
                <p className="text-[#000] mt-[-20px]">Monday – Friday 10 am to 7 pm</p>
                </div>
                </div>
            </div>
            <div className={`${styles.footerItems} text-[#000]`}>
              <h4 className="text-[#261FB3]">Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy </Link></li>
                <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div className={`${styles.footerItems} text-[#000]`}>
              <h4 className="text-[#261FB3]">Test Prep</h4>
              <ul>
                <li><Link href="/test-preparation-in-uae">Test Preparation in UAE</Link></li>
                <li><Link href="/ielts-test-prep-in-uae">IELTS Test Prep</Link></li>
                <li><Link href="/sat-preparation-in-uae">SAT Preparation</Link></li>
                <li><Link href="/ucat-preparation-in-uae">UCAT Preparation</Link></li>
              </ul>
            </div>
            <div className={`${styles.footerItems} text-[#000]`}>
              <h4 className="text-[#261FB3]">Contact Us</h4>
                <ul className="flex flex-col gap-3">
                  {contacts.map((contact, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Link href={contact.href} className="flex items-center gap-4">
                      <Image
                      src={contact.icon}
                      alt="icon-vector"
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                      />
                      <p className="leading-[28px]">{contact.text}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </Container>
      </footer>
      <div className={`${styles.footerbottom}  text-[#000] bg-[#261FB35e]`}>
        <Container>
          <div className="flex flex-wrap text-[#fff] justify-between gap-5">
            <div>&copy; {currentYear} Web .Site Development .</div>
          </div>
        </Container>
      </div>
    </>
  );
}
