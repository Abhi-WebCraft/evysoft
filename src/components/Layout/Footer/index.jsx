import Container from "@/components/Layout/Container";
import styles from './Footer.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // const contacts = [
  //   { href: "tel:8847540817", icon: "/images/icons/call.svg", text: "+(91) 8847540817" },
  //   { href: "mailto:evysoft13@gmail.com", icon: "/images/icons/email.svg", text: "evysoft13@gmail.com" }, 
  //   { href: "#", icon: "/images/icons/maps-and-flags.svg", text: "A-40 A, Extension, Industrial Focal Point, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160059, India, India" }, 
  
  // ];


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
              <ul className="flex ul-item gap-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                 <li><Link href="/all-services">All services</Link></li>
                <li><Link href="/why-choose-us">Why Choose Us</Link></li>
                <li><Link href="/contact">Contact Us </Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              </ul>
               <div className={`${styles.ddd} text-[#fff]`}>
              {/* <h4 className="text-[#fff] uppercase">social links</h4> */}
              <ul className="ul-item items-center gap-5 mt-[30px]">
                <li><Link href="https://www.facebook.com/profile.php?id=61576649704540" className="flex gap-3"><Image src="/images/icons/facebook.png" alt="" width={500} height={500} className="w-[35px] h-[35px]"/> Facebook</Link></li>
                <li><Link href="https://www.instagram.com/evysoft13/" className="flex gap-3"><Image src="/images/icons/instagram.png" alt="" width={500} height={500} className="w-[35px] h-[35px]"/> Instagram</Link></li>
                <li><Link href="https://www.linkedin.com/company/107149897/admin/dashboard/" className="flex gap-3"><Image src="/images/icons/linkedIn_PNG27.png" alt="" width={500} height={500} className="w-[35px] h-[35px]"/>Linkden</Link></li>
              </ul>
            </div>
            </div>
         
            {/* <div className={`${styles.footerItems} text-[#fff]`}>
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
            </div> */}
              
          </div>
        </Container>
      </footer>
      <div className={`${styles.footerbottom}  text-[#fff] bg-[#000000e1]`}>
        <Container>
          <div className="flex flex-wrap text-[#fff] justify-between gap-5">
            <div> Copyright &copy; {currentYear} Evysoft Limited</div>
          </div>
        </Container>
      </div>
    </>
  );
}
