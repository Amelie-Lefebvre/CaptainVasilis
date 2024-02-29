// imports
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./_backOfficeMenu.scss";

const BackofficeMenu = () => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const determineActiveButton = () => {
      const paths = ["booking", "accounting", "partners"];
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

  const handleLinkClick = () => {
    setActiveButton(null);
  };

  const menuItems = [
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
      to: "/backoffice/partners",
      label: "PARTNERS",
      icon: "/src/assets/images/images_structure/business-partnership.svg",
    },
  ];

  return (
    <nav id="backOffice_menu">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          onClick={handleLinkClick}
          className={`backOffice_menu_a ${
            activeButton === item.label ? "active" : ""
          }`}
        >
          <button>
            <img
              className="backOffice_menu_a_icon"
              src={item.icon}
              alt={`icon for ${item.label}`}
            />
            {item.label}
          </button>
          {activeButton === item.label && (
            <img
              className="arrow_right"
              src="/src/assets/images/images_structure/right-chevron.svg"
              alt="icon arrows to the right"
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default BackofficeMenu;
