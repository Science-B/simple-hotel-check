import { useState } from "react";

import Slider from "react-slick";

import slider1 from "../../icons/slider1.png";
import slider2 from "../../icons/slider2.png";
import slider3 from "../../icons/slider3.png";
import slider4 from "../../icons/slider4.png";
import slider5 from "../../icons/slider5.png";
import slider6 from "../../icons/slider6.png";

export default function SimpleSlider() {
  const [imgs, setImgs] = useState([
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
  ]);
  const settings = {
    speed: 300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {imgs.map((img) => {
          return <img src={img} />;
        })}
      </Slider>
    </div>
  );
}
