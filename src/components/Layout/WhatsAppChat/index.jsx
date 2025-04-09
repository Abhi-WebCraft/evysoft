import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './WhatsAppChat.module.css';

export default function WhatsAppChat({
  phoneNumber,
  accountName,
  statusMessage,
  chatMessage,
  avatar,
  serviceOptions = ''
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      updateTime();
      setShowMessage(false);
      const timer = setTimeout(() => setShowMessage(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isPopupOpen]);

  const serviceList = serviceOptions.split(',').map(service => service.trim());

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleWhatsAppClick = () => {
    const formattedServices = selectedServices.map((s) => `- ${s}`).join('\n');
  
    const message = selectedServices.length > 0
      ? `Hello *${accountName}*!\nI am interested in the following services:\n${formattedServices}`
      : `Hello *${accountName}*!`;
  
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    window.open(whatsappURL, '_blank');
  
    setSelectedServices([]);
    closePopup(); 
  };
  

  const openPopup = () => {
    if (selectedServices.length > 0) {
      handleWhatsAppClick();
    } else {
      setIsPopupOpen(true);
    }
  };

  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div className={styles.whatsAppButton} onClick={openPopup}>
        <svg focusable="false" viewBox="0 0 24 24" width="55" height="55">
          <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
        </svg>
        <span className={styles.notificationIndicator}>1</span>
      </div>

      {isPopupOpen && (
        <div className={`${styles.whatsappChatbox} ${isPopupOpen ? styles.open : styles.close}`}>
          <header className={styles.chatHeader}>
            <div className={styles.avatar}>
              <Image src={avatar} width={60} height={60} alt="whatsapp-avatar" />
            </div>
            <div className={styles.status}>
              <span className={styles.statusTitle}>{accountName}</span>
              <span className={styles.statusSubtitle}>{statusMessage}</span>
            </div>
            <div className={styles.closeButton} onClick={closePopup}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
          </header>

          <div className={styles.chatBody}>
            {!showMessage && (
              <div className={styles.chatBubble}>
                <div className={styles.typing}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
              </div>
            )}

            {showMessage && (
              <div className={styles.message}>
                <span className={styles.triangle}></span>
                {/* <span className={styles.accountName}>{accountName}</span> */}
                <div className={styles.messageBody}>
                  <div className={styles.chatMessage}>{chatMessage}</div>
                  <div className={styles.checkBoxs}>
                    {serviceList.map((service, index) => (
                      <label key={index} className={styles.checkBoxLabel}>
                        <input
                          type="checkbox"
                          value={service}
                          onChange={() => handleServiceChange(service)}
                          checked={selectedServices.includes(service)}
                        />
                        <span className={styles.checkBoxSpan}>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <span className={styles.messageTime}><span>{currentTime}</span>
                <span><svg viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span>
                </span>
              </div>
            )}
          </div>

          <footer className={styles.chatFooter}>
            <div className={styles.StartChatBtn} onClick={handleWhatsAppClick}>
              <span>Start Chat</span>
              <svg viewBox="0 0 24 24" width="35" height="35">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
