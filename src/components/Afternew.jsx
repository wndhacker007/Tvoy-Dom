import React from 'react'
import box1 from "../assets/svg/box1.svg"

function Afternew() {
return (
<div className='afternew'>
	<h1>Наши преимущества</h1>
	<div className="box-x">
		<div className="box">
			<div className="text-a">
			<img src={box1} alt="" />
			<p>Лучшие цены на стройметриалы</p>
			<span>С первого этапа до конца строительства стоимость не изменится</span>
			</div>
		</div>
		<div className="box">
			<div className="text-a">
			<img src={box1} alt="" />
			<p>Ответственное строительство</p>
			<span>От 8 до 12 пакетов для каждого представленного дома</span>
			</div>
		</div>
		<div className="box">
			<div className="text-a">
			<img src={box1} alt="" />
			<p>Фиксированная стоимость</p>
			<span>Только опытные строительные бригады с многолетним опытом</span>
			</div>
		</div>
		<div className="box">
			<div className="text-a">
			<img src={box1} alt="" />
			<p>Уникальный выбор пакетов</p>
			<span>Работаем только напрямую с поставщиками материалов</span>
			</div>
		</div>
	</div>
</div>
)
}

export default Afternew