// imports
import BackofficeMenu from "../components/navs/BackofficeMenu";
import Table from "react-bootstrap/Table";
import partnerParameters from "../assets/parameters/parameterPartners.json";
import "./_partners.scss";

const Partners = () => {
  return (
    <main id="partners">
      <BackofficeMenu />
      <article id="partners_article">
        <div className="partners_article_selection">
          <Table striped>
            <thead>
              <tr id="tr_time">
                <th colSpan={4}></th>
                <th colSpan={3}>MORNING</th>
                <th colSpan={3}>AFTERNOON</th>
              </tr>
              <tr id="tr_header">
                <th>LOGO</th>
                <th>NAME</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>CHILD</th>
                <th>ADULT</th>
                <th>FULL BOAT</th>
                <th>CHILD</th>
                <th>ADULT</th>
                <th>FULL BOAT</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(partnerParameters.partners).map(
                (partner, index) => (
                  <tr key={index}>
                    <td className="rating">
                      <img
                        src={partner.partners_logo}
                        alt={partner.partners_name}
                      />
                    </td>
                    <td>{partner.partners_name}</td>
                    <td>{partner.partners_phone}</td>
                    <td>{partner.partners_email}</td>
                    <td className="rating">
                      {partner.partners_rate_morning_child + " €"}
                    </td>
                    <td className="rating">
                      {partner.partners_rate_morning_adult + " €"}
                    </td>
                    <td className="rating">
                      {partner.partners_rate_morning_full + " €"}
                    </td>
                    <td className="rating">
                      {partner.partners_rate_afternoon_child + " €"}
                    </td>
                    <td className="rating">
                      {partner.partners_rate_afternoon_adult + " €"}
                    </td>
                    <td className="rating">
                      {partner.partners_rate_afternoon_full + " €"}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </div>
      </article>
    </main>
  );
};

export default Partners;
