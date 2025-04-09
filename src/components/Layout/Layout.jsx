import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import ScrollToTop from "@/components/Hooks/scroll-to-top";
import WhatsAppChat from "./WhatsAppChat";
export default function Layout({children}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
        <Header />
        {children}
        <Footer />
        <WhatsAppChat
              phoneNumber="971524495817"
              accountName="Dar Aluloom International"
              statusMessage="We are here to help you! 😊"
              chatMessage="Hi there! 👋 Welcome to Dar Aluloom International.How can We help you?"
              avatar="/images/logo/main-logo.png"
              serviceOptions="Educational Consultancy , Subject Tutoring , Test Prep , Others"
          />
        {/* <FloatingWhatsApp
          phoneNumber="971524495817"
          accountName="Dar Aluloom International"
          statusMessage="Can We Help You Today?"
          chatMessage="Hello there! 🤝 How can We help you?"
          avatar="/images/logo/main-logo.png"
          notification
          allowEsc
          allowClickAway
        /> */}
    </>
  );
}
