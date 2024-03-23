import React from 'react';
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";

function Afterslider() {
    return (
        <div className='afterslider'>
            <h1>Контактная информация</h1>
            <div className="parent">
                <div className="box-d">
                    <div className="text-al">
                        <h1>Выставочная площадка в Тамбове:</h1>
                        <div className="rasmlar">
                            <img src={img1} alt="Тамбов" />
                            <img src={img2} alt="Тамбов" />
                        </div>
                        <p>Адрес: <br /><span>г. Тамбов, ул. Киквидзе, 69 Б</span></p>
                        <p>Телефон: <br /><span>8 475 2-644-100</span></p>
                        <p>Часы работы: <br /><span>Вторник-Суббота с 10:00 до 18:00</span></p>
                        <p>Выходной: <br /><span>Воскресенье и Понедельник</span></p>
                    </div>
                </div>
                <div className="box-d">
                    <div className="text-al">
                        <h1>Выставочная площадка в Воронеже:</h1>
                        <div className="rasmlar">
                            <img src={img3} alt="Воронеж" />
                            <img src={img4} alt="Воронеж" />
                        </div>
                        <p>Адрес: <br /><span>г. Воронеж, ул. Остужева, д.45</span></p>
                        <p>Телефон: <br /><span>8 473 2-914-100</span></p>
                        <p>Часы работы: <br /><span>Вторник-Суббота с 10:00 до 18:00</span></p>
                        <p>Выходной: <br /><span>Воскресенье и Понедельник</span></p>
                    </div>
                </div>
                <div className="box-d">
                    <div className="text-al">
                        <h1>Выставочная площадка в Московской области:</h1>
                        <div className="rasmlar">
                            <img src={img5} alt="Московская область" />
                            <img src={img6} alt="Московская область" />
                        </div>
                        <p>Адрес: <br /><span>г. Москва, ул. Примерная, 123</span></p>
                        <p>Телефон: <br /><span>8 49664 777-99, 8 915-329-78-56</span></p>
                        <p>Часы работы: <br /><span>Вторник-Суббота с 10:00 до 18:00</span></p>
                        <p>Выходной: <br /><span>Воскресенье и Понедельник</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Afterslider;
