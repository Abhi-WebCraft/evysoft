import styles from '@/components/Layout/Header/Styles/SidebarCTA.module.css';
import Btn from '../Btns/Btn';
import Image from 'next/image';
import Link from 'next/link';

export default function SidebarCTA({ CallActive, setCallActive }) {
  return (
    <>
      <div className={`${styles.SidebarCTA} ${CallActive ? styles.opened : ""}`}>
        <div className={styles.SidebarCTAWrapper}>
          <div className={styles.SidebarCTAClose} onClick={() => setCallActive(false)}>
            <span>X</span>
          </div>
          <div className={styles.CTABlock}>
            <div>
                <h4 className='text-[#261FB3]'>Get in touch</h4>
                <p className='text-black'>Plan your perfect trip with us.</p>
            </div>
            <div className={styles.CTACol}>
                <div className={styles.CTAicon}><Image src="images/icons/call.svg" width={50} height={50} alt="icon"/></div>
                <div className={styles.CTAinfo}>
                <Link href="tel:+971524495817">+971524495817 <span>Helpline Number</span></Link>
                </div>
            </div>
            <div className={styles.CTACol}>
                <div className={styles.CTAicon}><Image src="images/icons/call-1.svg" width={50} height={50} alt="icon"/></div>
                <div className={styles.CTAinfo}>
                <Link href="tel:+97172041111">+<span>Telephone Number</span></Link>
                </div>
            </div>
            <div className={styles.CTACol}>
                <div className={styles.CTAicon}><Image src="images/icons/mail.svg" width={50} height={50} alt="icon"/></div>
                <div className={styles.CTAinfo}>
                <Link href="mailto:info@daraluloom.com">info@daraluloom.com <span>Online Support</span></Link>
                </div>
            </div>
            <div className={styles.CTACol}>
                <div className={styles.CTAicon}><Image src="images/icons/map.svg" width={50} height={50} alt="icon"/></div>
                <div className={styles.CTAinfo}>
                <Link href="https://maps.app.goo.gl/wQviLnQTsUFfoTVd8" target='_blank'>Compass Building, Al Shohada Road, AL Hamra Industrial Zone, Ras Al Khaimah, UAE</Link>
                </div>
            </div>
            <div className={styles.CTACol}>
                <div className={styles.CTAicon}><Image src="images/icons/map.svg" width={50} height={50} alt="icon"/></div>
                <div className={styles.CTAinfo}>
                <Link href="https://maps.app.goo.gl/wQviLnQTsUFfoTVd8" target='_blank'>Block B - B33 - 176, SRTIP Sharjah, UAE</Link>
                </div>
            </div>
            <div className={styles.CTACol}>
                <div className={styles.CTAicon}><Image src="images/icons/map.svg" width={50} height={50} alt="icon"/></div>
                <div className={styles.CTAinfo}>
                <Link href="https://maps.app.goo.gl/wQviLnQTsUFfoTVd8" target='_blank'> 6th floor, Elite Business Center, Al Barsha 1 opp Lulu hypermarket Dubai, UAE<span>Mail Address</span></Link>
                </div>
            </div>
            </div>
          <div className={styles.SidebarCTABottom}>
            <div className={styles.SidebarCTABottomText}>Need help? Let us help you.</div>
            <Btn title="Book a Free Demo" link="/contact" />
          </div>
        </div>
      </div>
      <div className={`${styles.bodyOverlay} ${CallActive ? styles.opened : ""}`} onClick={() => setCallActive(false)}></div>
    </>
  );
}
