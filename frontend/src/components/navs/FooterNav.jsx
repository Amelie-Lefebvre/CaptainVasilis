// imports
import { Link } from "react-router-dom";

const FooterNav = () => {
  const navItems = [
    { to: "/privacy_policy", label: "privacy policy" },
    { to: "/faq", label: "faq" },
    { to: "/attributions", label: "attributions" },
  ];

  return (
    <nav id="footer_nav">
      <ul id="footer_nav_items">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
