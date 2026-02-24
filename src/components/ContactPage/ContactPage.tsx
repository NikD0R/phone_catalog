import { ChangeEvent, FormEvent, useRef, useState } from "react";
import styles from './ContactPage.module.scss';

interface FormData {
  name: string;
  email: string;
}

interface Status {
  type: 'success' | 'error';
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
}

export const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });
  const [status, setStatus] = useState<Status | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]{2,}$/.test(formData.name)) {
      newErrors.name = 'Name must contain at least 2 letters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setStatus(null);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({
        type: 'error',
        message: 'Please enter correct data',
      });
      return;
    }

    setStatus({
      type: 'success',
      message: 'Thank you! We will contact you soon.',
    });

    setFormData({ name: '', email: '' });
    setErrors({});

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setStatus(null);
      timerRef.current = null;
    }, 5000);
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <h2 className="title">Contact Us</h2>
        <p className={styles.contact__subtitle}>
          Have a question about a product or found an issue? Leave your name and email and we will get back to you as soon as possible.
        </p>

        <div className={styles.contact__content}>
          <form onSubmit={handleSubmit} className={styles.contact__form}>
            {status && (
              <div
                className={`${styles.contact__status} ${status.type === 'success'
                  ? styles['contact__status--success']
                  : styles['contact__status--error']
                  }`}
              >
                {status.message}
              </div>
            )}

            <div className={styles.contact__field}>
              <label className={styles.contact__label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.contact__input} ${errors.name ? styles['contact__input--error'] : ''}`}
                placeholder="Your full name"
                required
              />
              {errors.name && (
                <span className={styles['contact__error-text']}>
                  {errors.name}
                </span>
              )}
            </div>

            <div className={styles.contact__field}>
              <label className={styles.contact__label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.contact__input} ${errors.email ? styles['contact__input--error'] : ''}`}
                placeholder="Your email"
                required
              />
              {errors.email && (
                <span className={styles['contact__error-text']}>
                  {errors.email}
                </span>
              )}
            </div>

            <button type="submit" className={styles.contact__button}>
              Contact
            </button>
          </form>

          <aside className={styles.contact__info}>
            <h2 className={styles['contact__info-title']}>Store Information</h2>

            <div className={styles['contact__info-item']}>
              <span className={styles['contact__info-label']}>Address:</span>
              <p className={styles['contact__info-address']}>123 Main Street, Kyiv, Ukraine</p>
            </div>

            <div className={styles['contact__info-item']}>
              <span className={styles['contact__info-label']}>Phone:</span>
              <a className={styles['contact__info-link']} href="tel:+380441234567">+38 (044) 123-4567</a>
            </div>

            <div className={styles['contact__info-item']}>
              <span className={styles['contact__info-label']}>Email:</span>
              <a className={styles['contact__info-link']} href="mailto:store@example.com">store@example.com</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
