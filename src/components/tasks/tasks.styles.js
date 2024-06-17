import styled from 'styled-components';

const StyledContainerTask = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 287px;
	height: 48px;
	padding: 0 20px;
	background-color: #25273d;
	color: #c8cbe7;
	letter-spacing: -0.17px;
	font-weight: 300;
	font-size: 12px;
	border-bottom: 1px solid rgba(151, 151, 151, 0.3);
`;
const StyledCheckboxContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const StyledTask = styled.span`
	text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
	padding-left: 10px;
`;
const StyledTaskDelete = styled.button`
	border: none;
	background-color: transparent;
	color: #494c6b;
`;

export {
	StyledContainerTask,
	StyledCheckboxContainer,
	StyledTask,
	StyledTaskDelete
};
