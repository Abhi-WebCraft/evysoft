import { useEffect, useState } from 'react';
import styles from '@/components/Layout/Header/Styles/DarkModeSwitch.module.css';

export default function DarkModeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    // Handle dark mode toggle
    const handleToggle = () => {
      const newDarkModeStatus = !isDarkMode;
      setIsDarkMode(newDarkModeStatus);
      if (newDarkModeStatus) {
        document.body.classList.add("darkmode");
      } else {
        document.body.classList.remove("darkmode");
      }
      localStorage.setItem("darkModeStatus", newDarkModeStatus);
    };
  
    // Load dark mode preference from localStorage
    useEffect(() => {
      const savedDarkModeStatus = localStorage.getItem("darkModeStatus");
      if (savedDarkModeStatus === "true") {
        setIsDarkMode(true);
        document.body.classList.add("darkmode");
      }
    }, []);

  return (
    <div className={styles.darkmodeswitch}>
        <div className={styles.switchWrapper}>
            <label className={styles.switch} htmlFor="darkmood">
                <input type="checkbox" id="darkmood" checked={isDarkMode} onChange={handleToggle} />
                <span className={styles.slider}></span>
            </label>
        </div>
    </div>
  );
}
