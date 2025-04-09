import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import Container from '@/components/Layout/Container';
import SectionTitle from '@/components/Layout/SectionTitle';

export default function Faq({ faqs }) {  // Accept faqData as a prop
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    const handleAccordionClick = (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordions__control');
      const content = self.querySelector('.accordions__content');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
        content.style.maxHeight = null;
      }
    };

    const accordions = document.querySelectorAll('.accordions__item');
    accordions.forEach(el => {
      el.addEventListener('click', handleAccordionClick);
    });

    return () => {
      accordions.forEach(el => {
        el.removeEventListener('click', handleAccordionClick);
      });
    };
  }, []);

  return (
    <section
    id="faq"
    className="section bg-[#f5f5f8] relative bg-cover bg-no-repeat bg-fixed bg-right z-[1] overlay-container faq-section"
    style={{ backgroundImage: "url('/images/bg/faq-bg-1.jpg')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 z-[2]"></div> {/* Black overlay */}
    <Container>
      <div className="items-center lg:grid lg:grid-cols-2 lg:gap-5 md:grid md:grid-cols-2 md:gap-6 sm:grid sm:grid-cols-1 faq-grid relative z-[3]">
        <div className=""> </div>
        <div className="relative z-10 faq-section">
          <div className="mb-[30px]">
            <SectionTitle
              subtitle="Our questions & answers"
              title="Frequently Asked Questions"
            />
          </div>
          <div className="process__accordions">
            <ul className="accordions__list">
              {faqs.map((faq, index) => (
                <li key={index} className="accordions__item business-items">
                  <button
                    className="accordions__control business-control"
                    aria-expanded="false"
                  >
                    <span className="accordions__number">{faq.number}</span>
                    <span className="accordions__title business-faq-title">
                      {faq.question}
                    </span>
                    <span className="accordions__icon business-plus-icon"></span>
                  </button>
                  <div
                    className="accordions__content text"
                    aria-hidden="true"
                  >
                    <p>{faq.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
  
  );
}
