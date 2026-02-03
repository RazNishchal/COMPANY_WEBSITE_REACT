import { motion } from "framer-motion";
import "./ServiceDetail.css";

function GraphicDesign() {
  const services = [
    {
      title: "Brand Identity Design",
      description:
        "We specialize in creating unique and memorable brand identities that capture the essence of your business. From logo design to brand guidelines, we ensure consistency across all visual elements to establish a strong brand presence.",
    },
    {
      title: "Print Design",
      description:
        "Our team crafts eye-catching print materials, including brochures, flyers, business cards, and posters. We focus on creating designs that leave a lasting impression and effectively convey your key messages to your target audience.",
    },
    {
      title: "Digital Design",
      description:
        "We design captivating visuals for digital platforms, including websites, social media, and online advertisements. Our expertise lies in creating engaging user interfaces, stunning banners, and effective digital marketing assets.",
    },
    {
      title: "Packaging Design",
      description:
        "We create packaging designs that not only grab attention but also communicate the unique value of your product. Our designers consider factors such as usability, shelf appeal, and brand consistency to ensure your packaging stands out.",
    },
    {
      title: "Illustration and Infographics",
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
              <h1>Graphic Designing</h1>
              <p>
                Welcome to Codehit Solutions, where creativity meets
                functionality. Our graphic design development services combine
                artistic flair with strategic thinking to deliver visually
                stunning designs that effectively communicate your brand's
                message.
              </p>
            </motion.div>
            <motion.div
              className="intro-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/graphicdesign.jpg" alt="Graphic Designing" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="detail-tagline">
        <div className="container-narrow">
          <h2>Grow your business with custom web development services</h2>
          <p>
            Graphic designers play a crucial role in shaping the visual identity
            of brands, businesses, and organizations. They work on a wide range
            of projects, including logo design, branding materials, packaging,
            brochures, flyers, websites, social media graphics, and more. The
            goal of graphic design is to create designs that not only catch the
            viewer's attention but also communicate the intended message clearly
            and effectively.
          </p>
        </div>
      </section>

      <section className="detail-services">
        <div className="container">
          <div className="grid grid-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-detail-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
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
              At Codehit Solutions, we understand that graphic design is more
              than just aesthetics. We follow a strategic approach to ensure
              that our designs align with your brand and resonate with your
              target audience. Our team combines artistic talent with market
              research, industry trends, and your unique requirements to deliver
              designs that captivate and drive results.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default GraphicDesign;
