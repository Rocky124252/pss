import React from 'react';
import styled from 'styled-components';

const TitleSection = styled.section`
	width: 100%;
	background: #15ac95;
	padding: 70px 0;
	text-align: center;
	position: relative;
	h1 {
		color: white;
		margin: 0;
		text-align: center;
		font-size: 27px;
		font-weight: bold;
		line-height: 36px;
		text-transform: uppercase;
	}
	&::after {
		content: '';
		position: absolute;
		width: 56px;
		height: 56px;
		left: calc(50% - 28px);
		bottom: -30px;
		background: url('/assets/images/page_drop.png') no-repeat center center;
	}
`;

export const PageTitle = ({title}) => {

	return (
		<TitleSection>
			<h1>{title}</h1>
		</TitleSection>
	);

}