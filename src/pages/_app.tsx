import 'react-modal-video/scss/modal-video.scss';
import "@/styles/globals.css";
import { Jost } from 'next/font/google';
const jost = Jost({ subsets: ['latin'] });
import type { AppProps } from "next/app";
  export default function App({ Component, pageProps }: AppProps) {
    return (
      <main className={jost.className}>
        <Component {...pageProps} />
        </main>
    )
}
