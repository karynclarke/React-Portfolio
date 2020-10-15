import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import About from "../About";

function Home() {
	return (
		<>
		<About />
			<Cards />
			<Footer />
		</>
	);
}

export default Home;
