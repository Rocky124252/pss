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
	p {
		font-size: 1rem;
		color: #333;
	}
	input {
		color: #333;
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

export const CurShipment = () => {

	return (<>
		<h2>Current Shipments</h2>
		<p className="c-header">View and edit your personal info below.</p>
		<hr /> <br />
		<RowDiv>
			<ColDiv>
				<button>Update Info</button>
			</ColDiv>
		</RowDiv>
		<br /><br />
	</>);

}