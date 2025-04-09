import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Site Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="sEwlLdlyGit6hULqca09TssAJB8BhUrbUerUewlzj1k"
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RSW16WZD47"
        ></script>
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RSW16WZD47');
            `,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        {/* Tawk.to Live Chat */}
        <script
          id="tawk-script"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {};
              var Tawk_LoadStart = new Date();
              (function() {
                var s1 = document.createElement('script'),
                    s0 = document.getElementsByTagName('script')[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/66d7fc73ea492f34bc0d786a/1i6tr49pn';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        ></script>
        <NextScript />
      </body>
    </Html>
  );
}
