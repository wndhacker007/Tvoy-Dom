import React from 'react'
import house from "../assets/img/house 1.png"
import pilus from "../assets/img/pilus.png"
import strelka from "../assets/img/strelka.png"
import percentage from "../assets/img/persentage.png"
import quti from "../assets/img/quti.png"

function Newafter() {
return (
<div className='newafter'>
	<div className="left">
		<h1>О нашей компании</h1>
		<p>Равным образом дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки
			направлений прогрессивного развития. Идейные соображения высшего порядка, а также реализация намеченных плановых
			заданий влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных
			задач. Таким образом рамки и место обучения кадров в значительной степени обуславливает создание существенных
			финансовых и административных условий. С другой стороны рамки и место обучения кадров позволяет выполнять важные
			задания по разработке системы обучения кадров, соответствует насущным потребностям. Равным образом постоянный
			количественный рост и сфера нашей активности требуют определения и уточнения существенных финансовых и
			административных.</p>
		<div className="box-m">
			<div className="box1">
				<div className="text-c">
				<img src={pilus} alt="" />
				<p>Работаем с
					материнским
					капиталом</p>
				</div>
			</div>
			<div className="box1">
				<div className="text-c">
				<img src={percentage} alt="" />
				<p>Строительство <br />дома в кредит <br /> и ипотеку</p>
				</div>
			</div>
			<div className="box1">
			<div className="text-c">
			<img src={quti} alt="" />
			<p>Более 2 500 построенных проектов</p>
			</div>
			</div>
			<div className="box1">
				<div className="text-c">
				<img src={strelka} alt="" />
				<p>Мы более <br /> 12 лет находимся <br /> на рынке</p>
				</div>
			</div>
		</div>
	</div>
	<div className="right">
		<img src={house} alt="" />
	</div>
</div>
)
}

export default Newafter