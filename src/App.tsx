import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Gallery from './pages/Gallery'
import OurProcess from './pages/OurProcess'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
export default function App() {
  return <Routes><Route element={<Layout />}>
    <Route index element={<Home />} /><Route path="about" element={<About />} /><Route path="services" element={<Services />} />
    <Route path="services/:slug" element={<ServiceDetail />} /><Route path="gallery" element={<Gallery />} />
    <Route path="our-process" element={<OurProcess />} /><Route path="contact" element={<Contact />} /><Route path="*" element={<NotFound />} />
  </Route></Routes>
}
