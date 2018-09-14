import React from 'react'
import { Link } from 'gatsby'
import {Facebook} from 'react-feather'

import AimhigherLogo from '../images/aimhigher.svg';
import SSM from '../images/ssm.svg';

import './footer.scss';

const Footer = () => (
    <footer>
        <SSM className="ssm" />
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <nav className="social">
            <a href="https://www.facebook.com/JanneMartinCelebrant/" target="_blank" rel="nofollow noreferrer noopener"><Facebook /></a>
        </nav>
        <a href="https://aimhigherweb.design" className="aimhigher" target="_blank" rel="nofollow"><AimhigherLogo /></a>
  </footer>
)

export default Footer
