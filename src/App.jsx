import "./App.css";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/AboutUs";
import Album from "./pages/Album";
// import ContactUs from "./pages/ContactUs";
import ContactN from "./pages/ContactN";
// import RegistrationForm from "./pages/RegistrationForm";
import RegistrationSummary from "./pages/RegistrationSummary";  
import MultiStepForm from "./components/registrationForm/MultiStepForm";
import Condition from "./pages/Condition";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import FileUpload from "./components/fileUpload/FileUpload";
import NewsUpdate from "./pages/NewsUpdate";
import CoachesDetails from "./pages/CoachesDetails";
import HeatResults from "./pages/HeatResults";
import SemiFinalResults from "./pages/SemiFinalsResults";
import FinalResults from "./pages/FinalResults";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/contactus" element={<ContactUs />} /> */}
          <Route path="/contact" element={<ContactN />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/registration-summary" element={<RegistrationSummary />} />     
          <Route path="/registration" element={<MultiStepForm />} />
          <Route path="/file-upload" element={<FileUpload />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/album" element={<Album />} />
          <Route path="/news" element={<NewsUpdate />} />
          <Route path="/coaches-details" element={<CoachesDetails />} />
          <Route path="/heat-results" element={<HeatResults />} />
          <Route path="/semi-final-results" element={<SemiFinalResults />} />
          <Route path="/final-results" element={<FinalResults />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
