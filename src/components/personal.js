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

export const PersonalInfo = ({email, children}) => {

	return (<>
		<h2>Account Info</h2>
		<p className="c-header">View and edit your personal info below.</p>
		<hr /> <br />
		<p><strong>Login Email:</strong></p>
		<p>{email}</p>
		<RowDiv>
			<ColDiv>
				<p><label for="firstname">First Name</label></p>
				<input type="text" id="firstname" name="firstname" placeholder="First Name" />
			</ColDiv>
			<ColDiv>
				<p><label for="lastname">Last Name</label></p>
				<input type="text" id="lastname" name="lastname" placeholder="Last Name" />
			</ColDiv>
		</RowDiv>
		<RowDiv>
			<ColDiv>
				<p><label for="contactemail">Contact Email</label></p>
				<input type="text" id="contactemail" name="contactemail" placeholder="Contact Email" />
			</ColDiv>
			<ColDiv>
				<p><label for="phonenum">Phone</label></p>
				<input type="text" id="phonenum" name="phonenum" placeholder="Phone" />
			</ColDiv>
		</RowDiv>
		<RowDiv className="clear">
			<ColDiv>
				<p><strong>Address</strong></p>
				<input type="text" id="street" name="street" placeholder="Street" />
			</ColDiv>
			<ColDiv>
				<input type="text" id="city" name="city" placeholder="City" />
			</ColDiv>
		</RowDiv>
		<RowDiv>
			<ColDiv>
				<p>&nbsp;</p>
				<input type="number" id="zipcode" name="zipcode" placeholder="Zip" />
			</ColDiv>
			<ColDiv>
				<input type="text" id="country" name="country" placeholder="Country" />
			</ColDiv>
		</RowDiv>
		<RowDiv>
			<ColDiv>
				<input type="text" id="state" name="state" placeholder="State" />
			</ColDiv>
			<ColDiv>
			</ColDiv>
		</RowDiv>
		<RowDiv>
			<button>Update Info</button>
		</RowDiv>
		<br /><br />
	</>);

}