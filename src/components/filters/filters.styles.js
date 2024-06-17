import styled from 'styled-components';

const StyledFilterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 3rem;
	padding-inline: 5.0625rem;
	background-color: #25273d;
	border-radius: 0.3125rem;
`;

const StyledFilterButtons = styled.button`
	background: none;
	border: none;
	color: #5b5e7e;
	font-weight: bold;
	font-size: 14px;
	cursor: pointer;
	&:hover {
		color: #3a7cfd;
	}
`;

export { StyledFilterContainer, StyledFilterButtons };
