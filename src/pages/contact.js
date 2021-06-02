import React from 'react';
import { Header } from '../layout';
import { ContactBanner } from '../sections';
import { Container } from '../components/common';

export const ContactPage = () => {
	return (<>
		<Container>
			<Header />
			<ContactBanner />
		</Container>
	</>);
}