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

function App() {
  return (
    <>
   
      <BrowserRouter>
        <Navbar />
       <main>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:slug" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactFormSection />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
       </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

