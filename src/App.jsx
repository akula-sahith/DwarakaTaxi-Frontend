import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HeroLayout from "./components/layout/HeroLayout";
import MainLayout from "./components/layout/MainLayout";

import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Tariff from "./pages/Tariff";
import ContactUs from "./pages/ContactUs";
import TandC from "./pages/TermsandConditions";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
              <HomePage />
          }
        />

           <Route
           path="/about"
           element={
             <MainLayout>
               <About/>
             </MainLayout>}
         /> 

          <Route
           path="/services"
           element={
             <MainLayout>
               <Services/>
             </MainLayout>}
         /> 

        <Route
          path="/tariff"
          element={
            <MainLayout>
              <Tariff/>
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactUs />
            </MainLayout>
          }
        />

        {/* <Route
          path="/terms"
          element={
            <MainLayout>
              <TandC/>
            </MainLayout>
          } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
