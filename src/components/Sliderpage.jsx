import React from 'react';
import uy1 from "../assets/img/uy1.png";
import uy2 from "../assets/img/uy2.png";
import uy3 from "../assets/img/uy3.png";
import slider from "../assets/img/Slider.png"

function Sliderpage() {
  return (
    <div className='slider'>
      <div className="text-l">
			<h1>Эти дома построили мы</h1>
			<button>Смотреть все дома</button>
			</div>
     
        <div className="uybirinchi">
          <div className="uy">
            <img src={uy1} alt="House 1" />
            <span>Наименование проекта</span>
          </div>
          <div className="uy">
            <img src={uy2} alt="House 2" />
            <span>Наименование проекта</span>
          </div>
          <div className="uy">
            <img src={uy3} alt="House 3" />
            <span>Наименование проекта</span>
          </div>
        </div>
			<div className="image">
			<img src={slider} alt="" />
			</div>
      </div>
    
  );
}

export default Sliderpage;
