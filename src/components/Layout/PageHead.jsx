import Head from "next/head";

export default function PageHead({ PageMeta = {} }) {
    const baseUrl = "https://evysoft.com";

    const title = PageMeta?.title || "EvySoft - Web Development Company";
    const description = PageMeta?.description || "EvySoft provides web development services";
    const image = PageMeta?.ogimage || baseUrl + "/default.jpg";

    // Check current hostname
    const isVercel =
        typeof window !== "undefined" &&
        window.location.hostname.endsWith("vercel.app");

    return (
        <Head>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta
                name="keywords"
                content={PageMeta?.keywords || "web development, software, evysoft"}
            />

            {isVercel ? (
                <meta name="robots" content="noindex,nofollow" />
            ) : (
                <meta name="robots" content="index,follow" />
            )}

            <link rel="icon" type="image/png" href="/favicon.png" />
            <link rel="canonical" href={baseUrl} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={baseUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
}