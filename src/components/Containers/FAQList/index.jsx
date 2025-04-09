import React, { useState, useRef, useEffect } from 'react';
import styles from './FAQList.module.css'; 

export default function FAQList({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  useEffect(() => {
    if (activeIndex !== null && answerRefs.current[activeIndex]) {
      answerRefs.current[activeIndex].style.maxHeight = `calc(${answerRefs.current[activeIndex].scrollHeight}px + 100px)`;
      answerRefs.current[activeIndex].style.padding = '35px';
      answerRefs.current[activeIndex].style.opacity = '1';
    }

    answerRefs.current.forEach((ref, i) => {
      if (i !== activeIndex) {
        ref.style.maxHeight = '0px';
        ref.style.padding = '0 35px';
        ref.style.opacity = '0';
      }
    });
  }, [activeIndex]);

  return (
    <>
      {faqs.map((faq, index) => (
        <div
          key={index}
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
          className={`${styles.faqCol} ${activeIndex === index ? styles.active : ''}`}
        >
          <h3
            onClick={() => toggleFAQ(index)}
            className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
            itemprop="name"
          >
            <div><span>{faq.question}</span></div>
          </h3>
          <div
            ref={el => (answerRefs.current[index] = el)}
            className={styles.faqAnswer}
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
          >
            <div className={styles.answerItemProp} itemprop="text" dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </div>
        </div>
      ))}
    </>
  );
}
