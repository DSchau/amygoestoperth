import React from 'react'
import { Link } from 'gatsby'
import Media from 'react-media'

import {Phone} from 'react-feather'

import Logo from '../images/logo.svg';
import './header.scss';

const Header = () => (
	<header>
		<Link to="/" className="logo"><Logo /></Link>
		<nav id="menu">
			<Link to="/about">About</Link>
			<Link to="/weddings">Weddings</Link>
			<Link to="/funerals">Funerals</Link>
			<Link to="/other-services">Other Services</Link>
			<Link to="/faq">FAQ</Link>
			<Link to="/contact">Contact</Link>
		</nav>
			<a href="tel:+61418955198" className="phone">
				<Phone />
				<span>0418 955 198</span>
			</a>
	</header>
)

export default Header
