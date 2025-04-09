import styles from '@/components/Layout/Header/Styles/MobileMenus.module.css';
import React from "react";
import Link from "next/link";
import menu_data from "./menu-data";

export default function MobileMenus() {
  return (
    <nav className={styles.mobileNav}>
      <ul className={styles.navUL}>
        {menu_data.map((item, i) => (
          <li key={i} className={`${styles.navLI} ${item.sub_menus ? "has-submenu" : ''}`}>
            <Link href={item.link} className={styles.menuLink}>{item.title}</Link>
            {item.sub_menus && (
              <ul className={styles.subMenu}>
                {item.sub_menus.map((sub_item, sub_i) => (
                  <li key={sub_i} className={styles.subMenuLi}>
                    <Link href={sub_item.link} className={styles.subMenuLink}>{sub_item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
