import React, { useState } from "react";
import "./residence.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { data } from "../../utils/Carasoul";
import { sliderSetting } from "../../utils/Common";

const Residence = () => {
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (residence) => {
    setModalData(residence);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <>
      <section className="residence-wrapper" id="Residence">
        <div className="paddings innerWidth residence-container">
          {/* Heading */}
          <div className="residence-heading flexColStart paddings">
            <span className="orangeText">Best Choice</span>
            <span className="primaryText">Popular Residences</span>
          </div>

          {/* Swiper Carousel */}
          <Swiper {...sliderSetting}>
            <SliderButton />
            {data?.map((residence, i) => (
              <SwiperSlide key={i}>
                <ResidenceCard {...residence} onClick={() => handleOpenModal(residence)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {modalData && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">{modalData.name}</span>
              <button className="modal-close" onClick={handleCloseModal}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <img className="modal-image" src={modalData.image} alt={modalData.name} />
              <div className="modal-info">
                <span className="modal-price">
                  <strong>Price: </strong>
                  <span style={{ color: "orange", fontWeight: 600 }}>$</span>
                  {modalData.price}
                </span>
                <p className="modal-detail">{modalData.detail}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ResidenceCard = ({ name, price, detail, image, onClick }) => {
  return (
    <div className="residence-card" onClick={onClick}>
      <img src={image} alt={name} />
      <span className="secondaryText residence-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{price}</span>
      </span>
      <span className="primaryText residence-name">{name}</span>
      <span className="secondaryText residence-detail">{detail}</span>
    </div>
  );
};

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="residence-button">
      <button aria-label="Previous Slide" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button aria-label="Next Slide" onClick={() => swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};

export default Residence;
