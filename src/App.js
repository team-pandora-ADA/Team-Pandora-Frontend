import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import LandlordLogin from "./pages/Authentication/LandlordLogin";
import RegisterPage from "./pages/Authentication/Register";
import TenantLogin from "./pages/Authentication/TenantLogin";
import Contact from "./pages/Contact";
import LandlordDashboard from "./pages/Dashboard/Landlord/LandlordDashboard";
import TenantDashboard from "./pages/Dashboard/Tenant/TenantDashboard";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/tenant-login" element={<TenantLogin />} />
        <Route path="/landlord-login" element={<LandlordLogin />} />
        <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/tenant-dashboard" element={<TenantDashboard />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
