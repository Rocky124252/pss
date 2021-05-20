import styled from 'styled-components';
import { device } from '../config/device';
import { COLORS } from '../config/config';

export const Container = styled.div`
	font-family: 'Arial', sans-serif;
	width: 100%;
	min-height: 100vh;
	background: ${COLORS.White};
	padding: 0;
	margin: 0;
`;

export const Page = styled.div`
	background: ${prop => prop.bg ? prop.bg : null};
	margin: 0 auto;

	#mobile_status {
		display: none;
	}

	#mobile_status:checked ~ #mobile_menu {
		display: block;
	}

	#mobile_status:checked ~ label {
		transition: all .3s ease-in-out;
		span {
			background: transparent;
		}
		span:first-child {
			transform: rotate(45deg) translate(8px, 6px);
            opacity: 1;
			background: #43bba9;
		}
		span:last-child {
			transform: rotate(-45deg) translate(4px, -4px);
			background: #43bba9;
		}
	}
	
	@media ${device.mobileS} {
		width: 95%;
	}

	@media ${device.tablet} {
		width: 95%;
	}

	@media ${device.laptop} {
		width: 1200px;
	}

	@media ${device.laptopL} {
		width: 1200px;
	}

	@media ${device.desktop} {
		width: 1400px;
	}

	@media ${device.desktopL} {
		width: 2000px;
	}
`;

export const Clear = styled.div`
	clear: both;
`;