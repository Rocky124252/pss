import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	padding: 20px;
	display: inline-block;
	text-align: center;
	width: 250px;
	border-right: 1px solid #CCC;
	margin: 10px;
	&:last-child {
		border-right: none;
	}

	p {
		color: black;
		font-weight: bold;
		font-size: 16px;
		height: 70px;
	}

	@media only screen and (max-width: 1020px) {
		width: 200px;
	}
	@media only screen and (max-width: 800px) {
		display: block;
		width: 100%;
		border-right: none;
	}
`;

const PrimaryBtn = styled.a`
	font-size: 16px;
	font-weight: bold;
	background: #FEFEFE;
	border: 1px solid black;
	color: black;
	padding: 5px;
	width: 200px;
	text-decoration: none;
	display: inline-block;
	transition: all 0.3s ease-in-out;
	&:hover {
		background: #EEE;
	}

	@media only screen and (max-width: 800px) {
		font-size: 15px;
	}
`;

export const HomeSupport = ({img, btntxt, btnlink, children}) => {

	return (
		<Card>
			<img src={img} alt="" />
			<p>{children}</p>
			<PrimaryBtn href={btnlink}>{btntxt}</PrimaryBtn>
		</Card>
	);

}