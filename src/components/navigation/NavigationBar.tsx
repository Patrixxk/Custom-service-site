import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./navigation.css";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const NavigationBar = () => {
  return (
    <nav>
      <div id="nav-logo-section" className="nav-section">
        <a href="#" className="navigation-link taxi">
          <FontAwesomeIcon icon={faTaxi} /> Logo
        </a>
      </div>
      <div id="nav-link-section" className="nav-section">
        <a href="#" className="navigation-link">
          Pneumatiky
        </a>
        <a href="#" className="navigation-link">
          Disky
        </a>
        <a href="#" className="navigation-link">
          Pneuservis
        </a>
      </div>
      <div id="nav-social-section" className="nav-section">
        <a href="#" className="navigation-link">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="navigation-link">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div id="nav-contact-section" className="nav-section">
        <a href="#" className="navigation-link">
          Kontaktuj nás
        </a>
      </div>
    </nav>
  );
};
