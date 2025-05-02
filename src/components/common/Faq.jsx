import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import Container from '@/components/Layout/Container';
import SectionTitle from '@/components/Layout/SectionTitle';
import { title } from 'process';

export default function Faq({ faqs,subtitile,title }) {  // Accept faqData as a prop
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
    className="section-bottom bg-[#f2f2f2f] relative bg-cover bg-no-repeat bg-fixed bg-right z-[1] overlay-container faq-section" >
    <Container>
      <div className="items-center faq-grid relative z-[3]">
        <div className=""> </div>
        <div className="relative z-10 faq-section">
          <div className="mb-[30px] text-center">
            <SectionTitle
              subtitle={subtitile}
              title={title}
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
                    <p className='text-[18px] text-[#fff]'>{faq.answer}</p>
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
