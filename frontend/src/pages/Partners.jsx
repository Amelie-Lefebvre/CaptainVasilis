import { useState } from "react";
import BackofficeMenu from "../components/navs/BackofficeMenu";
import Table from "react-bootstrap/Table";
import FormPartners from "../components/forms/FormPartners";
import partnerParameters from "../assets/parameters/parameterPartners.json";
import "./_partners.scss";

const Partners = () => {
  const [partnersData, setPartnersData] = useState(
    Object.values(partnerParameters.partners)
  );

  // State for showing/hiding the overlay
  const [showOverlay, setShowOverlay] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    logo: "",
    morningChildRate: "",
    morningAdultRate: "",
    morningFullRate: "",
    afternoonChildRate: "",
    afternoonAdultRate: "",
    afternoonFullRate: "",
  });

  // Toggle function for showing/hiding the overlay
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validation logic for rate fields (decimal with 2 decimal places)
    const isValidDecimal = /^\d+(\.\d{0,2})?$/.test(value);
    if (name.includes("Rate") && !isValidDecimal) {
      // Do not update state if the value does not match the format
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if required fields are filled
    const requiredFields = [
      "name",
      "morningChildRate",
      "morningAdultRate",
      "morningFullRate",
      "afternoonChildRate",
      "afternoonAdultRate",
      "afternoonFullRate",
    ];
    const isAllRequiredFilled = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    if (!isAllRequiredFilled) {
      alert("Please fill in all required fields.");
      return;
    }

    // Replace empty values with "-"
    // Replace empty values with "-" for all fields except 'partners_logo'
    const updatedFormData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [
        key,
        key === "logo" || value.trim() !== "" ? value : "-",
      ])
    );

    // Add new partner to partnersData state
    const newPartner = {
      partners_type: "custom", // Assuming 'custom' type for new partners
      partners_name: updatedFormData.name,
      partners_phone: updatedFormData.phone,
      partners_email: updatedFormData.email,
      partners_logo: updatedFormData.logo,
      partners_rate_morning_child: updatedFormData.morningChildRate,
      partners_rate_morning_adult: updatedFormData.morningAdultRate,
      partners_rate_morning_full: updatedFormData.morningFullRate,
      partners_rate_afternoon_child: updatedFormData.afternoonChildRate,
      partners_rate_afternoon_adult: updatedFormData.afternoonAdultRate,
      partners_rate_afternoon_full: updatedFormData.afternoonFullRate,
    };
    setPartnersData([...partnersData, newPartner]);

    // Reset form data
    setFormData({
      name: "",
      phone: "",
      email: "",
      logo: "",
      morningChildRate: "",
      morningAdultRate: "",
      morningFullRate: "",
      afternoonChildRate: "",
      afternoonAdultRate: "",
      afternoonFullRate: "",
    });

    // Close the overlay
    toggleOverlay();
  };

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
              {partnersData.map((partner, index) => (
                <tr key={index}>
                  <td className="rating">
                    <img
                      src={partner.partners_logo}
                      alt={partner.partners_logo}
                    />
                  </td>
                  <td>{partner.partners_name}</td>
                  <td className="rating">
                    {partner.partners_phone ? partner.partners_phone : "-"}
                  </td>
                  <td className="rating">
                    {partner.partners_email ? partner.partners_email : "-"}
                  </td>
                  <td className="rating">
                    {partner.partners_rate_morning_child} €
                  </td>
                  <td className="rating">
                    {partner.partners_rate_morning_adult} €
                  </td>
                  <td className="rating">
                    {partner.partners_rate_morning_full} €
                  </td>
                  <td className="rating">
                    {partner.partners_rate_afternoon_child} €
                  </td>
                  <td className="rating">
                    {partner.partners_rate_afternoon_adult} €
                  </td>
                  <td className="rating">
                    {partner.partners_rate_afternoon_full} €
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        {/* Overlay */}
        <FormPartners
          showOverlay={showOverlay}
          toggleOverlay={toggleOverlay}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {/* Button to trigger overlay */}
        <button onClick={toggleOverlay}>Create a new partner</button>
      </article>
    </main>
  );
};

export default Partners;
