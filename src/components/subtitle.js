import styled from 'styled-components';

const SubTitleWrap = styled.div`
	padding: 0;
	margin-top: 60px;
	text-align: ${prop => prop.align === 'left' ? 'left' : 'center'};

	h2 {
		&::after {
			margin-left: ${prop => prop.align === 'left' ? '0' : 'auto'};
		}
	}
`;

const H2TAG = styled.h2`
	font-size: 27px;
	color: #333;
	font-weight: bold;
	line-height: 40px;
	margin: 0;
	text-transform: uppercase;
	&::after {
		content: '';
		width: 80px;
		display: block;
		height: 1px;
		background: ${prop => prop.color ? prop.color : '#15AC95'};
		margin: 10px auto 0;
	}
	@media only screen and (max-width: 800px) {
		font-size: 23px;
	}
`;

const H5TAG = styled.h5`
	font-size: 14px;
	color: ${prop => prop.color ? prop.color : '#404d5f'};
	font-weight: 300;
	text-transform: uppercase;
	@media only screen and (max-width: 800px) {
		font-size: 16px;
	}
`;

export const SubTitle = ({title, subtitle, align, subcolor}) => {
	return (
		<SubTitleWrap align={align}>
			<H5TAG color={subcolor}>{subtitle}</H5TAG>
			<H2TAG color={subcolor}>{title}</H2TAG>
		</SubTitleWrap>
	);
}