import React from 'react';
import rasm5 from "../assets/img/rasm5.png";
import rasm6 from "../assets/img/rasm6.png";
import rasm7 from "../assets/img/rasm7.png";
import rasm8 from "../assets/img/rasm8.png";
import komnata from "../assets/img/Комнаты.png"


function Mainew() {
    const fakeMalumot = [
        { id: 1, img: rasm5 },
        { id: 2, img: rasm6 },
        { id: 3, img: rasm7 },
        { id: 4, img: rasm8 }
    ];

    return (
        <div className='mainew'>
            <div className="button-s">
                <h1>Одноэтажные дома</h1>
                <button>Все одноэтажные дома</button>
            </div>
            <div className="card-s">
                {fakeMalumot.map((item) => (
                    <div key={item.id} className="card">
                        <img src={item.img} alt={`Image ${item.id}`} />
                        <p>Серия «Успех-1»</p>
												<span>Цена от:</span>
													<h1>158 410 ₽</h1>
													<img src={komnata} alt="" />
													<button>Подробнее о проекте</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mainew;
