import React from 'react';
import rasm1 from "../assets/img/card-a.png";
import rasm2 from "../assets/img/rasm2.png"	
import rasm3 from "../assets/img/rasm3.png"
import rasm4 from "../assets/img/rasm4.png"
import komnata from "../assets/img/Комнаты.png"

function Aftermain() {
	const fakeData = [
		{ id: 1, img: rasm1 },
		{ id: 2, img: rasm2 },
		{ id: 3, img: rasm3 },
		{ id: 4, img: rasm4 }
	];

	return (
		<div className='aftermain'>
			<div className="button-d">
			<h1>Загородные дома</h1>
			<button>Все загородные дома</button>
			</div>
			<div className="cards">
				{fakeData.map((item) => (
					<div key={item.id} className="card">
						<img src={item.img} alt={`Image ${item.id}`} />
						<p>Дом «Фортуна-3»</p>
						<span>Цена от:</span>
						<h1>462 574 ₽</h1>
						<img src={komnata} alt="" />
						<button>Подробнее о проекте</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Aftermain;
