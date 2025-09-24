import React, { useState } from 'react'

export default function Landing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Replace with your email service integration
    alert('Thank you for your message. We will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="landing_page">
      <div className="responsive-container-block big-container">
        <div className="responsive-container-block container">
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
            <div className="content-box">
              <h1 className="text-blk section-head">Contact Us</h1>
              <div className="contact-details">
                <div className="contact-section">
                  <h3>Head Office</h3>
                  <p>Bhukhan, No-6/D-765</p>
                  <p> Sector 6, Gomti Nagar</p>
                  <p> Lucknow, Uttar Pradesh 226010</p>
                </div>
                
                <div className="contact-section">
                  <h3>Contact Information</h3>
                  <p>
                    <strong>Phone:</strong>7991989898
                  </p>
                  <p>
                    <strong>Email:</strong> info@maghraut.com
                  </p>
                  <p>
                    <strong>Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>

                <div className="social-links">
                  <h3 style={{color: "#146132"}}>Follow Us</h3>
                  <div className="icons-container">
                    <a className="share-icon" href="https://www.linkedin.com/company/maghraut/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="share-icon" href="https://www.facebook.com/maghraut" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a className="share-icon" href="https://x.com/maghraut" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="share-icon" href="https://www.instagram.com/maghraut/#" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="share-icon" href="https://www.youtube.com/@maghraut" target="_blank" rel="noopener noreferrer" aria-label="youtube">
                      <i className="fab fa-youtube"></i>
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one">
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="container-block form-wrapper">
                <h2 className="text-blk contactus-head">Send us a Message</h2>
                <p className="text-blk contactus-subhead">Fill out the form below and we'll get back to you within 24 hours</p>
                
                <div className="responsive-container-block">
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <input
                      className="input"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
                    <input
                      className="input"
                      type="text"
                      name="subject"
                      placeholder="Subject*"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
                    <textarea
                      className="textinput"
                      name="message"
                      placeholder="Your Message*"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <button className="submit-btn" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
