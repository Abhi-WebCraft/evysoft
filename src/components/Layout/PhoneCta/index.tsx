import Image from "next/image";
import Link from "next/link";
import WhatsApp from "@/components/SVG/WhatsApp";
import Phone from "@/components/SVG/Phone";
import styles from './PhoneCta.module.css';
export default function PhoneCta() {
  return (  
    <div className="hero-banner-cta">
      <div className={`${styles.heroCta} cursor-effect`}>
        <div className={styles.heroCtaImg}>
          <div className="w-[40px] md:w-[80px]">
            <Phone width="w-[40px] md:w-[80px]" height="h-[40px] md:h-[80px]" />
          </div>
          <div className="w-[40px] md:w-[80px] ml-[-15px]">
            <WhatsApp width="w-[40px] md:w-[80px]" height="h-[40px] md:h-[80px]" />
          </div>
        </div>
        <Link href="tel:+91-98889-40088" className={styles.heroCtaNumber}>
          <span className={`${styles.number} number`}>+91-98889-40088</span>
          <span>24/7 Give a ring</span>
        </Link>
      </div>
    </div>
  );
};
