import BackofficeMenu from "../components/navs/BackofficeMenu";
// import { useState } from "react";
// import customerParameter from "../assets/parameters/parameterNewCustomer.json";
// import QRCode from "react-qr-code";
// import QRReader from "react-qr-reader";
import "./_scanning.scss";

const Scanning = () => {
  // const handleScan = (data) => {
  //   if (data) {
  //     console.log("Result: ", data);
  //   }
  // };

  // const handleError = (err) => {
  //   console.error(err);
  // };

  return (
    <main id="scanning">
      <BackofficeMenu />
      <article id="scanning_article">
        {/* <QRCode
          value="<https://www.example.com>"
          size={128}
          style={{ margin: "20px" }}
        />
        <QRReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "50%" }}
        /> */}
      </article>
    </main>
  );
};

export default Scanning;
