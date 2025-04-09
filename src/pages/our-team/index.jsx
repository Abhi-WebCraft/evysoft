import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import InnerBannerDesign from '@/components/Common/InnerBannerDesign';
import Team from '@/components/Common/Team';

export default function Home({referrer }) {
  console.log(referrer)
    const PageMeta = 
        {
        title: "New Webiste",
        description:"New Webiste"
    }
    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Our Team", href: "/our-team" },
      ];
      const aboutItems = [
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
      <InnerBannerDesign
          title="Our Team" 
          breadcrumbs={breadcrumbs} 
          image="/images/banner/college.jpg"
      />
     <Team/>
    </Layout>
    </>
  );
}
