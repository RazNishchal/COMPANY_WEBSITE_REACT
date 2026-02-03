import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Courses.css";

function Courses() {
  const courses = [
    {
      title: "Software Development",
      image: "/images/images.jpg",
      link: "/services/software-development",
    },
    {
      title: "Web Development",
      image: "/images/webappdevelopmentr.png",
      link: "/services/web-development",
    },
    {
      title: "Graphic Designing",
      image: "/images/graphic.webp",
      link: "/services/graphic-design",
    },
    {
      title: "Mobile App Development",
      image: "/images/mobileapp.png",
      link: "/services/mobile-development",
    },
  ];

  return (
    <div className="courses-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Courses We Offer</h1>
            <p className="hero-subtitle">
              We offer three different courses plans according to requirement of
              learner in our company.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="courses-content">
        <div className="container">
          <div className="grid grid-4">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="course-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                </div>
                <h3>{course.title}</h3>
                <Link to={course.link} className="btn btn-primary">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
