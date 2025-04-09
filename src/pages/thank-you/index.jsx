import Head from "next/head";
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Container from "@/components/Layout/Container";
import TestimonialSection from "@/components/Containers/TestimonialSection";
import FooterCTA from "@/components/Containers/FooterCTA";
import Section from "@/components/Layout/Section";
import SectionTitle from "@/components/Layout/SectionTitle";

export default function TahnkYou() {
const PageMeta = 
    {
    title: `Thank You | AMR Softec - Web Design Company India`,
    description:"Have a designing, developing or SEO project to discuss? Request a free quote by filling in the form. One of our professionals will contact you as soon as possible!"
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
            <SectionTitle
              title="Thank you for your interest"
              content="Your query has been received and we will contact you soon."
            />          
          </div>
        </Container>
      </Section>
    </Layout>
</>
);
}