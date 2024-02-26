import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./_galleryNav.scss";

const GalleryNav = () => {
  const location = useLocation();

  useEffect(() => {
    const buttonElement = document.querySelector(".active");
    if (buttonElement) {
      const { top } = buttonElement.getBoundingClientRect();
      window.scrollTo(0, window.scrollY + top);
    }
  }, [location.pathname]);

  return (
    <nav id="nav_gallery">
      <a href="/gallery">
        <button
          className={location.pathname === "/destinations" ? "active" : ""}
        >
          OUR GUESTS
        </button>
      </a>

      <a href="/destinations">
        <button className={location.pathname === "/gallery" ? "active" : ""}>
          DESTINATIONS
        </button>
      </a>
    </nav>
  );
};

export default GalleryNav;
