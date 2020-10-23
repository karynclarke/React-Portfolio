import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className="cards">
			<div className="cards__container fluid">
				<div className="cards__wrapper">

					{/* ROW 1 */}

					<div className="row__cards">
						<ul className="cards__items">
							{/* WorkDayScheduler */}
							<CardItem src="assets/ScreenshotWorkdayScheduler.png " text="WorkDayScheduler" path="/projects" />
						{/* </ul> */}

						{/* Burger */}
						{/* <ul className="cards__items"> */}
							<CardItem src="assets/burgerScreenshot.jpg " text="Burger App " path="/projects" />
						</ul>
					</div>

					{/* ROW 2 */}
					<div className="row__cards">
						<ul className="cards__items">
							{/* WX Dashboard */}
							<CardItem src="assets/wxdashboard.jpg " text="WeatherDashboard" path="/projects" />

							{/* Note Taker */}
							<CardItem src="assets/NoteTakerScreenshot.png " text="NoteTaker" path="/projects" />
						</ul>
					</div>

					{/* ROW 3 */}
					<div className="row__cards">
						<ul className="cards__items">
							{/* Search Reps */}
							<CardItem src="assets/ScreenshotSearchReps.png " text="SearchMyReps" path="/projects" />

							{/* Coding Quiz */}
							<CardItem src="assets/ScreenshotCodingQuiz.png" text="CodingQuiz" path="/projects" />
						</ul>
					</div>
				</div>
			</div>
		 </div>
	);
}

export default Cards;
