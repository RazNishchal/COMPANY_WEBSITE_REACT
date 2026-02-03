import { motion } from "framer-motion";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Willing to be a Graphic Designer?",
    category: "Graphic Design",
    image: "/images/photoshop.png",
    link: "https://codehitsolution.blogspot.com/2023/07/willing-to-be-graphic-designer.html",
    desc: "Discover the path to becoming a professional graphic designer and mastering visual communication.",
  },
  {
    id: 2,
    title: "The Journey of a Software Developer",
    category: "Software Development",
    image: "/images/software.jpg",
    link: "https://codehitsolution.blogspot.com/2023/07/willing-to-be-software-developer.html",
    desc: "A comprehensive guide on the skills and mindset required to thrive in the world of software engineering.",
  },
  {
    id: 3,
    title: "Mastering Modern Web Design",
    category: "Web Development",
    image: "/images/web-development-services.png",
    link: "https://codehitsolution.blogspot.com/2023/07/willing-to-be-web-developer.html",
    desc: "Learn how to build responsive, beautiful websites using the latest industry standards.",
  },
  {
    id: 4,
    title: "Path to Mobile App Development",
    category: "App Development",
    image: "/images/mobile-app-architecture (1).png",
    link: "https://codehitsolution.blogspot.com/2023/07/willing-to-be-mobile-app-developer.html",
    desc: "Explore the architecture and logic behind building successful mobile applications.",
  },
];

function Blog() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Hear it Here from the Best in Tech</h1>
            <p className="hero-subtitle">
              Explore resources to discover how we can help your brand reach its
              full potential.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                  >
                    Read Full Story <i className="fa fa-external-link"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
