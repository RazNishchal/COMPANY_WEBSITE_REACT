import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "../components/sections/ServiceCard";
import "./Home.css";

function Home() {
  const services = [
    {
      title: "Software Development",
      image: "/images/images.jpg",
      description:
        "Software development is a dynamic field that empowers individuals to build scalable applications, leverage emerging technologies, and shape the digital landscape.",
      link: "/services/software-development",
    },
    {
      title: "Web Development",
      image: "/images/webappdevelopmentr.png",
      description:
        "Web development allows you to combine your love for design and coding to build interactive websites and web applications.",
      link: "/services/web-development",
    },
    {
      title: "Graphic Designing",
      image: "/images/graphic.webp",
      description:
        "Graphic design is an exciting field that allows individuals to blend their artistic skills with technology to create visually stunning designs.",
      link: "/services/graphic-design",
    },
    {
      title: "Mobile App Development",
      image: "/images/mobileapp.png",
      description:
        "If you're fascinated by the mobile revolution, mobile development offers an exciting path to craft innovative mobile applications.",
      link: "/services/mobile-development",
    },
  ];

  const features = [
    {
      title: "API Development",
      description:
        "We specialize in API development to help businesses leverage the power of integration and connectivity. Our experienced team creates robust and scalable APIs that enable seamless communication between different applications and systems.",
    },
    {
      title: "Project Management",
      description:
        "Efficient project management is the cornerstone of successful software development. We offer project management services to ensure that your projects are delivered on time, within budget, and to your satisfaction.",
    },
    {
      title: "E-Commerce",
      description:
        "Unlock the potential of online retail with our comprehensive e-commerce solutions. We specialize in building secure and user-friendly e-commerce websites that enable you to reach a global customer base.",
    },
    {
      title: "Business Analysis",
      description:
        "Effective business analysis is vital for making informed decisions and driving organizational growth. We offer business analysis services to help you gain valuable insights and achieve your business objectives.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Codehit Solutions</h1>
            <p className="hero-subtitle">
              Empowering Innovation, Connecting Possibilities
            </p>
            <Link to="/courses" className="btn btn-accent">
              Visit Us To Know More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Services We Offer</h2>
            <p className="section-description">
              We offer comprehensive services tailored to meet the requirements
              of learners and businesses in our company.
            </p>
          </div>

          <div className="grid grid-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section bg-light">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">ACHIEVE YOUR GOALS</p>
            <h2 className="section-title">What We Do Best</h2>
            <p className="section-description">
              How to leverage the power of tailor-made web development services?
            </p>
          </div>

          <div className="grid grid-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
