import styles from './RightsPage.module.scss';

export const RightsPage = () => {
  return (
    <section className={styles.rights}>
      <div className="container">
        <div className={styles.rights__inner}>
          <h2 className="title">Terms of Use</h2>
          <p className={styles.rights__descr}>Welcome to Phone Catalog. By accessing or using this website, you agree to these Terms of Use. If you do not agree, please do not use the Site.</p>
          <div className={styles.rights__items}>
            <div className={styles.rights__item}>
              <h3 className={styles['rights__item-title']}>1. Use of the Site</h3>
              <p className={styles['rights__item-text']}>The Site is provided for informational purposes only. You agree to use it lawfully and not to misuse, disrupt, or attempt unauthorized access to any part of the Site or its systems.</p>
            </div>
            <div className={styles.rights__item}>
              <h3 className={styles['rights__item-title']}>2. Intellectual Property</h3>
              <p className={styles['rights__item-text']}>All content on the Site, including text, images, graphics, design, and source code, is owned or licensed by the Site owner and protected by applicable intellectual property laws. Content may be used for personal, non-commercial purposes only unless written permission is granted.</p>
            </div>
            <div className={styles.rights__item}>
              <h3 className={styles['rights__item-title']}>3. Disclaimer of Warranties</h3>
              <p className={styles['rights__item-text']}>The Site and its content are provided “as is” without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of product information, pricing, or availability.</p>
            </div>
            <div className={styles.rights__item}>
              <h3 className={styles['rights__item-title']}>4. Limitation of Liability & Changes</h3>
              <p className={styles['rights__item-text']}>To the fullest extent permitted by law, we are not liable for any damages resulting from the use of the Site. We reserve the right to update these Terms at any time, and continued use of the Site constitutes acceptance of any changes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
