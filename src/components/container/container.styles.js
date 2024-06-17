import styled from 'styled-components';

const StyledContainer = styled.div`
	position: absolute;
	top: 6.75rem;
	left: 50%;
	transform: translateX(-50%);
`;
const StyledTaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 0.4rem 0.4rem 0 0;
	overflow: hidden;
	padding-bottom: 16px;
`;

export { StyledContainer, StyledTaskContainer };
