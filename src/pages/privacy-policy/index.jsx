import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import InnerBannerDesign from '@/components/Common/InnerBannerDesign';
import Container from '@/components/Layout/Container';
import SectionTitle from '@/components/Layout/SectionTitle';
import Link from 'next/link';
import Innerbanner from '@/components/common/Innerbanner';

export default function Home({ referrer }) {
  console.log(referrer);

  const PageMeta = {
    title: "Privacy Policy | Evysoft Web Development Company",
    description: "Explore Evysoft's Privacy Policy to learn how we collect, use, and protect your personal data while delivering high-quality web development and IT services."
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout>
        <Innerbanner
          subtt=""
          title=""
          description=""
          image="/images/abhi/5.jpg" />
        <section className='section'>
          <Container>
            <div>
              <div className='mb-3'>
                <SectionTitle title="Privacy Policy" />
                <p>Evysoft values your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website (<Link href="https://evysoft.com" className='text-[#28aa4a]'>www.evysoft.com</Link>) or utilize our web development and IT solutions.</p>
              </div>

              <div className='flex flex-col gap-2.5'>
                <h3>1. Information We Collect</h3>
                <ul>
                  <li><strong>Personal Information:</strong> Name, email, phone number, company name, and service interests.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, and website usage behavior via cookies and analytics tools.</li>
                  <li><strong>Communication Data:</strong> Details from contact forms or support chats.</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2.5 mt-4'>
                <h3>2. Use of Your Information</h3>
                <p>We use your data to:</p>
                <ul>
                  <li>Provide web development and consulting services tailored to your needs.</li>
                  <li>Respond to inquiries and deliver customer support.</li>
                  <li>Enhance our website experience and service delivery.</li>
                  <li>Comply with legal obligations and ensure data security.</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2.5 mt-4'>
                <h3>3. Sharing Your Information</h3>
                <p>We do not sell your personal data. However, we may share it with trusted partners for service delivery, marketing (with consent), or legal compliance.</p>
              </div>

              <div className='flex flex-col gap-2.5 mt-4'>
                <h3>4. Data Security</h3>
                <p>We implement industry-standard security practices to protect your data from unauthorized access or disclosure.</p>
              </div>

              <div className='flex flex-col gap-2.5 mt-4'>
                <h3>5. Your Privacy Rights</h3>
                <ul>
                  <li>Access and correct your data.</li>
                  <li>Request deletion of your information.</li>
                  <li>Withdraw consent for marketing communication.</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2.5 mt-4'>
                <h3>6. Cookies</h3>
                <p>Our site uses cookies to analyze traffic and improve user experience. You can manage your cookie settings in your browser preferences.</p>
              </div>

              <div className='flex flex-col gap-2.5 mt-4'>
                <h3>7. Changes to This Policy</h3>
                <p>We may update this Privacy Policy occasionally. Please revisit this page to stay informed of changes.</p>
              </div>

              <div className='flex flex-col gap-2.5 mt-4'>
                <h3>8. Contact Us</h3>
                <p>For questions or privacy-related concerns, contact us:</p>
                <ul className='flex flex-col gap-2'>
                  <Link href="mailto:Evvysot@gmail.com"><b>Email:</b> Evvysot@gmail.com</Link>
                  <Link href="tel:+1234567890"><b>Phone:</b> +123 456 7890</Link>
                  <Link href="https://evysoft.com"><b>Website:</b> www.evysoft.com</Link>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
}
