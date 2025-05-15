import Container from "@/components/Layout/Container";
import styles from './Footer.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contacts = [
    { href: "tel:+", icon: "/images/icons/call.svg", text: "+(91) 7341173250" },
    { href: "mailto:", icon: "/images/icons/email.svg", text: "Evysot@gmail.com" }, 
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
                <h2 className='text-[34px] text-[#fff]'><span >Evy</span>Soft</h2>
              </Link>
              </div>
              <p className="leading-[26px] text-[#fff]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit minima quod error aut. Magni rem esse voluptates quia, nesciunt vitae fugit culpa exercitationem sunt sit quas recusandae ipsam vel temporibus.</p>
            </div>
            <div className={`${styles.footerItems} text-[#fff]`}>
              <h4 className="text-[#fff] uppercase">Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/why-chose-us">Why Whose Us</Link></li>
                <li><Link href="/privacy-policy">Contact Us </Link></li>
                {/* <li><Link href="/">Terms & Conditions</Link></li> */}
              </ul>
            </div>
            {/* <div className={`${styles.footerItems} text-[#fff]`}>
              <h4 className="text-[#fff] uppercase">IT SERVICES</h4>
              <ul>
                <li><Link href="/web-development">Web Development</Link></li>
                <li><Link href="/web-development">Business Development</Link></li>
                <li><Link href="/web-development">Product Management</Link></li>
                <li><Link href="/web-development">UI/UX Design</Link></li>
              </ul>
            </div> */}
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
