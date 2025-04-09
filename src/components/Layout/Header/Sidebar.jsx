import React from 'react';
import MobileMenus from './mobile-menus';
import styles from '@/components/Layout/Header/Styles/Sidebar.module.css';
import Btn from '../Btns/Btn';

export default function Sidebar({ isActive, setIsActive }) {
  return (
    <>
      <div className={`${styles.offcanvas} ${isActive ? styles.opened : ""}`}>
        <div className={styles.offcanvasWrapper}>
          <div className={styles.offcanvasClose} onClick={() => setIsActive(false)}>
            <span>X</span>
          </div>
          <MobileMenus />
          <div className={styles.offcanvasBottom}>
            <div className={styles.offcanvasBottomText}>Have a query regarding the website?</div>
            <Btn title="Get in touch" link="/contact" />
          </div>
        </div>
      </div>
      <div className={`${styles.bodyOverlay} ${isActive ? styles.opened : ""}`} onClick={() => setIsActive(false)}></div>
    </>
  );
}
