import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className="cards">
						<div className="cards__container">
				<div className="cards__wrapper">
					<div className="row__cards">
						<ul className="cards__items">
							<CardItem src="assets/ScreenshotWorkdayScheduler.png " text="WorkDayScheduler" path="/projects" />

							<CardItem src="assets/burgerScreenshot.jpg " text="Burger App " path="/projects" />

							<CardItem src="assets/wxdashboard.jpg " text="WeatherDashboard" path="/projects" />
						</ul>
					</div>
					<div className="row__cards">
						<ul className="cards__items">
							<CardItem src="assets/NoteTakerScreenshot.png " text="NoteTaker" path="/projects" />

							<CardItem src="assets/ScreenshotSearchReps.png " text="SearchMyReps" path="/projects" />

							<CardItem src="assets/ScreenshotCodingQuiz.png" text="CodingQuiz" path="/projects" />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
