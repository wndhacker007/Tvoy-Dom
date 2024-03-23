import React from 'react'
import logo from "../assets/img/image 1 1.png"
import phone from "../assets/svg/phone.svg"
import wk from "../assets/img/vk.png"
import facebok from "../assets/img/facebook.png"
import oxirgi from "../assets/img/oxrgi.png"


function Navbar() {
	return (
		<div className="navbar">
			<nav>
			<img src={logo} id='logo' />
			<a href="location">
			Воронеж
			</a>
			<a href="location">Время работы</a>
			<div className="phone">
				<img src={phone} alt="" />
				<a href="tel">8 473 291-41-00</a>
			</div>
			<div className="buttons">
				<button id='firstBtn'>Обратный звонок</button>
				<button id='secondBtn'><img src={wk} alt="" /></button>
				<button id='thirdBtn'><img src={facebok} alt="" /></button>
				<button id='fourthBtn'><img src={oxirgi} alt="" /></button>
				</div>
		</nav>
		</div>
	)
}

export default Navbar