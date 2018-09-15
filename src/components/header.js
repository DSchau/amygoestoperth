import React from 'react';
import Helmet from 'react-helmet';

//Resources
// import '../../scss/partials/header.scss';

import HeaderImage from '../img/rottnest-lighthouse-2500.jpg';
import Favicon from '../img/favicon.png';

const Meta = () => (
	<Helmet>
		<meta name="twitter:card" content="summary_large_image" />
		<link rel="shortcut icon" href={Favicon} />
		<link rel="icon" sizes="192x192" href={Favicon} />
		<link rel="apple-touch-icon" href={Favicon} />
		<meta name="theme-color" content="#1C75BC" />
		<link rel="mask-icon" href={Favicon} color="#1C75BC" />
	</Helmet>
)

const Header = ({siteTitle}) => (
	<div className="inner">
		<Meta />
		<SiteTitle siteTitle={siteTitle} />
	</div>
)

const SiteTitle  = ({siteTitle}) => (
	<div id="site-header" className="site-header">
		<a href="/">
			<img alt="Panarama photo of Rottnest Island Lighthouse and the beach" src={HeaderImage} className="header-image" />
			<h1 className="site-title">{siteTitle}</h1>
		</a>       
	</div>
)

export default Header