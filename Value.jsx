import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdArrowDropDown } from "react-icons/md";
import "./Value.css";
import ValueImage from "../../assets/value1.jpg";
import data from "../../utils/Accordian";

const Value = () => {
  return (
    <section className="value-wrapper" section id="Values">
      <div className="paddings innerWidth flexCenter value-container">
        {/* Left */}
        <div className="value-left">
          <div className="image-container">
            <img src={ValueImage} alt="Value Visual" />
          </div>
        </div>

        {/* Right */}
        <div className="flexColStart value-right">
          <span className="orangeText text-1">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best service for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          {/* Accordion Start */}
          <Accordion allowZeroExpanded preExpanded={[0]} className="accordion">
            {data.map((item, i) => (
              <AccordionItem className="accordion-item" uuid={i} key={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordion-button">
                    <AccordionItemState>
                      {({ expanded }) => (
                        <>
                          <div className={`flexCenter icon ${expanded ? "icon-active" : ""}`}>
                            {item.icon}
                          </div>
                          <span className="primaryText">{item.heading}</span>
                          <div className={`flexCenter icon arrow ${expanded ? "rotate" : ""}`}>
                            <MdArrowDropDown size={20} />
                          </div>
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

