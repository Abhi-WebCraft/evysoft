import SectionTitle from "@/components/Layout/SectionTitle";
import PhoneCta from "@/components/Layout/PhoneCta";
import styles from './FooterCTA.module.css'; // Import the CSS module
import Container from "@/components/Layout/Container";
import BannerForm from "@/components/Form/BannerForm";

export default function FooterCTA({
  subtitle,
  title,
  content,
}) {
  return (
    <section className={styles.footerSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <SectionTitle
              subtitle={subtitle || "Let's talk"}
              title={title || "Got a Website or Web App Development Project in Mind?"}
              content={content || "Let's turn your digital vision into reality. Share your project details with our expert team and get a free consultation. We'll discuss your goals, challenges, and explore how AMR Softec can help you build a standout online presence."}
            />
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.formContainer}>
              <h3>Get a Quote Now!</h3>
              <BannerForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
