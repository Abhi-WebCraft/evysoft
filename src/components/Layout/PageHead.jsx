import Head from "next/head";

export default function PageHead({ PageMeta = {} }) {

    const baseUrl = "https://evysoft.com";

    const title = PageMeta.title || "EvySoft";
    const description = PageMeta.description || "EvySoft website";
    const image = PageMeta.ogimage || baseUrl + "/default.jpg";

    return (
        <Head>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={PageMeta.keywords || "web development, software, evysoft"} />
            <meta name="robots" content="index, follow" />

            {/* ✅ Favicon */}
            <link rel="icon" href="/favicon.ico" />

            {/* ✅ Canonical */}
            <link rel="canonical" href={baseUrl} />

            {/* ✅ Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={baseUrl} />
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