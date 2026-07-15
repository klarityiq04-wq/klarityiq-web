import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import SolutionsOverview from "./pages/SolutionsOverview";
import AgenticAi from "./pages/AgenticAi";
import DigitalTransformation from "./pages/DigitalTransformation";
import Iot from "./pages/Iot";
import BespokeApplications from "./pages/BespokeApplications";
import CustomAgentsAutomation from "./pages/CustomAgentsAutomation";
import NativeAiMl from "./pages/NativeAiMl";
import EdgeOpenConnectivity from "./pages/EdgeOpenConnectivity";
import ScaleGovernanceInsights from "./pages/ScaleGovernanceInsights";
import SecurityCompliance from "./pages/SecurityCompliance";
import LogisticsWarehouse from "./pages/LogisticsWarehouse";
import DiscreteManufacturing from "./pages/DiscreteManufacturing";
import Pharmaceutical from "./pages/Pharmaceutical";
import ComplexDigitalWorkflows from "./pages/ComplexDigitalWorkflows";
import ProductionManagement from "./pages/ProductionManagement";
import InventoryManagement from "./pages/InventoryManagement";
import TraceabilityPredictability from "./pages/TraceabilityPredictability";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/solutions" element={<SolutionsOverview />} />
          <Route path="/agentic-ai" element={<AgenticAi />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/iot" element={<Iot />} />
          <Route path="/bespoke-applications" element={<BespokeApplications />} />
          <Route path="/custom-agents-automation" element={<CustomAgentsAutomation />} />
          <Route path="/native-ai-ml" element={<NativeAiMl />} />
          <Route path="/edge-open-connectivity" element={<EdgeOpenConnectivity />} />
          <Route path="/scale-governance-insights" element={<ScaleGovernanceInsights />} />
          <Route path="/security-compliance" element={<SecurityCompliance />} />
          <Route path="/logistics-warehouse" element={<LogisticsWarehouse />} />
          <Route path="/discrete-manufacturing" element={<DiscreteManufacturing />} />
          <Route path="/pharmaceutical" element={<Pharmaceutical />} />
          <Route path="/complex-digital-workflows" element={<ComplexDigitalWorkflows />} />
          <Route path="/production-management" element={<ProductionManagement />} />
          <Route path="/inventory-management" element={<InventoryManagement />} />
          <Route path="/traceability-predictability" element={<TraceabilityPredictability />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
