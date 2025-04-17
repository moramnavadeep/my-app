import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Acre Vista</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#properties">Properties</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1> Acre Vista</h1>
          <p>
            Discover how our platform simplifies managing properties, tenants, and maintenance.
          </p>
          <a href="#services" className="btn">Learn More</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Tenant Management</h3>
            <p>Streamline tenant communications, payments, and contracts.</p>
          </div>
          <div className="service-card">
            <h3>Property Listings</h3>
            <p>Showcase your available properties with ease.</p>
          </div>
          <div className="service-card">
            <h3>Maintenance Tracking</h3>
            <p>Efficiently manage and track maintenance requests.</p>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="section">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          <div className="property-card">
            <img src="https://via.placeholder.com/300" alt="Property 1" />
            <h3>Modern Apartment</h3>
            <p>Location: New York City</p>
          </div>
          <div className="property-card">
            <img src="https://via.placeholder.com/300" alt="Property 2" />
            <h3>Luxury Villa</h3>
            <p>Location: Miami Beach</p>
          </div>
          <div className="property-card">
            <img src="https://via.placeholder.com/300" alt="Property 3" />
            <h3>Cozy Studio</h3>
            <p>Location: San Francisco</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing top-notch property management solutions to make your
          life easier. With years of experience, we ensure your properties are managed
          efficiently and effectively.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to us!</p>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Property Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
