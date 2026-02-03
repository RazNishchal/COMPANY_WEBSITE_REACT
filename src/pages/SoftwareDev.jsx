import { motion } from "framer-motion";
import "./ServiceDetail.css";

function SoftwareDev() {
  const services = [
    {
      title: "Custom Software Development",
      image: "/images/custom.png",
      description:
        "We design and develop tailor-made software solutions to address your specific business requirements. Our team follows industry best practices, leveraging the latest technologies and frameworks to deliver high-performing and scalable applications.",
    },
    {
      title: "Web Application Development",
      image: "/images/web-development-services.png",
      description:
        "We specialize in creating robust web applications that empower businesses to streamline processes, enhance productivity, and provide exceptional user experiences. From e-commerce platforms to enterprise software, we build web applications that make an impact.",
    },
    {
      title: "Software Integration and APIs",
      image: "/images/api.webp",
      description:
        "We help businesses optimize their workflows by integrating software systems and building APIs (Application Programming Interfaces) for seamless data exchange. Our experts ensure that your applications communicate efficiently and securely.",
    },
    {
      title: "Software Testing and Quality Assurance",
      image: "/images/softwaretesting.jpg",
      description:
        "We are committed to delivering software solutions of the highest quality. Our dedicated testing team conducts rigorous testing throughout the development process to identify and fix any bugs or issues.",
    },
    {
      title: "Illustration and Infographics",
      image: "/images/infographics.webp",
      description:
        "Our talented illustrators bring your ideas to life through custom illustrations and infographics. Whether it's for storytelling, data visualization, or educational purposes, we create visuals that are both informative and visually appealing.",
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
              "Everything is designed. Few things are designed well."
              <br />
              -- Brian Reed, front-end developer and musician
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
              <h1>Software Development</h1>
              <p>
                At Codehit Solutions, we specialize in delivering cutting-edge
                software solutions that drive innovation and business growth.
                Our experienced team of software developers is passionate about
                creating custom applications that meet your unique needs and
                exceed your expectations.
              </p>
            </motion.div>
            <motion.div
              className="intro-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/softwaredevelopment.jpg"
                alt="Software Development"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="detail-tagline">
        <div className="container-narrow">
          <h2>Grow your business with custom web development services</h2>
          <p>
            Our trusted partner for software development solutions. In today's
            fast-paced and digitally-driven world, having the right software can
            make all the difference in maximizing efficiency, productivity, and
            growth. At Codehit Solutions, we specialize in creating custom
            software solutions tailored to meet your unique business needs.
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
              At Codehit Solutions, we believe in a collaborative and
              client-centric approach to software development. Our process
              begins with a thorough understanding of your business goals and
              requirements. We then work closely with you at every stage, from
              concept and design to development and deployment, to ensure that
              the final product aligns with your vision and delivers tangible
              results.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SoftwareDev;
