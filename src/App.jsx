import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactFormSection from './pages/ContactFormSection';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import MalwareAnalysis from './pages/Services/MalwareAnalysis';
import AdvancedReverseEngineering from './pages/Services/AdvancedReverseEngineering';
import IncidentResponseForensics from './pages/Services/IncidentResponseForensics';
import ThreatHuntingMalwareAnalysis from './pages/Services/ThreatHuntingMalwareAnalysis';
import PenetrationTesting from './pages/Services/PenetrationTesting';
import CloudSecurityTesting from './pages/Services/CloudSecurityTesting';
import ScrollToTop from './components/ScrollToTop';
import SourceCodeReview from "./pages/Services/SourceCodeReview";
import NetworkSecurityAssessment from "./pages/Services/NetworkSecurityAssessment";
import ActiveDirectorySecurity from "./pages/Services/ActiveDirectorySecurity";
import ComplianceReadiness from "./pages/Services/ComplianceReadiness";
import ZeroTrustSecurity from "./pages/Services/ZeroTrustSecurity";
import DevSecOpsIntegration from"./pages/Services/DevSecOpsIntegration";
import MobileIoTSecurity from "./pages/Services/MobileIoTSecurity";
import ThreatIntelligence from "./pages/Services/ThreatIntelligence";
import SecurityTraining from "./pages/Services/SecurityTraining";
import VcisoServicePage from './pages/Services/VcisoServicePage';
import Products from './pages/ProductsPage';
function App() {
  return (
    <>
   
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
       <main>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/services/:slug" element={<ServicesPage />} /> */}
          <Route path="/services/malware-development-analysis" element={<MalwareAnalysis />} />
          <Route path="/services/advanced-reverse-engineering" element={<AdvancedReverseEngineering />} />
          <Route path="/services/incident-response-forensics" element={<IncidentResponseForensics />} />
          <Route path="/services/penetration-testing" element={<PenetrationTesting />} />
          <Route path="/services/cloud-security-testing" element={<CloudSecurityTesting />} />
          <Route path="/services/threat-hunting-malware-analysis" element={<ThreatHuntingMalwareAnalysis />} />
          <Route path="/services/source-code-review" element={<SourceCodeReview />} /> 
          <Route path="/services/network-security-assessment" element={<NetworkSecurityAssessment />} />
          <Route path="/services/active-directory-security" element={<ActiveDirectorySecurity />} />
          <Route path="/services/compliance-readiness" element={<ComplianceReadiness />} />
          <Route path="/services/zero-trust-security" element={<ZeroTrustSecurity />} />
          <Route path="/Services/devSecOps-integration" element={<DevSecOpsIntegration />} />
          <Route path="/services/mobile-iot-security" element={<MobileIoTSecurity />} />
          <Route path="/services/threat-intelligence" element={<ThreatIntelligence />} />
          <Route path="/services/security-training" element={<SecurityTraining />} />
          <Route path='/services/vciso-services' element={<VcisoServicePage/>} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactFormSection />} />
          <Route path='/product' element={<Products />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
       </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App