import styled from 'styled-components';

const CustomBtn = styled.button`
	background-color: Transparent;
	background-repeat: no-repeat;
	border: 2px solid var(--white);
	cursor: pointer;
	overflow: hidden;
	width: 12rem;
	height: 3rem;
	color: var(--white);
	border-radius: 9em;
	:hover {
		transition: 0.2s;
		color: var(--discover-blue-dark);
		border-color: var(--discover-blue-dark);
	}
`;

export default CustomBtn;
