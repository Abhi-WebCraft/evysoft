import Container from "@/components/Layout/Container";
import styles from './Footer.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contacts = [
    { href: "tel:+", icon: "/images/icons/call.svg", text: "+(91) 7341173250" },
    { href: "mailto:", icon: "/images/icons/email.svg", text: "Evvysot@gmail.com" }, 
    { href: "#", icon: "/images/icons/maps-and-flags.svg", text: "Mohali punjab india " }, 
    // { href: "#", icon: "/images/icons/location-11.svg", text: "ddddddddddddddd" }, 
    // { href: "#", icon: "/images/icons/location-11.svg", text: "sdsfsdffffffffff" }, 
  ];


  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerGrid}>
            <div className={styles.footerItems}>
              <div className={styles.footerLogo}>
              <Link href="/" title="Bhutan holiday tours">
                {/* <Image src="/images/logo/main-logo.png" alt="Bhutan Best Inbound Tour" width="100" height="100" className='w-[100%]' priority /> */}
                <h2 className='text-[34px] text-[#fff] mt-[-20px]'><span >Evy</span>Soft</h2>
              </Link>
              </div>
              <p className="leading-[26px] text-[#fff] mt-[-24px]">Evysoft is a forward-thinking IT solutions company founded in 2018 with a mission to help businesses harness the power of technology. Since our inception, we’ve been committed to delivering innovative, scalable, and cost-effective digital solutions that drive real results.</p>
            </div>
            <div className={`${styles.footerItems} text-[#fff]`}>
              <h4 className="text-[#fff] uppercase">Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/why-chose-us">Why Whose Us</Link></li>
                <li><Link href="/contact">Contact Us </Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
         
            <div className={`${styles.footerItems} text-[#fff]`}>
              <h4 className="text-[#fff] uppercase">Contact Us</h4>
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
               <div className={`${styles.footerItems} text-[#fff]`}>
              <h4 className="text-[#fff] uppercase">social links</h4>
              <ul className="space-y-2">
                <li><Link href="/web-development" className="flex gap-3"><Image src="/images/icons/facebook.png" alt="" width={500} height={500} className="w-[35px] h-[35px]"/> facebook</Link></li>
                <li><Link href="/web-development" className="flex gap-3"><Image src="/images/icons/instagram.png" alt="" width={500} height={500} className="w-[35px] h-[35px]"/> instagram</Link></li>
                <li><Link href="/web-development" className="flex gap-3"><Image src="/images/icons/youtube.png" alt="" width={500} height={500} className="w-[35px] h-[35px]"/> youtube</Link></li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
      <div className={`${styles.footerbottom}  text-[#fff] bg-[#000000e1]`}>
        <Container>
          <div className="flex flex-wrap text-[#fff] justify-between gap-5">
            <div>&copy; {currentYear} Web .Site Development .</div>
          </div>
        </Container>
      </div>
    </>
  );
}
