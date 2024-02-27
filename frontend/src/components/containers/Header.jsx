// imports
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

// from within
import HeaderCard from "../generics/HeaderCard";
import HeaderNav from "../navs/HeaderNav";
import BurgerMenu from "../navs/BurgerMenu";
import HomeNav from "../navs/HomeNav";
import ReturnNav from "../navs/ReturnNav";
import "./_header.scss";

const Header = () => {
  // Retrieve the current location
  const location = useLocation().pathname;

  // Check if the current path starts with "/backoffice"
  const isAdminPath = location.startsWith("/backoffice");

  // Define paths for which to display the home button
  const homePath = [
    "/",
    "/destinations/lindos",
    "/destinations/st_pauls_bay",
    "/destinations/paradise_rock",
    "/destinations/navarone_bay",
    "/destinations/agathi_golden_sand_beach",
    "/destinations/red_sand_beach",
    "/destinations/haraki",
  ];

  // Define paths for which to display the return nav
  const returnNavPaths = [
    "/destinations/lindos",
    "/destinations/st_pauls_bay",
    "/destinations/paradise_rock",
    "/destinations/navarone_bay",
    "/destinations/agathi_golden_sand_beach",
    "/destinations/red_sand_beach",
    "/destinations/haraki",
  ];

  // Determine if the home button should be displayed
  const homeNav = homePath.includes(location);

  // Define default HeaderCard content
  const defaultHeaderCardContent = {
    txt: "Discover Rhodes’ beauty",
    txt2: "from another perspective.",
    extraClass: "",
  };

  // Define HeaderCard content for specific paths
  const pathSpecificHeaderCardContent = {
    "/destinations/lindos": {
      txt: "Lindos",
      txt2: "",
      extraClass: "lindos-page",
    },
    "/destinations/st_pauls_bay": {
      txt: "Saint Paul's",
      txt2: "Bay",
      extraClass: "saint-paul-page",
    },
    "/destinations/paradise_rock": {
      txt: "Paradise Rock",
      txt2: "",
      extraClass: "paradise-rock-page",
    },
    "/destinations/navarone_bay": {
      txt: "Navarone Bay",
      txt2: "",
      extraClass: "navarone-bay-page",
    },
    "/destinations/red_sand_beach": {
      txt: "Red Sand",
      txt2: "Beach",
      extraClass: "red-sand-beach-page",
    },
    "/destinations/agathi_golden_sand_beach": {
      txt: "Agathi Golden",
      txt2: "Sand Beach",
      extraClass: "agathi-golden-sand-beach-page",
    },
    "/destinations/haraki": {
      txt: "Haraki",
      txt2: "",
      extraClass: "haraki-page",
    },

    // Add more path-specific content as needed
  };

  // Determine the appropriate HeaderCard content based on the current path
  const headerCardContent =
    pathSpecificHeaderCardContent[location] || defaultHeaderCardContent;

  // for media queries
  const isMobile = useMediaQuery({ minWidth: 580 });

  if (isAdminPath) return null;

  return (
    <>
      <header>
        {isMobile ? (
          <>
            <HeaderNav />
            <HeaderCard
              txt={headerCardContent.txt}
              txt2={headerCardContent.txt2}
              extraClass={headerCardContent.extraClass}
            />
          </>
        ) : (
          <>
            <BurgerMenu />
            <div id="header_menu_phone"></div>
          </>
        )}
      </header>
      {isMobile && !homeNav && <HomeNav />}
      {isMobile && returnNavPaths.includes(location) && <ReturnNav />}
    </>
  );
};

export default Header;
