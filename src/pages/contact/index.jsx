import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Form from '@/components/Common/Form';
import InnerBannerDesign from '@/components/Common/InnerBannerDesign';

export default function Home({referrer }) {
  console.log(referrer)
    const PageMeta = 
        {
        title: "Contact Us | Dar Aluloom International",
        description:"Contact Dar Aluloom International for expert guidance on education, tutoring, test preparation, and admissions consulting in Dubai, UAE."
    }
    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Contact Us", href: "/contact" },
      ];
      const aboutItems = [
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
      <InnerBannerDesign
          title="Contact Us" 
          breadcrumbs={breadcrumbs} 
          image="/images/banner/contact.jpg"
      />
      <div className='pt-[100px]'>
      <Form/>
      </div>
    </Layout>
    </>
  );
}
