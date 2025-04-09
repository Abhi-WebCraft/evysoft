import Head from "next/head";
import { usePathname } from "next/navigation";

export default function PageHead({ PageMeta }) {
    const pathname = usePathname();
    return (
        <Head>
            <title>{PageMeta.title}</title>
            <meta name="title" content={PageMeta.title} />
            <meta name="description" content={PageMeta.description} />
            <meta name="keywords" content={PageMeta.keywords || "default, keywords, here"} />
            <meta name="robots" content=" follow, index" />
            <link rel="canonical" href={`https://www.daraluloom.com${pathname}`} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={PageMeta.title} />
            <meta property="og:description" content={PageMeta.description} />
            <meta property="og:url" content={`https://www.daraluloom.com${pathname}`} />
            <meta property="og:site_name" content="Dar Aluloom International" />
            <meta property="article:publisher" content="https://www.facebook.com/kaartikgor/" />
            <meta property="article:author" content="https://www.facebook.com/kaartikgor" />
            {PageMeta.ogimage && PageMeta.ogimage !== "/images/prof" ? (
                <meta property="og:image" content={PageMeta.ogimage} />
            ) : (
                <meta property="og:image" content="/images/kaartik-gor.jpg" />
            )}
            <meta property="og:image:width" content="1422" />
            <meta property="og:image:height" content="800" />
            <meta property="og:image:alt" content={PageMeta.title} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={PageMeta.title} />
            <meta name="twitter:description" content={PageMeta.description} />
            <meta name="twitter:creator" content="@VedicVoices" />
            {PageMeta.ogimage && PageMeta.ogimage !== "/images/prof" ? (
                <meta name="twitter:image" content={PageMeta.ogimage} />
            ) : (
                <meta name="twitter:image" content="/images/kaartik-gor.jpg" />
            )}
        </Head>
    );
}
