import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="about-content">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="lead-text">
              Welcome to our IT company. We are a team of highly skilled
              professionals passionate about technology and innovation. Our
              mission is to provide cutting-edge solutions that help businesses
              thrive in the digital world.
            </p>

            <p>
              At <span className="highlight">Codehit Solutions</span>, we
              specialize in developing custom software, building robust web
              applications, and providing IT consulting services. With years of
              experience and a strong track record, we have successfully
              delivered projects for clients across various industries.
            </p>

            <p>
              Our team consists of talented developers, designers, and
              strategists who work collaboratively to deliver exceptional
              results. We are committed to staying up-to-date with the latest
              technologies and trends to ensure that our clients receive
              innovative and future-proof solutions.
            </p>

            <p>
              Customer satisfaction is at the core of our values. We strive to
              understand our clients' unique needs and provide tailored
              solutions that exceed their expectations. We believe in building
              long-lasting partnerships and growing together with our clients.
            </p>

            <div className="cta-section">
              <p className="cta-text">
                Contact us today to discuss how we can help your business
                succeed in the digital landscape. We look forward to hearing
                from you!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
