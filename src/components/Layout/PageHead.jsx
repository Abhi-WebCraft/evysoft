"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

export default function PageHead({ PageMeta = {} }) {
    const pathname = usePathname() || "/";

    const baseUrl = "https://evysoft.com";
    const fullUrl = baseUrl + pathname;

    const title = PageMeta.title || "EvySoft - Web Development Company";
    const description = PageMeta.description || "EvySoft provides web development and software services.";
    const image = PageMeta.ogimage || "https://evysoft.com/default.jpg";

    return (
        <Head>
            {/* ✅ Basic SEO */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={PageMeta.keywords || "web development, software, evysoft"} />
            <meta name="robots" content="index, follow" />

            {/* ✅ Favicon (IMPORTANT) */}
            <link rel="icon" href="/favicon.ico" />

            {/* ✅ Canonical */}
            <link rel="canonical" href={fullUrl} />

            {/* ✅ Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />

            {/* ✅ Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
}