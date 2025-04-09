import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import InnerBannerDesign from '@/components/Common/InnerBannerDesign';
import Container from '@/components/Layout/Container';
import SectionTitle from '@/components/Layout/SectionTitle';
import Link from 'next/link';

export default function Home({referrer }) {
  console.log(referrer)
    const PageMeta = 
        {
        title: "Privacy Policy | Dar Aluloom International",
        description:"Read our privacy policy to learn how Dar Aluloom International protects your personal data while delivering outstanding education services in Dubai."
    }
    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
      <InnerBannerDesign
          title="Privacy Policy" 
          breadcrumbs={breadcrumbs} 
          image="/images/banner/privacy.jpg"
      />
      <section className='section'>
        <Container>
        <div>
            <div className='mb-3'>
                <SectionTitle
                    title="Privacy Policy"
                />
                <p>Dar Aluloom International respects your privacy and is committed to protecting it through this Privacy Policy. This document outlines how we collect, use, and protect your personal information when you interact with us through our website <Link href="https://daraluloom.com/" className='text-[#28aa4a]'>(www.daraluloom.com)</Link>, social media platforms, or in person.</p>
            </div>

            <div className='flex flex-col gap-2.5'>
                <h3>1. Information We Collect</h3>
                <div>
                    <p>We collect the following types of information:</p>
                </div>
                <div>
                    <p className='font-bold '>Personal Information :</p>
                    <ul>
                        <li>Name, email address, phone number, and physical address</li>
                        <li>Date of birth and nationality (for specific services such as college admissions consulting)</li>
                        <li>Academic history, grades, and other educational details</li>
                    </ul>
                </div>

                <div>
                    <p className='font-bold '>Non-Personal Information :</p>
                    <ul>
                        <li>Browser type, IP address, and device information</li>
                        <li>Cookies and usage data to improve website performance</li>
                    </ul>
                </div>

                <div>
                    <p className='font-bold '>Payment Information :</p>
                    <ul>
                        <li>For transactions, we may collect billing addresses and payment details (processed securely by third-party payment gateways).</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>2. How We Use Your Information</h3>
                <div>
                    <p className='font-semibold'>We use the collected information for:</p>
                </div>
                <div>
                    <p className=''>Providing educational and business services, including test prep, admissions consulting, and business consulting.</p>
                    <p className=''>Communicating with you regarding our services, updates, and offers.</p>
                    <p>Personalizing and improving your experience on our website.</p>
                    <p>Complying with legal and regulatory obligations.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>3. Sharing Your Information</h3>
                <div>
                    <p className='font-semibold'>We do not sell or rent your personal information. However, we may share your information in the following cases:</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className=''><b>Service Providers:</b> Third-party vendors assisting in payment processing, website hosting, or marketing.</p>
                    <p className=''><b>Legal Compliance:</b> To comply with applicable laws or enforce our rights.</p>
                    <p className=''><b>Consent:</b>With your explicit consent for specific purposes.</p> 
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>4. Data Security</h3>
                <div>
                    <p className=''>We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. Despite these measures, no online system can guarantee 100% security.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>5. Your Rights</h3>
                <div>
                    <p className='font-semibold'>You have the following rights concerning your data:</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className=''>Access, update, or delete your personal information.</p>
                    <p className=''>Opt-out of marketing communications.</p>
                    <p className=''>Restrict or object to certain data processing activities.</p>
                    <p>File a complaint with a data protection authority if your rights are violated.</p> 
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>6. Cookies Policy</h3>
                <div>
                    <p className='font-semibold'>Our website uses cookies to:</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className=''>Analyze website performance and visitor behavior.</p>
                    <p className=''>Remember your preferences and improve your browsing experience.</p>
                    <p className=''>You can manage cookie preferences through your browser settings.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>7. Third-Party Links</h3>
                <div>
                    <p className=''>Our website may include links to third-party websites. We are not responsible for their privacy practices and encourage you to read their privacy policies.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>8. Children’s Privacy</h3>
                <div>
                    <p className=''>Our services are not directed at children under 16. We do not knowingly collect personal information from children without parental consent.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>9. Changes to This Privacy Policy</h3>
                <div>
                    <p className=''>We may update this Privacy Policy occasionally to reflect changes in our practices. Please check this page periodically for updates.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>10. Contact Us</h3>
                <div>
                    <p className=''>For questions or concerns about this Privacy Policy, please contact us:</p>
                </div>
                <ul className='flex flex-col gap-2'>
                    <Link href="mailto:info@daraluloom.com"><b >Email:</b> info@daraluloom.com</Link> 
                    <Link href="tel:+971 52449 5817"> <b>Phone:</b> +971 52449 5817</Link>
                    <Link href="www.daraluloom.com"> <b>Website:</b> www.daraluloom.com</Link> 
                </ul>
                <div>
                    <p className='font-bold'>By using our services, you agree to this Privacy Policy.</p>
                </div>
            </div>
        </div>
        </Container>
      </section>
    </Layout>
    </>
  );
}
