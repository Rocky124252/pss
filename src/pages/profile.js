import React from 'react';
import { Header } from '../layout';
import { Container } from '../components/common';
import { ProfileHeader } from '../sections';

export const ProfilePage = () => {
	return (<>
		<Container>
			<Header />
			<ProfileHeader />
		</Container>
	</>);
}