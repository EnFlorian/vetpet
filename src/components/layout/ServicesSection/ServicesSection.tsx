import React from "react";
import Slider from "react-slick";
import { SectionHeader } from "../../elements";
import styles from "./ServicesSection.module.css";
const ServicesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className={`container ${styles.wrapper}`}>
      <SectionHeader />

      <div className={styles.services}>
        <Slider {...settings}></Slider>
      </div>
    </section>
  );
};

export default ServicesSection;
