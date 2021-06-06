import React from 'react';
import styled from 'styled-components';

const RowDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 20px;

	&.header {
		background-image: linear-gradient(#FEF, #EEE);
		border: 1px solid #EEE;
		padding-top: 8px;
	}

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

const ColLeftDiv = styled.div`
	width: 25%;
	p {
		font-size: 1rem;
		color: #333;
		text-align: left;
		padding-left: 15px;
	}
`;
const ColCenterDiv = styled.div`
	width: 25%;
	p {
		font-size: 1rem;
		color: #333;
		text-align: left;
		padding-left: 15px;
	}
`;
const ColRightDiv = styled.div`
	width: 50%;
	p {
		font-size: 1rem;
		color: #333;
	}
	a {
		text-decoration: none;
		color: #1b9992;
		transition: all 0.4s ease-in-out;
		opacity: 1;
		&:hover {
			opacity: 0.8;
			transition: all 0.4s ease-in-out;
		}
	}
`;

export const GiftCard = () => {
	const giftArr = [
		{id:'1', date:'April 7, 2019', balance:'$100', desc:'Payment towards Amazon.com order', cardnum:'113-55940483-0197026', cardlink:'#'},
		{id:'1', date:'April 2, 2019', balance:'$50', desc:'Payment towards Amazon.com order', cardnum:'114-55940483-0197026', cardlink:'#'},
		{id:'1', date:'April 2, 2019', balance:'$300', desc:'Payment towards Amazon.com order', cardnum:'113-55940483-0197026', cardlink:'#'},
		{id:'1', date:'March 4, 2019', balance:'$120', desc:'Payment towards Amazon.com order', cardnum:'claim code xxxx-xxxxxxx-FA2B', cardlink:''},
		{id:'1', date:'March 4, 2019', balance:'$270', desc:'Payment towards Amazon.com order', cardnum:'113-55940483-0197026', cardlink:'#'},
		{id:'1', date:'November 20, 2019', balance:'$109', desc:'Payment towards Amazon.com order', cardnum:'113-55940483-0197026', cardlink:'#'},
	]
	return (<>
		<h2>Gift Card Activity <span className="gift--page">Page 1 of 5 (67 total transaction)</span></h2>
		<hr />
		<RowDiv className="header">
			<ColLeftDiv><p><strong>Date</strong></p></ColLeftDiv>
			<ColCenterDiv><p><strong>Balance</strong></p></ColCenterDiv>
			<ColRightDiv><p><strong>Description</strong></p></ColRightDiv>
		</RowDiv>
		{giftArr.map((item, key) => 
			<RowDiv key={key}>
				<ColLeftDiv><p>{item.date}</p></ColLeftDiv>
				<ColCenterDiv><p>{item.balance}</p></ColCenterDiv>
				<ColRightDiv><p>
					{item.desc}
					{item.cardlink? <a href={item.cardlink}>{ '{'+item.cardnum+'}'}</a> : '{'+item.cardnum+'}'}
				</p></ColRightDiv>
			</RowDiv>
		)}
		<br /><br />
	</>);

}