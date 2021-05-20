import React from 'react';
import styled from 'styled-components';
import { Config } from '../config/config';

const SidebarDiv = styled.div`
	margin-bottom: 10px;
	margin-top: 30px;
`;
const SideUL = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;
const SideLI = styled.li`
	display: block;
	margin-top: 15px;
	i {
		margin-right: 13px;
		color: #EEB01C;
		font-size: 16px;
	}
	a {
		font-size: 16px;
		font-weight: bold;
		color: #404D5F;
		text-transform: uppercase;
		transition: all 0.3s ease-in-out;
		text-decoration: none;
		&.selected, &:hover {
			color: #43B9F6;
			text-decoration: none;
		}
	}
`;
const ImageDiv = styled.div`
	width: 60%;
	margin-top: 20px;
	img {
		width: 100%;
		height: auto;
	}

	@media only screen and (max-width: 800px) {
		width: auto;
		img {
			display: none;
		}
	}
`;

export const RightSidebar = ({isBanner}) => {

	return (
		<SidebarDiv>
			<SideUL>
				<SideLI>
					<i className="fa fa-arrow-right"></i>
					<a href={Config["about"]["right_sidebar_link1"]} title={Config["about"]["right_sidebar_menu1"]}>{Config["about"]["right_sidebar_menu1"]}</a>
				</SideLI>
				<SideLI>
					<i className="fa fa-arrow-right"></i>
					<a href={Config["about"]["right_sidebar_link2"]} title={Config["about"]["right_sidebar_menu2"]}>{Config["about"]["right_sidebar_menu2"]}</a>
				</SideLI>
				<SideLI>
					<i className="fa fa-arrow-right"></i>
					<a href={Config["about"]["right_sidebar_link3"]} title={Config["about"]["right_sidebar_menu3"]}>{Config["about"]["right_sidebar_menu3"]}</a>
				</SideLI>
				<SideLI>
					<i className="fa fa-arrow-right"></i>
					<a href={Config["about"]["right_sidebar_link4"]} title={Config["about"]["right_sidebar_menu4"]}>{Config["about"]["right_sidebar_menu4"]}</a>
				</SideLI>
			</SideUL>
			{ isBanner ? (
				<ImageDiv>
					<img src="/assets/images/title.gif" alt="Right Sidebar" />
				</ImageDiv>
			) : null }
			
		</SidebarDiv>
	);

}