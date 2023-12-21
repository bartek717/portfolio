'use client'
import React from 'react'
import Header from '../Header'
import styles from './contact.module.css'
import SocialLinks from '../SocialLinks'
import { useState } from 'react'

function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send', { // Update this with your API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.message // Make sure the key names match the server-side expectations
        }),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
        // Clear the form fields
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        // Handle success (e.g., showing a success message)
      } else {
        // Handle error (e.g., showing an error message)
        console.log('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error (e.g., showing an error message)
    }
  };
  
  

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.textSection}>
            <div>
              <h1 className={styles.header}>
                Contact
              </h1>
              <p className={styles.mainText}>
                Please feel free to contact me in whatever way is easiest for you. I'd love to talk about Machine Learning!
              </p>
              <p className={styles.mainText}>
                I am seeking Software or Machine Learning internships for Summer 2024 (or starting immediately).
              </p>
            </div>
            <SocialLinks/>
          </div>
          <div className={styles.contentSection}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;