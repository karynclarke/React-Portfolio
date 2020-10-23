import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className="jumbotron footer justify-content center">
			<p className="footer-heading center">Contact Info</p>

			<div className="contact__container">
				<div className="row justify-content center">
					<a href="mailto:karynclarke@comcast.net"> karynclarke@comcast.net </a>
				</div>

				<div className="row " id="phone-row ">
					<h1> 503-620-3118 </h1>
				</div>

				<div className="row__icons">
					<div className="col-md-6">
						<a href="https://github.com/karynclarke/" target="_blank" rel="noopener noreferrer">
							{' '}
							<i className="fa fa-github fa-2x" />{' '}
						</a>
          </div>
					<div className="col-md-6" color="white">
							<a href="https://www.linkedin.com/in/karyn-clarke-portlandor/" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-linkedin fa-2x" />{' '}
							</a>
					</div>
				</div>

				<div className="resume__row ">
						<resume src="./public/assets/BootcampResume.pdf " text="See My Resume Here" path="/Contact" />
						<h3> See My Resume Here </h3>
				</div>
			</div>
			</div>
		
	);
}

export default Footer;
