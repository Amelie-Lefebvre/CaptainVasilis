// imports
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./_backOfficeMenu.scss";

const MenuItem = ({ to, label, icon, active, onClick, showArrow }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`backOffice_menu_a ${active ? "active" : ""}`}
  >
    <button>
      <img
        className="backOffice_menu_a_icon"
        src={icon}
        alt={`icon for ${label}`}
      />
      {label}
    </button>
    {showArrow && active && (
      <img
        className="arrow_right"
        src="/src/assets/images/images_structure/right-chevron.svg"
        alt="icon arrows to the right"
      />
    )}
  </Link>
);

const DropdownLink = ({ to, label, onClick, active }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`backOffice_menu_a_dropdown ${active ? "active" : ""}`}
  >
    <button>{label}</button>
    {active && (
      <img
        className="arrow_right"
        src="/src/assets/images/images_structure/right-chevron.svg"
        alt="icon arrows to the right"
      />
    )}
  </Link>
);

const Dropdown = ({ onClick, isOpen }) => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const determineActiveButton = () => {
      const paths = ["editing"];
      for (const path of paths) {
        if (location.pathname.includes(path)) {
          setActiveButton(path.toUpperCase());
          return;
        }
      }
      setActiveButton(null);
    };

    determineActiveButton();
  }, [location.pathname]);

  return (
    <div className="dropdown_container">
      <button className="button_dropdown" onClick={onClick}>
        <img
          src="/src/assets/images/images_structure/pen.svg"
          alt=""
          className="backOffice_menu_a_icon"
        />
        <span>WEB EDITING</span>
        {isOpen && (
          <img
            className="arrow_down"
            src="/src/assets/images/images_structure/right-chevron.svg"
            alt="icon arrows to the right"
          />
        )}
      </button>
      {/* dropdown for web editing */}
      {isOpen && (
        <div className="dropdown_content">
          <DropdownLink
            to="/backoffice/editing/partners"
            label="PARTNERS"
            onClick={onClick}
            active={activeButton === "EDITING"}
          />
          <DropdownLink
            to="/backoffice/editing/gallery"
            label="GALLERY"
            onClick={onClick}
            active={activeButton === "GALLERY"}
          />
          <DropdownLink
            to="/backoffice/editing/gallery"
            label="PAGES"
            onClick={onClick}
            active={activeButton === "PAGES"}
          />
        </div>
      )}
    </div>
  );
};

const BackofficeMenu = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const determineActiveButton = () => {
      const paths = ["booking", "accounting", "scanning"];
      for (const path of paths) {
        if (location.pathname.includes(path)) {
          setActiveButton(path.toUpperCase());
          return;
        }
      }
      setActiveButton(null);
    };

    determineActiveButton();

    // Check if the current route includes the path to partners
    if (location.pathname.includes("/backoffice/editing/partners")) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [location.pathname]);

  const handleLinkClick = () => {
    setActiveButton(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItemsA = [
    {
      to: "/backoffice/booking",
      label: "BOOKING",
      icon: "/src/assets/images/images_structure/ticket.svg",
    },
    {
      to: "/backoffice/accounting",
      label: "ACCOUNTING",
      icon: "/src/assets/images/images_structure/budgeting.svg",
    },
    {
      to: "/backoffice/scanning_qr_code",
      label: "SCANNING",
      icon: "/src/assets/images/images_structure/qr-code.svg",
    },
  ];

  return (
    <nav id="backOffice_menu">
      {menuItemsA.map((item, index) => (
        <MenuItem
          key={index}
          to={item.to}
          label={item.label}
          icon={item.icon}
          active={activeButton === item.label}
          onClick={handleLinkClick}
          showArrow={!isDropdownOpen}
        />
      ))}
      <Dropdown onClick={toggleDropdown} isOpen={isDropdownOpen} />
    </nav>
  );
};

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  showArrow: PropTypes.bool.isRequired,
};

DropdownLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

Dropdown.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default BackofficeMenu;
