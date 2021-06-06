import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Config } from '../config/config';
import { Page } from '../components/common';
import { useLocation } from "react-router-dom";
import { PersonalInfo, GiftCard, CurShipment, PaymentMethod } from '../components';

const ConfigWrap = styled.div`
	width: 100%;
	margin-top: 20px;
	padding-top: 30px;
	padding-bottom: 30px;
	> div {
		display: flex;
		justify-content: space-between;
	}
	@media only screen and (max-width: 700px) {
		margin-top: 10px;
	}
`;

const ConfigItem = styled.div`
	width: 22%;
	padding: 10px;
	border: 1px solid #CCC;
	border-radius: 10px; 
	background: white;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	&:hover, &.selected {
		opacity: 0.8;
		transition: all 0.5s ease-in-out;
	}
	img {
		border-radius: 50%;
	}
	h3 {
		margin-left: 10px;
		margin-bottom: 5px;
	}
	p {
		font-size: 12px;
		margin-left: 10px;
	}

	@media only screen and (max-width: 700px) {
		width: 20%;
		border: none;
		&>div {
			display: none;
		}
		img {
			width: 80%;
			height: auto;
			margin: 0 auto;
		}
	}
`;

const ConfigContent = styled.div`
	width: 100%;
	margin-top: 20px;
	h2 {
		color: #333;
		font-size: 2rem;
		span {
			font-size: 1rem;
			color: #555;
		}
	}
	p {
		color: #333;
		font-size: 1rem;
		padding-bottom: 6px;
	}
	.c-header {
		margin-bottom: 1rem;
		padding-top: 5px;
		padding-bottom: 1rem;
	}

	@media only screen and (max-width: 700px) {
		margin-top: 10px;
		h2 {
			color: #333;
			font-size: 1.8rem;
			span {
				font-size: 0.8rem;
				color: #555;
				display: block;
			}
		}
	}
`;

export const ProfileHeader = () => {
	const location = useLocation();
	const [curPage, setCurPage] = useState(0);

	useEffect(() => {
		if( location.search !== '' )
			setCurPage(1);
	  }, [location]);
	
	return (<>
		<ConfigWrap>
			<Page>
				<ConfigItem onClick={() => setCurPage(1)} className={curPage === 1?'selected':''}>
					<img src={Config["profile"]["personal_img"]} alt="" />
					<div>
						<h3>Account Info</h3>
						<p>View and edit your personal info below.</p>
					</div>
				</ConfigItem>
				<ConfigItem onClick={() => setCurPage(2)} className={curPage === 2?'selected':''}>
					<img src={Config["profile"]["gift_img"]} alt="" />
					<div>
						<h3>Gift Cards</h3>
						<p>View and edit your gift cards below.</p>
					</div>
				</ConfigItem>
				<ConfigItem onClick={() => setCurPage(3)} className={curPage === 3?'selected':''}>
					<img src={Config["profile"]["shipping_img"]} alt="" />
					<div>
						<h3>Current Shipments</h3>
						<p>View and edit your current shipments below.</p>
					</div>
				</ConfigItem>
				<ConfigItem onClick={() => setCurPage(4)} className={curPage === 4?'selected':''}>
					<img src={Config["profile"]["payment_img"]} alt="" />
					<div>
						<h3>Payment Method</h3>
						<p>View and edit your payment method below.</p>
					</div>
				</ConfigItem>
			</Page>
		</ConfigWrap>
		<Page>
			{curPage === 1 ? <ConfigContent>
				<PersonalInfo email={'email@hotmail.com'}/>
			</ConfigContent> : null}
			{curPage === 2 ? <ConfigContent>
				<GiftCard />
			</ConfigContent> : null}
			{curPage === 3 ? <ConfigContent>
				<CurShipment />
			</ConfigContent> : null}
			{curPage === 4 ? <ConfigContent>
				<PaymentMethod />
			</ConfigContent> : null}
		</Page>
	</>);
}