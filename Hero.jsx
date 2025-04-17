import './Hero.css';
import image from '../../assets/Home_1.jpg';
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (city.trim() && state.trim()) {
      const fullLocation = `${city}, ${state}`;
      setLocation(fullLocation);
    } else {
      alert('Please enter both city and state');
    }
  };

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container">

        {/* Left */}
        <div className="hero-left">
          <div className="flexColStart hero-content">
            <div className="hero-title">
              <div className="orange-circle" />
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 4,
                  type: "spring"
                }}>
                discover <br />
                most suitable <br />
                property
              </motion.h1>
            </div>

            <div className="flexColStart hero-description">
              <span className='secondaryText'>
                Find a variety of properties that suit you easily
              </span>
              <span className='secondaryText'>
                Forget all the difficulties in finding residence for you
              </span>
            </div>

            <div className="flexCenter hero-search-bar">
              <HiLocationMarker color='var(--blue)' size={25} />
              <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <button className="button" onClick={handleSearch}>Search</button>
            </div>

            {location && (
              <div className="location-display">
                <span className="secondaryText">Your location is set to:</span>
                <span className="primaryText">{location}</span>
              </div>
            )}

            <div className="flexCenter hero-stats">
              <div className="flexColCenter hero-stats-content">
                <span>
                  <CountUp start={8000} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>premium products</span>
              </div>

              <div className="flexColCenter hero-stats-content">
                <span>
                  <CountUp end={50} duration={4} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>happy customers</span>
              </div>

              <div className="flexColCenter hero-stats-content">
                <span>
                  <CountUp end={100} duration={4} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>award winning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              type: "tween"
            }}
            className="image-container"
          >
            <img src={image} alt="Hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
