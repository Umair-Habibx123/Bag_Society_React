import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { UserProvider } from './context/UserContext';
import ProductsSection from "./components/ProductCard/ProductsSection";
import AllProductsPage from "./components/AllProductsPage/AllProductsPage";
import Footer from "./components/footer/footer";
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons
import './App.css';
import CartPage from './components/CartPage/cartpage';
import ContactUsForm from './components/ContactPage/contactus';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          {/* Navbar is always visible */}
          <Navbar />

          {/* Routes for different pages */}
          <Routes>
            {/* Home Page */}
            <Route path="/" element={
              <>
                <Hero />
                <ProductsSection />
              </>
            } />

            {/* All Products Page */}
            <Route path="/all-products" element={
              <>
                <AllProductsPage /> {/* This will display paginated grid of all products */}
              </>
            } />

            {/* Cart Page */}
            <Route path="/my-cart" element={
              <>
                <CartPage /> {/* cart page */}
              </>
            } />

            {/* contact Us */}
            <Route path="/contact-us" element={
              <>
                <ContactUsForm /> {/* cart page */}
              </>
            } />

          </Routes>

          {/* Footer is always visible */}
          <Footer />

          {/* WhatsApp Icon - Fixed at the bottom right */}
          <div className="whatsapp-icon">
            <a
              href="https://wa.me/yourPhoneNumber" // Replace with your WhatsApp number link
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="whatsapp-icon-img" />
            </a>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
