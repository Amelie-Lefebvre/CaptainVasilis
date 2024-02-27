// imports

const HeaderNav = () => {
  return (
    <>
      <nav id="headerNav">
        <ul>
          <li>
            <a href="/to_reservation">make a reservation</a>
          </li>
          <li>
            <a href="/about_us">about us</a>
          </li>
          <li>
            <a className="headerNav_link" href="/">
              <h1>
                Captain <span>V</span>asilis
              </h1>
              <div>
                <span></span>
                <p>Boat tour</p>
                <span></span>
              </div>
            </a>
          </li>
          <li>
            <a href="/gallery">gallery</a>
          </li>
          <li>
            <a href="/contact_us">contact us</a>
          </li>
        </ul>
        <img
          id="towards_backoffice"
          src="/src/assets/images/images_structure/user.svg"
          alt="back office icon"
        />
        <a href="/backoffice/login">
          <img
            id="towards_backoffice_gif"
            src="/src/assets/animations/user.gif"
            alt="back office icon animated"
          />
        </a>
      </nav>
    </>
  );
};

export default HeaderNav;
