import React from 'react';
import { HomeSlider, Misson, Update, PageTitle, HomeArticles } from '../sections';
import { Header } from '../layout';
import { Container } from '../components/common';

export const HomePage = () => {
	return (
		<Container>
			<Header />
			<HomeSlider />
			
			<PageTitle />
			<HomeArticles />

			<Misson />
			<Update />
		</Container>
	);
}