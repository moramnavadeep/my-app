import React, { useState } from 'react';
import './GetStarted.css';

const GetStarted = () => {
  // State for showing the plans and tracking selected plan details
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    location: '',
  });
  const [isSubscribed, setIsSubscribed] = useState(false); // Subscription status
  const [error, setError] = useState('');

  // Handle plan selection
  const handlePlanSelection = (plan) => {
    const planDetails = {
      Month: {
        title: "Monthly Plan",
        description: "Pay every month for a flexible and easy subscription to your desired residence.",
        amount: "$99/month",
      },
      Year: {
        title: "Yearly Plan",
        description: "Enjoy a discount with yearly payments. Pay for the whole year and save more.",
        amount: "$999/year",
      },
      Decade: {
        title: "Decade Plan",
        description: "Go long-term with a Decade plan and enjoy exclusive offers for a full 10 years.",
        amount: "$8999/decade",
      },
    };

    // Set selected plan details to state
    setSelectedPlan(planDetails[plan]);
  };

  // Handle input change for subscription form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle subscription form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation logic: Ensure all fields are filled
    if (!formData.email || !formData.phone || !formData.location) {
      setError("All fields are required!");
      return;
    }

    // Simulate form submission
    setIsSubscribed(true);
    setError(''); // Clear any previous error
    console.log('Subscription Details:', formData);
  };

  return (
    <div className="g-wrapper"section id="getstarted">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter innerContainer">
          <span className="primaryText">Get Started with Stellar Home</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon.
          </span>

          {/* Show the "Get Started" button */}
          {!showPlans && (
            <button className="button" onClick={() => setShowPlans(true)}>
              Get Started
            </button>
          )}

          {/* Show the subscription plans after clicking "Get Started" */}
          {showPlans && !selectedPlan && (
            <div className="plan-options">
              <button className="button" onClick={() => handlePlanSelection('Month')}>
                Monthly Plan
              </button>
              <button className="button" onClick={() => handlePlanSelection('Year')}>
                Yearly Plan
              </button>
              <button className="button" onClick={() => handlePlanSelection('Decade')}>
                Decade Plan
              </button>
            </div>
          )}

          {/* Show plan details and subscription form after selecting a plan */}
          {selectedPlan && (
            <div className="modal-overlay">
              <div className="modal-container">
                <div className="modal-header">
                  <span className="modal-title">{selectedPlan.title}</span>
                  <button
                    className="modal-close"
                    onClick={() => setSelectedPlan(null)} // Close plan details
                  >
                    ✕
                  </button>
                </div>
                <div className="modal-body">
                  <h2>{selectedPlan.title}</h2>
                  <p>{selectedPlan.description}</p>
                  <h3>{selectedPlan.amount}</h3>

                  {/* Subscription Form */}
                  <form className="subscription-form" onSubmit={handleFormSubmit}>
                    <label htmlFor="email">Email Address:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />

                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />

                    <label htmlFor="location">Preferred Location:</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />

                    <button type="submit" className="submit-button">
                      Subscribe Now
                    </button>
                  </form>

                  {/* Display error or success message */}
                  {error && <p className="error-message">{error}</p>}
                  {isSubscribed && !error && (
                    <p className="success-message">You have successfully subscribed!</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
