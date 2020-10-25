import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Burger from '../assets/burgerScreenshot.JPG';
import NoteTaker from '../assets/NoteTakerScreenshot.png';
import Quiz from '../assets/ScreenshotCodingQuiz.png';
import Reps from '../assets/ScreenshotSearchReps.png';
import Workday from '../assets/ScreenshotWorkdayScheduler.png';
import Weather from '../assets/wxdashboard.jpg';

function Cards() {
	return (
		<div className="cards">
			<div className="cards__container fluid">
				<div className="cards__wrapper">
					{/* ROW 1 */}

					<div className="row__cards">
						<ul className="cards__items">
							<CardItem src={Workday} text="Workday Scheduler" 
							 path="/projects" 
							alt="WorkdayScheduler" />
						</ul>
					</div>

					<ul>
						{/* Burger */}
						<CardItem src={Burger} text="Burger App " path="/projects" />
					</ul>
				</div>

				{/* ROW 2 */}
				<div className="row__cards">
					<ul className="cards__items">
						{/* WX Dashboard */}
						<CardItem src={Weather} text="WeatherDashboard" path="/projects" />
					</ul>
					<ul>
						{/* Note Taker */}
						<CardItem src={NoteTaker} text="NoteTaker" path="/projects" />
					</ul>
				</div>

				{/* ROW 3 */}
				<div className="row__cards">
					<ul className="cards__items">
						{/* Search Reps */}
						<CardItem src={Reps} text="SearchMyReps" path="/projects" />
					</ul>
					<ul>
						{/* Coding Quiz */}
						<CardItem src={Quiz} text="CodingQuiz" path="/projects" />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
