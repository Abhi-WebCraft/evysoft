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
        title: "Terms and Conditions | Dar Aluloom International",
        description:"Read the terms and conditions of Dar Aluloom International to understand our policies and how we deliver exceptional education services in Dubai, UAE."
    }
    const breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
      <InnerBannerDesign
          title="Terms & Conditions" 
          breadcrumbs={breadcrumbs} 
          image="/images/banner/terms.jpg"
      />
      <section className='section'>
        <Container>
        <div>
            <div className='mb-3'>
                <SectionTitle
                    title="Terms & Conditions"
                />
                <p>Welcome to Dar Aluloom International  By accessing or using our website <Link href="https://daraluloom.com/" className='text-[#28aa4a]'>(www.daraluloom.com)</Link>, services, or products, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use our services.</p>
            </div>

            <div className='flex flex-col gap-2.5'>
                <h3>1. Scope of Services</h3>
                <div>
                    <p className='font-semibold'>We offer educational and business consulting services, including but not limited to:</p>
                </div>
                    <ul>
                        <li>Test preparation for SAT, IELTS, UCAT, PTE, TOEFL, GMAT, GRE, LNAT, BMAT, and other exams.</li>
                        <li>Subject tutoring for various curriculums in the UAE.</li>
                        <li>College admissions consulting for undergraduate, postgraduate, and specialized programs (e.g., medicine, engineering).</li>
                    </ul>
                    <p className='font-semibold'>The scope of services will be outlined in the agreement specific to each engagement.</p>
                <div>   
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>2. User Responsibilities</h3>
                <div>
                    <p className='font-semibold'>By using our services, you agree to:</p>
                </div>
                <div>
                    <p className=''>Provide accurate and complete information when requested.</p>
                    <p className=''>Comply with all applicable laws and regulations.</p>
                    <p>Refrain from using our services for unlawful purposes or unauthorized activities.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>3. Payments and Refunds</h3>
                <div>
                <div>
                    <p className='font-semibold'>3.1 Payments</p>
                </div>
                <div className='flex flex-col gap-2 pt-2'>
                    <p className=''>All fees for our services will be outlined in a written agreement or invoice.</p>
                    <p className=''>Payment must be made through the accepted payment methods specified</p> 
                </div>
                </div>
                <div className='mt-3'>
                <div>
                    <p className='font-semibold'>3.2 Refund Policy</p>
                </div>
                <div className='flex flex-col gap-2 pt-2'>
                    <p className=''>Refunds, if applicable, will be provided based on the specific terms agreed upon during service engagement.</p>
                    <p className=''>No refunds will be issued for completed services or missed sessions without prior notice.</p> 
                </div>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>4. Intellectual Property</h3>
                <div className='flex flex-col gap-2'>
                    <p className=''>All content on our website and materials provided through our services, including text, graphics, logos, and software, is the intellectual property of Dar Aluloom International.</p>
                    <p className=''>You may not reproduce, distribute, or use our materials for commercial purposes without prior written consent.</p>
                    <p className=''>Unauthorized use of our intellectual property may result in legal action.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>5. Limitation of Liability</h3>
                <div>
                    <p className='font-semibold'>To the fullest extent permitted by law:</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className=''>Dar Aluloom International shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
                    <p className=''>We are not responsible for outcomes, such as test results or admissions decisions, as these depend on external factors beyond our control.</p> 
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>6. Confidentiality</h3>
                <div className='flex flex-col gap-2'>
                    <p className=''>We are committed to maintaining the confidentiality of all personal and sensitive information shared with us.</p>
                    <p className=''>We will not disclose your information to third parties without consent, except as required by law or for service delivery purposes.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>7. Termination of Services</h3>
                <p className='font-semibold'>We reserve the right to terminate or suspend services if:</p>
                <div className='flex flex-col gap-2'>
                    <p className=''>You violate these terms and conditions.</p>
                    <p>Payment obligations are not met.</p>
                    <p>Unforeseen circumstances prevent the continuation of services.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>8. Amendments</h3>
                <div>
                    <p className=''>We may update these terms and conditions periodically. Continued use of our services indicates your acceptance of the updated terms.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>9. Governing Law and Dispute Resolution</h3>
                <div className='flex flex-col gap-2'>
                    <p className=''>These terms and conditions are governed by the laws of the United Arab Emirates.</p>
                    <p className=''>Any disputes will be resolved through negotiation or, if necessary, arbitration in Dubai, UAE.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2.5 mt-4'>
                <h3>10. Contact Us</h3>
                <div>
                    <p className=''>For questions or concerns about this Terms & Conditions, please contact us:</p>
                </div>
                <ul className='flex flex-col gap-2'>
                    <Link href="mailto:info@daraluloom.com"><b >Email:</b> info@daraluloom.com</Link> 
                    <Link href="tel:+971 52449 5817"> <b>Phone:</b> +971 52449 5817</Link>
                    <Link href="www.daraluloom.com"> <b>Website:</b> www.daraluloom.com</Link> 
                </ul>
                <div>
                    <p className='font-bold'>By engaging with Dar Aluloom International, you acknowledge that you have read, understood, and agreed to these terms and conditions.</p>
                </div>
            </div>
        </div>
        </Container>
      </section>
    </Layout>
    </>
  );
}
