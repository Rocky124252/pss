import React from 'react';
import styled from 'styled-components';

const ArticleDiv = styled.div`
	padding-top: 20px;
	font-size: 16px;
	line-height: 23px;
	color: #333333;
`;
const SubWrapDiv = styled.div`
	display: table-cell;
	vertical-align: top;
	img {
		width: 270px;
		height: auto;
		padding-right: 20px;
	}
	@media only screen and (max-width: 800px) {
		display: block;
	}
`;
const SubWrapP = styled.p`
	width: 100%;
	margin-top: 15px;
	font-size: 16px;
	line-height: 23px;
	color: #333333;

	@media only screen and (max-width: 800px) {
		text-align: justify;
	}
`;

export const Articles = ({img, type, children}) => {

	return (
		<ArticleDiv>
			{type === '1' ? (<>
				<SubWrapDiv>
					<img src={img} alt="" />
				</SubWrapDiv>
				<SubWrapDiv>
					{children}
				</SubWrapDiv>
				</>) : (<>
				<SubWrapP>{children}</SubWrapP>
			</>)}
		</ArticleDiv>
	);

}