import contactImage from '../../assets/contact.jpg';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsChatDotsFill } from 'react-icons/bs';

const Contact = () => {
  const modes = [
    {
      label: 'Call',
      number: '9991991991',
      icon: <MdCall size={25} />,
      action: `tel:9991991991`,
    },
    {
      label: 'Chat',
      number: '9991991991',
      icon: <BsChatDotsFill size={25} />,
      action: `sms:9991991991`, // or use WhatsApp link if desired
    },
    {
      label: 'Video Call',
      number: '9991991991',
      icon: <MdCall size={25} />,
      action: `tel:9991991991`, // simulate video call via call link for now
    },
    {
      label: 'Message',
      number: '9991991991',
      icon: <BsChatDotsFill size={25} />,
      action: `sms:9991991991`,
    },
  ];

  return (
    <section className="contact-wrapper" id="contact">
      <div className="paddings innerWidth flexCenter contact-container">
        {/* Left */}
        <div className="flexColStart contact-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best service to you. We believe that a good place to live can make your life better.
          </span>

          <div className="flexColStart contactmodes">
            {/* First Row */}
            <div className="flexStart row">
              {modes.slice(0, 2).map((mode, index) => (
                <div key={index} className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">{mode.icon}</div>
                    <div className="flexColStart detail">
                      <span className="primaryText">{mode.label}</span>
                      <span className="secondaryText">{mode.number}</span>
                    </div>
                  </div>
                  <a href={mode.action} className="flexCenter button">
                    {mode.label.toLowerCase()} now
                  </a>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="flexStart row">
              {modes.slice(2).map((mode, index) => (
                <div key={index + 2} className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">{mode.icon}</div>
                    <div className="flexColStart detail">
                      <span className="primaryText">{mode.label}</span>
                      <span className="secondaryText">{mode.number}</span>
                    </div>
                  </div>
                  <a href={mode.action} className="flexCenter button">
                    {mode.label.toLowerCase()} now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="contact-right">
          <div className="image-container">
            <img src={contactImage} alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
