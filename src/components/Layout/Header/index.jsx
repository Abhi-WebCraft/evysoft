
import styles from '@/components/Layout/Header/Styles/Header.module.css';
import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Layout/Header/Sidebar";
import useSticky from '@/components/Hooks/use-sticky';
import Btn from "@/components/Layout/Btns/Btn";
import MainLogo from "@/components/SVG/MainLogo";
import MenuData from "./menu-data";
import Container from "@/components/Layout/Container";
import Image from "next/image";
import Phone from "@/components/SVG/Phone";
import SidebarCTA from "./SidebarCTA";
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  const { sticky } = useSticky();
  const [CallActive, setCallActive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header id="header-sticky" className={`${styles.headerContainer} ${sticky ? styles.headerSticky : "bg-[#fff]"}`}>
        <Container>
          <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
              <Link href="/" title="Bhutan holiday tours">
                {/* <Image src="/images/logo/main-logo.png" alt="Bhutan Best Inbound Tour" width="100" height="100" className='w-[100%]' priority /> */}
                <h2 className='text-[30px] text-[#000]'><span className='text-[#261FB3]'>Evy</span>Softc</h2>
              </Link>
            </div>
            <div className={styles.navigation}>
              <div className={styles.mainmenu}>
                <nav className={styles.nav}>
                  <ul className={styles.menu}>
                    {MenuData.map((item, i) => (
                      <li key={i} className={`${styles.liItem} ${item.has_dropdown ? styles.hasDropdown : ''}`}>
                        <Link href={item.link} passHref className={styles.menuLink}>
                          {item.title}
                        </Link>
                        {item.sub_menus && (
                          <ul className={styles.subMenu}>
                            {item.sub_menus.map((sub_item, sub_i) => (
                              <li key={sub_i} className={styles.subMenuLi}>
                                <Link href={sub_item.link} passHref className={styles.subMenuLink}>
                                  {sub_item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className={styles.headerCtaBtn}>
                <div className={styles.CallBtn} onClick={() => setCallActive(true)} ><Phone/></div>
                <div className={styles.ContactBtn}>
                    <Btn link="/contact" title="Contact" />
                </div>  
                <div className={styles.mobileNavBtn} onClick={() => setIsActive(true)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
          </div>
        </Container>  
      </header>
      <SidebarCTA className="" CallActive={CallActive} setCallActive={setCallActive}/>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};
