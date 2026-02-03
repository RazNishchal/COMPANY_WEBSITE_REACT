import { motion } from "framer-motion";
import ServiceCard from "../components/sections/ServiceCard";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Graphic Design",
      image: "/images/photoshop.png",
      description:
        "Blend artistic vision with technology to create impactful visual identities that leave a lasting impression on your audience.",
      link: "/services/graphic-design",
    },
    {
      title: "Software Development",
      image: "/images/software.jpg",
      description:
        "Build scalable, high-performance applications tailored to your business needs using the latest modern tech stacks.",
      link: "/services/software-development",
    },
    {
      title: "Web Development",
      image: "/images/web-development-services.png",
      description:
        "Craft responsive, lightning-fast websites and web apps that define how your brand experiences the modern internet.",
      link: "/services/web-development",
    },
    {
      title: "Mobile Application",
      image: "/images/mobile.webp",
      description:
        "Join the mobile revolution with user-centric iOS and Android apps designed for maximum engagement and performance.",
      link: "/services/mobile-development",
    },
  ];

  return (
    <div className="services-page">
      {/* 1. Dynamic Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Expertise</span>
            <h1>
              Tailored Solutions for <br />
              <span>Digital Excellence</span>
            </h1>
            <p>
              From visual identity to complex software ecosystems, we provide
              the tools your business needs to thrive in a digital-first world.
            </p>
          </motion.div>
        </div>
        {/* Abstract background shape */}
        <div className="hero-shape"></div>
      </section>

      {/* 2. Main Services Grid */}
      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Stats / Call to Action Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Have a custom project in mind?</h2>
            <p>
              Our team is ready to turn your complex ideas into functional
              reality.
            </p>
            <button className="btn-primary-alt">
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
