import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
	return (
		<div className="footer-container">
			<p className="footer-heading">Contact Info</p>
			
			<div className="contact-container">
				<div className="row " id="email-row ">
					<Link to="mailto:karynclarke@comcast.net">
						<h3>karynclarke@comcast.net </h3>
					</Link>
				</div>
				<div className="row " id="phone-row ">
					<h3> 503-620-3118 </h3>
				</div>
				<div className="row " id="icons ">
					<Link to="https://github.com/karynclarke/React-Portfolio" target="_blank" className="icons">
						<i className="fab fa-github fa-4x"></i>
					</Link>

					<Link to="https://www.linkedin.com/in/karyn-clarke-portlandor/" target="_blank" class="icons">
						<i className="fab fa-linkedin fa-4x"></i>
					</Link>
				</div>
				<div className="row " id="resume-row ">
					<Link to="BootCampResume.pdf">
						<h3> See My Resume Here </h3>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
