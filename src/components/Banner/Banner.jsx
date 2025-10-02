import "./Banner.css";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
  faCircleXmark,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

export default function Banner({ title, description, severity = "neutral" }) {
  const SEVERITY_ICONS = {
    success: faCircleCheck,
    warning: faTriangleExclamation,
    error: faCircleXmark,
    neutral: faCircleInfo,
  };

  const finalSeverity = SEVERITY_ICONS.hasOwnProperty(severity)
    ? severity
    : "neutral";

  const icon = SEVERITY_ICONS[finalSeverity];

  const bannerClassName = `banner ${finalSeverity}`;

  return (
    <div className={bannerClassName}>
      <div className="banner-content">
        <div className="banner-content-icon neutral">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="banner-content-text">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
}
