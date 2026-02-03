import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import for redirection
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic for form submission
    console.log("Form submitted:", formData);

    // 1. Show Success State
    setIsSubmitted(true);

    // 2. Reset form data
    setFormData({ name: "", email: "", subject: "", message: "" });

    // 3. Redirect back to /contact after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      navigate("/contact");
    }, 2000);
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Connect with Us</h1>
            <p className="hero-subtitle">Here we are!</p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.067341071271!2d85.34586337586509!3d27.715183376178492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197681bc4d83%3A0x6def78c59798343f!2sCodehit%20Solutions!5e0!3m2!1sen!2snp!4v1709650000000!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "var(--radius-lg)" }}
              allowFullScreen=""
              loading="lazy"
              title="Codehit Solutions Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Info Items */}
              <div className="info-item">
                <div className="info-icon">
                  <i className="fa fa-home"></i>
                </div>
                <div className="info-content">
                  <h3>Lampokhari</h3>
                  <p>Chabahil-Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="info-content">
                  <h3>+977 9848511400</h3>
                  <p>Open Everyday, 10AM to 5PM</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fa fa-envelope-o"></i>
                </div>
                <div className="info-content">
                  <h3>contactus@codehitsolutions.com</h3>
                  <p>Email us your query</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Conditional Rendering for Success Message */}
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="success-message"
                    style={{ textAlign: "center", padding: "2rem" }}
                  >
                    <div
                      className="success-icon"
                      style={{
                        fontSize: "3rem",
                        color: "var(--accent)",
                        marginBottom: "1rem",
                      }}
                    >
                      <i className="fa fa-check-circle"></i>
                    </div>
                    <h2>Sent Successfully!</h2>
                    <p>
                      Thank you, {formData.name}. We will get back to you
                      shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter your subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      name="message"
                      rows="8"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <button type="submit" className="btn btn-accent">
                      Send Message
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
