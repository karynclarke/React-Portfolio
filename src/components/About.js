import React, {Component} from 'react';
import './About.css';
import Selfie from '../assets/karynpic.JPG';

function About() {
	return (
		<div className="aboutContainer">
			<p>
				
				<img className="images bgbx " img src={Selfie} alt="Karyn " />
				
				<div className="words-about"> My Portfolio shows a variety of homework assignments done in class and a group assigment. When I am not coding, I use my creative and technical abilities daily in my career as TV Newscast Director. I am looking for an opportunity to utilize my experience working with teams, adapting to changing environments, and learning new technologies.</div>
			</p>
		</div>
	);
}

export default About;
