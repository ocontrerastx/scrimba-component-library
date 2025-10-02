import "./Card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ icon, color, title, description }) {
  return (
    <div className="card">
      <div className="card-icon" style={{ backgroundColor: color }}>
        <FontAwesomeIcon icon={["fas", icon]} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
