import Logo from '../../assets/site.png';
import { GiHamburgerMenu } from "react-icons/gi";
import './Header.css';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(false);
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth h-container">
        <img src={Logo} alt="logo" width={110} />

        <OutsideClickHandler onOutsideClick={() => setShowMenu(false)}>
          <div className={`h-menu ${showMenu ? 'open' : ''}`}>
            <ul className="flexCenter">
              <li onClick={() => scrollToSection('Residence')}>residence</li>
              <li onClick={() => scrollToSection('Values')}>our values</li>
              <li onClick={() => scrollToSection('contact')}>contact us</li>
              <li onClick={() => scrollToSection('getstarted')}>get started</li>
              <button type="button" className="button" onClick={() => setShowPopup(true)}>
                contact
              </button>
            </ul>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={toggleMenu}>
          <GiHamburgerMenu size={35} />
        </div>
      </div>

      {/* Custom popup for contact */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Contact Us</h2>
            <form>
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />
              <label>Phone:</label>
              <input type="tel" placeholder="Enter your phone number" required />
              <div className="popup-buttons">
                <button type="submit" className="button">Submit</button>
                <button type="button" className="button cancel" onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
