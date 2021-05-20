import React from 'react';
import styled from 'styled-components';
import { Page, Clear } from '../components/common';
import { NavBar } from '../components/navBar';
import { Config } from '../config/config';

const HeaderStyle = styled.div`
	font-family: 'Verdana', sans-serif;
	width: 100%;
	background: white;
	padding: 10px 0 16px 0;
	a.logo {
		float: left;
	}
	@media only screen and (max-width: 980px) {
		a.logo {
			width: 30%;
		}
	}
`;

export const Header = () => {
	return (
		<HeaderStyle>
			<Page>
				<a href="/" title={Config["home"]["website_name"]} className="logo">
					<img src={Config["home"]["logo_image_path"]} alt={Config["about"]["website_name"]} />
				</a>
				<NavBar />
				<Clear />
			</Page>
		</HeaderStyle>
	);

}