// imports
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      <nav id="headerNav">
        <ul>
          <li>
            <Link to="/to_reservation">make a reservation</Link>
          </li>
          <li>
            <Link to="/about_us">about us</Link>
          </li>
          <li>
            <Link className="headerNav_link" to="/">
              <h1>
                Captain <span>V</span>asilis
              </h1>
              <div>
                <span></span>
                <p>Boat tour</p>
                <span></span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
          <li>
            <Link to="/contact_us">contact us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNav;
