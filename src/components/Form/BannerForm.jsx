import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styles from './BannerForm.module.css';

export default function BannerForm() {
  const { register, getValues, handleSubmit, handleError, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const handleKeyPress = (event) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', ' '];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const router = useRouter();
  const [ButtonShow, setButtonShow] = useState(false);

  const onSubmit = async (data) => {
    const location = getValues('location');
    setButtonShow(true);
    const updatedFormData = {
      ...data,
      location,
    };
    try {
      const response = await fetch('https://crm-api.amrsoftec.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      localStorage.removeItem("formData");
      router.push('/thank-you');
      setButtonShow(false);
    } catch (error) {
      console.error('Error:', error);
      alert('There was a problem sending your message.');
    }
  }

  return (
    <form className="get-quote-form" onSubmit={handleSubmit(onSubmit, handleError)}>
      <div className="grid gap-5">
        <div className={styles.formCol}>
          <input
            type="text"
            name="name"
            {...register("name", { required: "Name is required" })}
            id="name"
            className={`${styles.inputfield} ${errors?.name ? "required" : ""}`}
            placeholder=" "
          />
          <label htmlFor="name" className={styles.labelfield}>Name</label>
          {errors?.name && (
            <p className={styles.errorMessage}>{errors.name.message}</p>
          )}
        </div>

        <div className={styles.formCol}>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address"
              }
            })}
            id="email"
            className={`${styles.inputfield} ${errors?.email ? "required" : ""}`}
            placeholder=" "
          />
          <label htmlFor="email" className={styles.labelfield}>Email</label>
          {errors?.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.formCol}>
          <input
            type="text"
            name="phone"
            {...register("phone")}
            onKeyPress={handleKeyPress}
            id="phone"
            className={`${styles.inputfield} ${errors?.phone ? "required" : ""}`}
            placeholder=" "
          />
          <label htmlFor="phone" className={styles.labelfield}>Phone Number</label>
          {errors?.phone && (
            <p className={styles.errorMessage}>{errors.phone.message}</p>
          )}
        </div>

        <div className={styles.formCol}>
          <input
            type="text"
            name="websitelink"
            {...register("websitelink")}
            id="websitelink"
            className={`${styles.inputfield} ${errors?.websitelink ? "required" : ""}`}
            placeholder=" "
          />
          <label htmlFor="websitelink" className={styles.labelfield}>Your Website Link</label>
          {errors?.websitelink && (
            <p className={styles.errorMessage}>{errors.websitelink.message}</p>
          )}
        </div>

        <div className={styles.formCol}>
          <textarea
            name="message"
            {...register("message", { required: "Message is required" })}
            id="message"
            className={`${styles.inputfield} ${errors?.message ? "required" : ""}`}
            placeholder=" "
          />
          <label htmlFor="message" className={styles.labelfield}>Tell us about your requirements</label>
          {errors?.message && (
            <p className={styles.errorMessage}>{errors.message.message}</p>
          )}
        </div>

        <div className="">
          {ButtonShow ? (
            <button type="button" disabled className="cursor-not-allowed disabled:opacity-60 bg-gradient-to-r from-[#f77e84] to-[#ff487b] bg-[#ff487b] hover:bg-gradient-to-l text-[#fff] py-4 px-10 text-[22px] pointer font-[500] ease-in-out duration-300 w-[100%] flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg> Sending Request...
            </button>
          ) : (
            <button type="submit" className="btn">Request a Call Back</button>
          )}
        </div>
      </div>
    </form>
  );
}
