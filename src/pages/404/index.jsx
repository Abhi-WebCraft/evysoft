import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Container from '@/components/Layout/Container';
import Section from '@/components/Layout/Section';
import Head from 'next/head';
import Btn from "@/components/Layout/Btns/Btn";

export default function Home() {
    const PageMeta = 
        {
        title: "404 - Page Not Found",
        description:"AMR Softec is an India-based web design company. We are delivering smart eCommerce development & SEO solutions for startups & corporates from Mohali & Chandigarh to the World."
    }
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Head>
        <meta name="robots" content="noindex" />
    </Head>
            <Layout>
            <Section>
                <Container>
                <div className="text-center">
                    <h1>404</h1>
                    <Btn link="/" title="Go back home"/>        
                </div>
                </Container>
            </Section>
            </Layout>
    </>
  );
}