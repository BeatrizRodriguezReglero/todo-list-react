import styled from 'styled-components';

const StyledHeader = styled.div`
	height: 200px;
	padding: 3rem 1.5rem;
	background-image: url(./images/bg-mobile-dark.jpg);
	background-repeat: no-repeat;
	background-size: cover;
`;
const StyledTitle = styled.h1`
	color: white;
	letter-spacing: 15px;
	@media (min-width: 768px) {
		position: absolute;
		left: 28%;
	}
`;

export { StyledHeader, StyledTitle };
