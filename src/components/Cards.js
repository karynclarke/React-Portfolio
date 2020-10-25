import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Burger from '../assets/burgerScreenshot.JPG';
import NoteTaker from '../assets/NoteTakerScreenshot.png';
import CodingQuiz from '../assets/ScreenshotCodingQuiz.png';
import SearchReps from '../assets/ScreenshotSearchReps.png';
import WorkDayScheduler from '../assets/ScreenshotWorkdayScheduler.png';
import WxDashboard from '../assets/wxdashboard.jpg';

function Cards() {
	return (
		<div className="cards">
			<div className="cards__container fluid">
				<div className="cards__wrapper">
					{/* ROW 1 */}

					<div className="row__cards">
						<ul className="cards__items">
					
							<CardItem src={WorkdayScheduler} text="Workday Scheduler" 
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
							<CardItem src="assets/wxdashboard.jpg " text="WeatherDashboard" path="/projects" />
							</ul>
							<ul>
							{/* Note Taker */}
							<CardItem src="assets/NoteTakerScreenshot.png " text="NoteTaker" path="/projects" />
						</ul>
					</div>

					{/* ROW 3 */}
					<div className="row__cards">
						<ul className="cards__items">
							{/* Search Reps */}
							<CardItem src="assets/ScreenshotSearchReps.png " text="SearchMyReps" path="/projects" />
							</ul>
<ul>
							{/* Coding Quiz */}
							<CardItem src="assets/ScreenshotCodingQuiz.png" text="CodingQuiz" path="/projects" />
						</ul>
					</div>
				</div>
			</div>
		
	);
}

export default Cards;
