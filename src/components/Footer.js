import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className="footer-jumbotron">
			<p className="footer-heading">Contact Info</p>

			<div className="contact-container">
				<div className="row " id="email-row ">
					<a href="mailto:karynclarke@comcast.net"> karynclarke@comcast.net </a>
				</div>

				<div className="row " id="phone-row ">
					<h3> 503-620-3118 </h3>
				</div>

				<div className="row" id="icons ">
					<a href="https://github.com/karynclarke/React-Portfolio/" target="_blank" rel="noopener noreferrer"> GitHub</a>
					<div className="icons">
						<i className="fa fa-github fa-4x" />
					</div>

					<a href="https://www.linkedin.com/in/karyn-clarke-portlandor/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					<div className="icons">
						<i className="fa fa-linkedin fa-4x" />{' '}
					</div>
				</div>
				<div className="resume-row ">
					<a href="BootCampResume.pdf">
						<h3> See My Resume Here </h3>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
