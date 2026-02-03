import { motion } from "framer-motion";
import "./ServiceDetail.css";

function MobileDev() {
  const services = [
    {
      title: "Android App Development",
      image: "/images/andriod.jpg",
      description:
        "Our team of skilled Android developers leverages the latest technologies and frameworks to create robust and feature-rich Android applications. We ensure seamless performance and compatibility across a wide range of Android devices.",
    },
    {
      title: "iOS App Development",
      image: "/images/ios.png",
      description:
        "From iPhones to iPads, we specialize in developing high-quality iOS applications that deliver exceptional user experiences. Our iOS developers are proficient in Swift and Objective-C, ensuring your app meets Apple's stringent standards.",
    },
    {
      title: "Cross-platform App Development",
      image: "/images/Cross.webp",
      description:
        "Reach a broader audience with our cross-platform app development services. Using frameworks like React Native and Flutter, we build apps that run smoothly on both Android and iOS platforms, reducing development time and costs.",
    },
    {
      title: "App Design and UI/UX",
      image: "/images/ux.webp",
      description:
        "We believe that a visually appealing and intuitive user interface is key to the success of any mobile application. Our design experts work closely with you to create captivating designs and seamless user experiences that keep users engaged.",
    },
    {
      title: "App Testing and Quality Assurance",
      image: "/images/qa.png",
      description:
        "To ensure the flawless performance of your app, our dedicated testing team conducts comprehensive testing at every stage of development. We rigorously check for bugs, performance issues, and compatibility across different devices.",
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
              "Work harder than you think you did yesterday."
              <br />
              -- Alex Elle
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
              <h1>Mobile App Development</h1>
              <p>
                Welcome to Codehit Solutions, your trusted partner for
                professional mobile app development services. With our expertise
                in creating innovative and user-centric mobile applications, we
                help businesses unlock new possibilities and engage their
                audience on the go.
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
                src="/images/mobileappdevelopment.jpg"
                alt="Mobile App Development"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="detail-tagline">
        <div className="container-narrow">
          <h2>Grow your business with custom web development services</h2>
          <p>
            Want people to have access to your business, literally, at the tip
            of their fingertips? A well-built mobile application can help you
            reach there. We make your vision come true with apps that are easy
            to use & great for the sight by deeply analyzing user behavior.
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
              At Codehit Solutions, we follow a customer-centric approach to
              mobile app development. We understand your business goals, target
              audience, and unique requirements to create a customized mobile
              solution. Our process focuses on delivering apps that are not only
              visually stunning but also functional, user-friendly, and
              scalable.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default MobileDev;
