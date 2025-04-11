import { useEffect } from 'react';
import type { AppProps } from "next/app";
import { Jost } from 'next/font/google';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-modal-video/scss/modal-video.scss';
import "@/styles/globals.css";

const jost = Jost({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <main className={jost.className}>
      <Component {...pageProps} />
    </main>
  );
}
