import React from 'react';
import './About.css';
import Karyn from './assets/karynpic.JPG';

function About() {
	return (
		<div className="aboutContainer">
			<p>
				<img className="images bgbx " img src={Karyn}alt="Karyn " />
				{/* return <img src={Karyn} alt="myPic" />; */}
				<div className="words-about">I am an October, 2020 Coding BootCamp graduate, learning Full Stack Development at an accelerated pace. My Portfolio shows a variety of homework assignments done in class and a group assigment. When I am not coding, I use my creative and technical abilities daily in my career as TV Newscast Director. I am looking for an opportunity to utilize my experience working with teams, adapting to changing environments, and learning new technologies.</div>
			</p>
		</div>
	);
}

export default About;
