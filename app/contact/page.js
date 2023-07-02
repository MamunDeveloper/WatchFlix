import React from "react";
import ContactCard from "@/app/components/contactcard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/contactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.582020479406!2d91.86712863953116!3d24.905109342760113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750552700bfdb4f%3A0x369ba0b482046794!2sAmbarkhana%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1688157971614!5m2!1sen!2sbd"
          width={400}
          height={250}
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
