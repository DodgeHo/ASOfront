"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CuratedImage from "@/public/images/Curated.png";
import ViewImage from "@/public/images/View.png";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { useEffect } from "react";
import type { Slide } from "@/configs/HomePageTypes";

interface StoryCardsProps {
  slides: Slide[];
}

const StoryCards = (props: StoryCardsProps) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  useEffect(() => {
    const slider = document.getElementById("slider");

    const handleScroll = () => {
      // 不再修改 leftArrow 的样式
    };

    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  if (!Array.isArray(props.slides)) {
    return null;
  }

  return (
    <div id="main-slider-container">
      <div id="left-touch-area" onClick={slideLeft}></div>
      <FaChevronLeft className="slider-icon left" onClick={slideLeft} />
      <div id="slider">
        {props.slides.map((slide, index) => {
          const imagePath = slide.imageSrcPath.split("/").pop();
          const imageSrc = require(`../public/images/${imagePath}`).default;
          return (
            <a className="slider-card" key={index} href={slide.href}>
              <div className="slider-card-header">
                <Image
                  className="slider-card-image"
                  src={imageSrc}
                  alt={slide.title}
                  width={30}
                  height={30}
                />
                <p className="slider-card-title">{slide.title}</p>
                <div className="curated-image-container">
                  <Image
                    src={CuratedImage}
                    alt="Curated"
                    className="curated-image"
                  />
                </div>
              </div>
              <div className="slider-card-stats">
                <div className="third-width-center">Funds Raised</div>
                <div className="third-width-center">% Sold</div>
                <div className="third-width-center">Current FDV MC</div>
              </div>
              <div className="slider-card-figure">
                <div className="third-width-center">{slide.fundsRaised}</div>
                <div className="third-width-center">{slide.percentSold}</div>
                <div className="third-width-center">{slide.currentFDVMC}</div>
              </div>
              <p className="slider-card-description">{slide.description}</p>
              <div className="view-image-container">
                <Image src={ViewImage} alt="View" className="view-image" />
              </div>
            </a>
          );
        })}
      </div>
      <FaChevronRight className="slider-icon right" onClick={slideRight} />
    </div>
  );
};

export default StoryCards;
