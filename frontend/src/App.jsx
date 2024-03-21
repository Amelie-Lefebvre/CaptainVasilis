import { BrowserRouter, Routes, Route } from "react-router-dom";

// import main components
import Header from "./components/containers/Header";
import Footer from "./components/containers/Footer";

// import pages

import Index from "./pages/Index";
import Reservation from "./pages/Reservation";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Destinations from "./pages/Destinations";
import Contact_us from "./pages/Contact_us";

// destinations

import Dest_Lindos from "./pages/Dest_Lindos";
import Dest_StPaul from "./pages/Dest_StPaul";
import Dest_ParadiseRock from "./pages/Dest_ParadiseRock";
import Dest_NavaroneBay from "./pages/Dest_NavaroneBay";
import Dest_RedSandBeach from "./pages/Dest_RedSandBeach";
import Dest_AgathiGoldenSandBeach from "./pages/Dest_AgathiGoldenSandBeach";
import Dest_Haraki from "./pages/Dest_Haraki";

// FOOTER

import Attributions from "./pages/Attributions";
import Faq from "./pages/Faq";
import Privacy_policy from "./pages/Privacy_policy";

// BACKOFFICE PAGES
import Login from "./pages/Login";
import Index_backend from "./pages/Index_backend";
import Booking from "./pages/Booking";
import Partners from "./pages/Partners";
import Accounting from "./pages/Accounting";
import Scanning from "./pages/Scanning";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* CLIENT */}
        <Route path="/" element={<Index />} />
        <Route path="/to_reservation/*" element={<Reservation />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/destinations" element={<Destinations />} />

        {/* destinations */}
        <Route path="/destinations/lindos" element={<Dest_Lindos />} />
        <Route path="/destinations/st_pauls_bay" element={<Dest_StPaul />} />
        <Route
          path="/destinations/paradise_rock"
          element={<Dest_ParadiseRock />}
        />
        <Route
          path="/destinations/navarone_bay"
          element={<Dest_NavaroneBay />}
        />
        <Route
          path="/destinations/red_sand_beach"
          element={<Dest_RedSandBeach />}
        />
        <Route
          path="/destinations/agathi_golden_sand_beach"
          element={<Dest_AgathiGoldenSandBeach />}
        />
        <Route path="/destinations/haraki" element={<Dest_Haraki />} />
        <Route path="/contact_us" element={<Contact_us />} />
        <Route path="/privacy_policy" element={<Privacy_policy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/attributions" element={<Attributions />} />

        {/* BACKOFFICE */}
        <Route path="/backoffice/login" element={<Login />} />
        <Route />
        <Route path="/backoffice/index" element={<Index_backend />}></Route>
        <Route path="/backoffice/booking" element={<Booking />}></Route>
        <Route path="/backoffice/accounting" element={<Accounting />}></Route>
        <Route
          path="/backoffice/scanning_qr_code"
          element={<Scanning />}
        ></Route>
        <Route
          path="/backoffice/editing/partners"
          element={<Partners />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
