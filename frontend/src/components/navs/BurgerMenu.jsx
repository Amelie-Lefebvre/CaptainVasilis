import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const handleLinkClick = () => {
    // Close the burger menu when a Link is clicked
    const checkbox = document.getElementById("burger_close_open");
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  const menuItems = [
    { to: "/", label: "home" },
    { to: "/to_reservation", label: "make a reservation" },
    { to: "/about_us", label: "about us" },
    { to: "/gallery", label: "gallery" },
    { to: "/contact_us", label: "contact us" },
  ];

  return (
    <nav id="burger_menu_container">
      <div id="burger_menu_toggle">
        {/* toggle menu in and out */}
        <input type="checkbox" id="burger_close_open" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="burger_menu_list">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} onClick={handleLinkClick}>
              <li>{item.label}</li>
            </Link>
          ))}
        </ul>
      </div>
      <img
        id="company_logo"
        src="/src/assets/images/images_structure/logo_captain_vasilis.svg"
        alt="round circle with the name of the company and two fishes in the inner circle"
      />
    </nav>
  );
};

export default BurgerMenu;
