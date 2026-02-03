import { motion } from "framer-motion";
import "./ServiceDetail.css";

function WebDev() {
  const services = [
    {
      title: "Frontend Development",
      image: "/images/front.webp",
      description:
        "We specialize in crafting visually appealing and interactive user interfaces using cutting-edge technologies such as HTML5, CSS3, and JavaScript with React. Our team ensures seamless user experiences across different devices and browsers.",
    },
    {
      title: "Back-end Development",
      image: "/images/backend.webp",
      description:
        "Our experts excel in developing robust server-side applications using languages like PHP, Python, and Ruby. We integrate databases, implement APIs, and ensure the efficient functioning of your website.",
    },
    {
      title: "E-commerce Development",
      image: "/images/ecommerce.png",
      description:
        "Boost your online business with our e-commerce development solutions. We leverage platforms like Shopify, Magento, and WooCommerce to create secure and feature-rich online stores that drive conversions.",
    },
    {
      title: "Custom Web Application",
      image: "/images/customweb.png",
      description:
        "Need a tailor-made web application? We have you covered. Our team develops scalable and intuitive web applications using frameworks like React, Laravel, Django, and Ruby on Rails, tailored to your specific requirements.",
    },
    {
      title: "Content Management Systems",
      image: "/images/customweb.png",
      description:
        "Simplify website management with our CMS integration services. We work with platforms like WordPress, Drupal, and Joomla to provide you with a user-friendly interface to update and maintain your website effortlessly.",
    },
  ];

  return (
    <div className="service-detail-page">
      <section className="detail-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="hero-quote">
              "If you think math is hard, try web design."
              <br />- Trish Parr
            </p>
          </motion.div>
        </div>
      </section>

      <section className="detail-intro">
        <div className="container">
          <div className="intro-grid">
            <motion.div
              className="intro-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1>Web Development</h1>
              <p>
                Welcome to Codehit Solutions, your trusted partner for
                professional web development services. With years of experience
                and a passion for creating innovative digital solutions, we
                strive to deliver exceptional websites tailored to meet your
                unique needs.
              </p>
            </motion.div>
            <motion.div
              className="intro-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/webdevelopment.jpg" alt="Web Development" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="detail-tagline">
        <div className="container-narrow">
          <h2>Grow your business with custom web development services</h2>
          <p>
            Web development encompasses a wide range of services, which include
            creating websites or web apps, cybersecurity solutions, UX/UI
            design, eCommerce solutions, website architectures, QA testing,
            maintenance, consulting, and even a custom Content Management
            System.
          </p>
        </div>
      </section>

      <section className="detail-services">
        <div className="container">
          <div className="grid grid-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-detail-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-detail-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-approach">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Approach:</h2>
            <p>
              At Codehit Solutions, we believe in a client-centric approach to
              web development. We carefully listen to your needs, conduct
              thorough research, and craft solutions that align with your goals.
              Our process focuses on user experience, responsiveness, and search
              engine optimization to ensure your website stands out in today's
              competitive digital landscape.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default WebDev;
