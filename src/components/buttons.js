import React from 'react';
import styled from 'styled-components';
import { Config, COLORS } from '../config/config';

const TourWrap = styled.div`
	background: #efa507;
	padding: 40px 0;
	text-align: center;
	a {
		display: block;
		width: 20%;
		margin: 0 auto;
		background: ${COLORS.White};
		color: ${COLORS.Brown};
		padding: 15px;
		line-height: 45px;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 15px;
		text-decoration: none;
		transition: all 0.3s ease-in-out;
		border: 1px solid ${COLORS.White};
		&:hover {
			background: none;
			color: ${COLORS.White};
		}
	}

	@media only screen and (max-width: 800px) {
		a {
			width: 60%;
		}
	}
`;

const PrimaryBtn = styled.a`
	font-size: 16px;
	font-weight: bold;
	background: ${COLORS.Brown};
	color: ${COLORS.White};
	padding: 0 43px;
	text-decoration: none;
	display: inline-block;
	line-height: 45px;
	transition: all 0.3s ease-in-out;
	text-transform: uppercase;
	&:hover {
		background: ${COLORS.Green};
		color: ${COLORS.White};
	}

	@media only screen and (max-width: 800px) {
		padding: 0 25px;
		font-size: 15px;
	}
`;

export const TourButton = () => {
	return (
		<TourWrap>
			<a href="/schedule" title={Config["home"]["schedule_tour_button"]}>{Config["home"]["schedule_tour_button"]}</a>
		</TourWrap>
	);
}

export const PrimaryButton = ({link, children}) => {
	return (
		<PrimaryBtn href={link}>{children}</PrimaryBtn>
	)
}