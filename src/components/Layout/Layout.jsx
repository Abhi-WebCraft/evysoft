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
       
    </>
  );
}
