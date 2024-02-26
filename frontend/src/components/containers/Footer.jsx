//imports
import { Link } from "react-router-dom";
import FooterNav from "../navs/FooterNav";
import { useMediaQuery } from "react-responsive";
import "./_footer.scss";

const Footer = () => {
  const isMobile = useMediaQuery({ minWidth: 580 });

  return (
    <footer>
      <div className="border_wave"></div>
      <article>
        <div id="informations">
          <div id="informations_title">
            <h4>Contact info</h4>
            <span></span>
          </div>
          <ul>
            {[
              {
                label: "PHONE",
                value: "(+30) 694 500 8699",
                link: "tel:+306945008699",
              },
              {
                label: "E-MAIL",
                value: "little_boat_in_greece@yahoo.com",
                link: "mailto:little_boat_in_greece@yahoo.com",
              },
              {
                label: "COORDINATES",
                value: "click here",
                link: "https://www.google.com/maps/place/Captain+Vasilis+Boat+Tour/@36.1097495,28.0668148,15z/data=!4m14!1m7!3m6!1s0x14950db526dcca5d:0x22912da1db75a279!2sCaptain+Vasilis+Boat+Tour!8m2!3d36.1097495!4d28.0668148!16s%2Fg%2F11gn1v98c4!3m5!1s0x14950db526dcca5d:0x22912da1db75a279!8m2!3d36.1097495!4d28.0668148!16s%2Fg%2F11gn1v98c4?entry=ttue@yahoo.com",
              },
            ].map(({ label, value, link }, index) => (
              <li key={index}>
                <Link to={link}>
                  {label}:&nbsp;
                  <span className="informations_name">{value}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <img
          id="company_logo_footer"
          src="/src/assets/images/images_structure/logo_captain_vasilis.svg"
          alt="round circle with the name of the company and two fishes in the inner circle"
          width="200"
          height="200"
        />
        {/* social media */}
        <div id="social_media">
          <div id="social_media_title">
            <h4>Join us on social media</h4>
            <span></span>
          </div>
          <ul>
            {[
              {
                link: "https://www.facebook.com/SeaCruisesVasilis/",
                icon: "facebook",
                alt: "facebook logo",
              },
              {
                link: "https://www.instagram.com/explore/locations/988686412/captain-vasilis-boat-tour/",
                icon: "instagram",
                alt: "instagram logo",
              },
              {
                link: "https://www.linkedin.com",
                icon: "linkedin",
                alt: "linkedin",
              },
            ].map(({ link, icon, alt }, index) => (
              <li key={index}>
                <Link to={link}>
                  {isMobile ? (
                    <img
                      src={`/src/assets/images/images_structure/${icon}.svg`}
                      alt={alt}
                      width="40"
                      height="40"
                    />
                  ) : (
                    <img
                      src={`/src/assets/images/images_structure/${icon}_1.svg`}
                      alt={alt}
                      width="35"
                      height="35"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <div className="border_wave2"></div>
      <FooterNav />
    </footer>
  );
};

export default Footer;
