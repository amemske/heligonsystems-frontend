'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";


export default function HomeCarousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="/assets/img/brand/aacc.png"/>
      </div>
      <div>
      <img src="/assets/img/brand/curi.png"/>
      </div>
      <div>
      <img src="/assets/img/brand/maseno.png"/>
      </div>
      <div>
      <img src="/assets/img/brand/sme-talks.png" width={150}/>
      </div>
      <div>
      <img src="/assets/img/brand/tom-mboya.png"/>
      </div>
      <div>
      <img src="/assets/img/brand/roho.png"/>
      </div>
    </Slider>
  );
}