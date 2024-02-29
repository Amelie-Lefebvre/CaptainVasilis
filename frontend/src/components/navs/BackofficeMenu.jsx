// imports
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./_backOfficeMenu.scss";

const BackofficeMenu = () => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Determine the active button based on the current URL path when the component mounts or when the URL changes
    determineActiveButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // Re-run the effect when the URL path changes

  const handleAnchorClick = (button, path) => {
    setActiveButton(button);
    window.history.pushState({}, "", `/backoffice/${path}`);
  };

  // Function to determine the active button based on the current URL path
  const determineActiveButton = () => {
    const paths = ["booking", "accounting", "partners"];
    for (const path of paths) {
      if (location.pathname.includes(path)) {
        setActiveButton(path.toUpperCase()); // Set the active button to uppercase for consistency
        return;
      }
    }
    // If none of the paths match, reset the active button
    setActiveButton(null);
  };

  return (
    <nav id="backOffice_menu">
      {/* BOOKING */}
      <a
        className={`backOffice_menu_a ${
          activeButton === "BOOKING" ? "active" : ""
        }`}
        onClick={() => handleAnchorClick("BOOKING", "booking")}
      >
        <button>
          <img
            className="backOffice_menu_a_icon"
            src="/src/assets/images/images_structure/calendar.svg"
            alt="icon calendar"
          />
          BOOKING
        </button>
        {activeButton === "BOOKING" && (
          <img
            className="arrow_right"
            src="/src/assets/images/images_structure/right-arrow.svg"
            alt="icon arrows to the right"
          />
        )}
      </a>
      {/* ACCOUNTING */}
      <a
        className={`backOffice_menu_a ${
          activeButton === "ACCOUNTING" ? "active" : ""
        }`}
        onClick={() => handleAnchorClick("ACCOUNTING", "accounting")}
      >
        <button>
          <img
            className="backOffice_menu_a_icon"
            src="/src/assets/images/images_structure/calendar.svg"
            alt="icon calendar"
          />
          ACCOUNTING
        </button>
        {activeButton === "ACCOUNTING" && (
          <img
            className="arrow_right"
            src="/src/assets/images/images_structure/right-arrow.svg"
            alt="icon arrows to the right"
          />
        )}
      </a>
      {/* PARTNERS */}
      <a
        className={`backOffice_menu_a ${
          activeButton === "PARTNERS" ? "active" : ""
        }`}
        onClick={() => handleAnchorClick("PARTNERS", "partners")}
      >
        <button>
          <img
            className="backOffice_menu_a_icon"
            src="/src/assets/images/images_structure/calendar.svg"
            alt="icon calendar"
          />
          PARTNERS
        </button>
        {activeButton === "PARTNERS" && (
          <img
            className="arrow_right"
            src="/src/assets/images/images_structure/right-arrow.svg"
            alt="icon arrows to the right"
          />
        )}
      </a>
    </nav>
  );
};

export default BackofficeMenu;
