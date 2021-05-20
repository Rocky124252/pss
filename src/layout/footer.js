import React from 'react';
import styled from 'styled-components';
import { Config } from '../config/config';

const FooterStyle = styled.div`
	font-family: 'Arial', sans-serif;
	width: 100%;
	background: #404d5f;
	text-align: center;
	padding: 25px 0;
	a {
		color: #8595b1;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 15px;
		line-height: 20px;
	}

	@media only screen and (max-width: 800px) {
		padding: 50px 0;
		a {
			line-height: 40px;
		}
	}
`;

export const Footer = () => {
	return (
		<FooterStyle>
			<a href="#this" title={Config["home"]["footer_copyright_text"]}>{Config["home"]["footer_copyright_text"]}</a>
		</FooterStyle>
	);
}