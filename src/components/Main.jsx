import React from 'react'
import Navbar from './Navbar'
import Aftermain from './Aftermain'
import Mainew from './Mainew'
import Afternew from './Afternew'
import Newafter from './Newafter'
import Sliderpage from './Sliderpage'
import Afterslider from './Afterslider'
import Map from './Map'
import logo from "../assets/img/image 1 1.png"
import Footer from './Footer'

function Main() {
	return (
				<div>
					<header className='first'>
						<div className="hrefs">
							<a href="">Готовые объекты </a>
							<a href="">Выставки домов</a>
							<a href="">Производство</a>
							<a href="">О компании</a>
							<a href="">Отзывы </a>
							<a href="">Блог</a>
							<a href="">Контакты</a>
						</div>
					</header>
					<Navbar/>
					<header className='second'>
						<div className="href-b">
							<a href="">Коттеджи</a>
							<a href="">Загородные дома</a>
							<a href="">Одноэтажные дома</a>
							<a href="">Садовые дома</a>
							<a href="">Бытовки</a>
						</div>
					</header>
					<div className='main'>
						<div className="text">
						<h1>Современный уютный<br /> коттедж «Звезда»</h1>
						<span>от 311 000 ₽</span>
						<button>Подробнее о проекте</button>
						</div>
					</div>
					<Aftermain/>
					<Mainew/>
					<Afternew/>
					<Newafter/>
					<Sliderpage/>
					<Afterslider/>
					<Map/>
					<div className="yangi">
						<div className="yangilar">
						<img src={logo} alt="" />
						<a href="#">Коттеджи</a>
						<a href="#">Загородные дома</a>
						<a href="#">Одноэтажные дома</a>
						<a href="#">Садовые дома</a>
						<a href="#">Бытовки</a>
						</div>
						
						
					</div>
					<Footer/>
				</div>
				
			)
		}
		


export default Main