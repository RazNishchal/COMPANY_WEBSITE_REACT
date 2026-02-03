import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const mapUrl = "https://maps.app.goo.gl/2JaNWqXmZeJ96hDq6";

  return (
    <footer className="footer">
      {/* Decorative Wave Top */}
      <div className="footer-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="footer-grid">
          {/* 1. Brand & Socials */}
          <div className="footer-brand-column">
            <img
              src="/images/cover1.png"
              alt="Codehit Solutions"
              className="footer-logo"
            />
            <p className="footer-description">
              Empowering the next generation with cutting-edge technical skills
              and innovative development solutions. Your success is our mission.
            </p>
            <div className="social-glass-links">
              <a
                href="https://www.facebook.com/profile.php?id=100094368549312"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fa fa-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/codehitsolutions/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/codehit-solutions/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* 2. Quick Links Navigation */}
          <div className="footer-nav-column">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Our Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact Details & Map Link */}
          <div className="footer-contact-column">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-card">
              <div className="contact-row">
                <div className="contact-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <p>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="map-link-text"
                  >
                    Lampokhari, Chabahil
                    <br />
                    Kathmandu, Nepal
                    <span className="directions-hint"> (Get Directions)</span>
                  </a>
                </p>
              </div>

              <div className="contact-row">
                <div className="contact-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <p>+977 9848511400</p>
              </div>

              <div className="contact-row">
                <div className="contact-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <p>
                  <a href="mailto:contactus@codehitsolutions.com">
                    contactus@codehitsolutions.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Footer Bottom Bar */}
        <div className="footer-base">
          <p>
            © {new Date().getFullYear()} <span>Codehit Solutions</span>. All
            rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            {"  |  "}
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
