import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
const Navbar = () => {
	return (
		<div className="navBar">
			<h2> T-code</h2>
			<ul>
				<li>
					<Link activeClass="active" to="section1" spy={true} smooth={true} duration={500}>
						section1
					</Link>
				</li>
				<li>
                <Link activeClass="active" to="section2" spy={true} smooth={true} duration={500}>
						section2
					</Link>
				</li>
				<li>
                <Link activeClass="active" to="section3" spy={true} smooth={true} duration={500}>
						section3
					</Link>
				</li>
				<li>
                <Link activeClass="active" to="section4" spy={true} smooth={true} duration={500}>
						section4
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
