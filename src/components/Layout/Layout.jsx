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
          <WhatsAppChat
        phoneNumber="9888333681"
        accountName=""
        statusMessage=" How Can We Power Your Digital Vision Today?"
        chatMessage="Hi there! How can we help you today?"
        avatar="/images/icons/evy.png"
        serviceOptions="Custom Software Development, Web Application Development,Mobile App Development, Artificial Intelligence,Process Automation,IT Consulting & Strategy"
      />
        <Footer />
       
    </>
  );
}
