import React from 'react';
import styled from 'styled-components';
import { Config } from '../config/config';
import { Page } from '../components/common';

const ConfigWrap = styled.div`
	width: 100%;
	margin-top: 20px;
	background: linear-gradient(87deg,#11cdef,#1171ef);
	padding-top: 30px;
	padding-bottom: 30px;
	> div {
		display: flex;
		justify-content: space-between;
	}
`;

const ConfigItem = styled.div`
	width: 22%;
	padding: 10px;
	border: 1px solid #CCC;
	border-radius: 10px; 
	background: white;
`;

export const ProfileHeader = () => {
	return (
		<ConfigWrap>
			<Page>
				<ConfigItem>
					<img src={Config["profile"]["personal_img"]} alt="" />
				</ConfigItem>
				<ConfigItem>2</ConfigItem>
				<ConfigItem>3</ConfigItem>
				<ConfigItem>4</ConfigItem>
			</Page>
		</ConfigWrap>
	);
}