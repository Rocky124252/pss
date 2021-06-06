import React from 'react';
import styled from 'styled-components';

const RowDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 20px;

	button {
		position: relative;
		text-transform: none;
		transition: all .15s ease;
		letter-spacing: .025em;
		font-size: 1rem;
		will-change: transform;
		color: #fff;
		background-color: #5e72e4;
		cursor: pointer;
		padding: 0.3rem 1rem;
		border: 1px solid #5e72e4;
		border-radius: 10px;
		&:hover {
			opacity: 0.9;
			transition: all 0.4s ease-in-out;
		}
	}
`;
const ColDiv = styled.div`
	width: 48%;
	&.full-width {
		width: 100%;
	}
	p {
		font-size: 1rem;
		color: #333;
	}
	input, textarea {
		color: #333;
		font-family: 'Arial';
		padding: 10px 20px;
		border: 1px solid #CCC;
		border-radius: 3px;
		width: calc(100% - 40px);
		&::placeholder {
			color: #666;
		}
		&:active, &:focus {
			outline: none;
		}
	}
`;

export const GiftCard = () => {

	return (<>
		<h2>Gift Card Info</h2>
		<p className="c-header">View and edit your gift cards below.</p>
		<hr /> <br />
		<RowDiv>
			<ColDiv>
				<p><label for="cardtype">Gift Card Type </label></p>
				<input type="text" id="cardtype" name="cardtype" placeholder="Gift Card Type" />
			</ColDiv>
		</RowDiv>
		<RowDiv>
			<ColDiv>
				<p><label for="initialval">Initial Value </label></p>
				<input type="text" id="initialval" name="initialval" placeholder="Initial Value" />
			</ColDiv>
		</RowDiv>
		<RowDiv>
			<ColDiv>
				<p><label for="couponcode">Coupon Code </label></p>
				<input type="text" id="couponcode" name="couponcode" placeholder="Coupon Code" />
			</ColDiv>
		</RowDiv>
		<RowDiv>
			<ColDiv className="full-width">
				<p><label for="message">Message</label></p>
				<textarea id="message" name="message" placeholder="Message" />
			</ColDiv>
		</RowDiv>
		<RowDiv>
			<button>Update Info</button>
		</RowDiv>
		<br /><br />
	</>);

}