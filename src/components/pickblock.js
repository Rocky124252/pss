import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../config/config';

const PickDiv = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	margin-top: 40px;
	background: ${COLORS.White};
	@media only screen and (max-width: 880px) {
		display: block;
	}
`;

const PickLeft = styled.div`
	width: 45%;
	.pick_title {
		color: ${COLORS.White};
		font-size: 2.1rem;
		padding-left: 10px;
		padding-right: 0;
		font-weight: bold;
		width: 100%;
		height: 135px;
		background: #2052a4;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		&:after {
			content: '';
			position: absolute;
			right: -40px;
			top: 0;
			width: 0;
			height: 0;
			border-top: 136px solid #2052a4; 
			border-right: 40px solid transparent; 
		}
		&:before {
			content: '';
			position: absolute;
			left: -40px;
			bottom: 0;
			width: 0;
			height: 0;
			border-bottom: 136px solid #2052a4; 
			border-left: 40px solid transparent; 
		}
	}
	p {
		color: #333333;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: bold;
		padding: 10%;
		text-align: left;
	}
	.btn_wrap {
		text-align: center;
	}
	.left_move {
		left: 30px;
	}
	.right_move {
		right: 30px;
	}
	a {
		text-decoration: none;
		padding: 7px 15px;
		background: #2e76ea;
		border-radius: 3px;
		color: #333;
		&:hover {
			background: #548eeb;
		}
	}

	@media only screen and (max-width: 880px) {
		width: 100%;
		margin-bottom: 20px;
		.pick_title { 
			width: 80%;
			font-size: 1.4rem;
			height: 90px;
			&:after {
				right: -30px;
				border-top: 90px solid #2052a4; 
				border-right: 30px solid transparent; 
			}
			&:before {
				left: -30px;
				border-bottom: 90px solid #2052a4; 
				border-left: 30px solid transparent; 
			}
		}
	}
`;
const PickRight = styled.div`
	width: 55%;
	&.align-left {
		text-align: left;
	}
	&.align-right {
		text-align: right;
	}

	@media only screen and (max-width: 880px) {
		width: 100%;
		img {
			width: 100%;
			height: auto;
		}
	}
`;

export const PickBlock = ({title, img, type, children}) => {

	return (
		<PickDiv>
			{type ? (<>
				<PickLeft>
					<div className="pick_title left_move">{title}</div>
					<p>{children}</p>
					<div className="btn_wrap">
						<a href="#this" title="Request Pickup">Request Pickup</a>
					</div>
				</PickLeft>
				<PickRight className="align-left">
					<img src={img} alt={title} />
				</PickRight>
			</>) : (<>
				<PickRight className="align-right">
					<img src={img} alt={title} />
				</PickRight>
				<PickLeft>
					<div className="pick_title right_move">{title}</div>
					<p>{children}</p>
					<div className="btn_wrap">
						<a href="#this" title="Request Pickup">Request Pickup</a>
					</div>
				</PickLeft>
			</>)}
		</PickDiv>
	);

}