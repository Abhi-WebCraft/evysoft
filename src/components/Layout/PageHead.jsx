import Head from "next/head";
import { usePathname } from "next/navigation";

export default function PageHead({ PageMeta }) {
    const pathname = usePathname();

    const baseUrl = "https://evysoft.com"; // 👈 apna domain
    const fullUrl = baseUrl + pathname;

    return (
        <Head>
            <title>{PageMeta.title}</title>

            <meta name="description" content={PageMeta.description} />
            <meta name="keywords" content={PageMeta.keywords || "web development, software, evysoft"} />
            <meta name="robots" content="index, follow" />

            {/* ✅ FIXED */}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={PageMeta.title} />
            <meta property="og:description" content={PageMeta.description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content="website" />

            {/* Image */}
            <meta property="og:image" content={PageMeta.ogimage || "https://evysoft.com/default.png"} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={PageMeta.title} />
            <meta name="twitter:description" content={PageMeta.description} />
            <meta name="twitter:image" content={PageMeta.ogimage || "https://evysoft.com/default.jpg"} />
        </Head>
    );
}