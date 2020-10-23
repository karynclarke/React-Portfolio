import React from 'react';
import './Home.css';
// import Cards from '../Cards';
// import Footer from '../Footer';
// import About from '../About';

function Home() {
	return (
		<div className="homeContainer">
			<p className= "bgbx">
			<img className="images bgbx" img src="assets/karynpic.JPG " alt="Karyn "></img>

			<div className="words-home">
				Hello, I'm Karyn. I gradute University of Oregon's Coding Bootcamp in October, 2020. My projects include:
				<ul>
					<li> HTML and CSS</li>
					<li>Javascript</li>
					<li>NodeJS</li>
					<li>Web APIs</li>
					<li>MySQL and Mongo Databases</li>
					<li>React</li>
				</ul>
				My Portfolio shows a variety of homework assignments done in class and a group assigment.
			</div>
			</p>
		</div>
	);
}

export default Home;
