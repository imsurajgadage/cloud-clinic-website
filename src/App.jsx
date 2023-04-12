import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Services from "./Components/Services/Services";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Appointments from "./Components/Appointments/Appointments";
import Academics from "./Components/Academics/Academics";
import Hightlights from "./Components/Highlights/Hightlights";
import Testomonials from "./Components/Testomonials/Testomonials";
import Locations from "./Components/Locations/Locations";
import Team from "./Components/Team/Team";
import MapLocation from "./Components/MapLocation/MapLocation";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
              <Services />
              <Appointments />
              <Team />
              <Hightlights />
              <Testomonials />
              <Locations />
              <Footer />
            </>
          }
        />
        <Route
          path="academics"
          element={
            <>
              <Navbar />
              <Academics />
              <Footer />
            </>
          }
        />
        <Route
          path="maps"
          element={
            <>
              <Navbar />
              <MapLocation />
              <Footer />
            </>
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
