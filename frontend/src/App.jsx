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

// footer pages

// import Attributions from "./pages/Attributions";
// import Faq from "./pages/FAQ";
// import Privacy_policy from "./pages/Privacy_policy";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
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
        {/* <Route path="/privacy_policy" element={<Privacy_policy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/attributions" element={<Attributions />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
