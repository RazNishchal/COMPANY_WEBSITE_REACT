import { Link } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ title, image, description, link }) {
  return (
    <div className="service-card">
      <div className="service-card-image">
        <img src={image} alt={title} />
        <div className="service-card-overlay">
          <Link to={link} className="service-card-link">
            <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="btn-text">
          Learn More <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
