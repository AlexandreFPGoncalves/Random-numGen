import styled from 'styled-components';

const StyledInputNumber = styled.div`
	align-self: 'end';
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	.form__group {
		position: relative;
		padding: 15px 0 0;
		margin-top: 10px;
		width: 75%;
	}

	.form__field {
		font-family: inherit;
		width: 100%;
		border: 0;
		border-bottom: 2px solid var(--white);
		outline: 0;
		font-size: 1.3rem;
		color: var(--white);
		padding: 7px 0;
		background: transparent;
		transition: border-color 0.2s;

		&::placeholder {
			color: transparent;
		}

		&:placeholder-shown ~ .form__label {
			font-size: 1.3rem;
			cursor: text;
			top: 20px;
		}
	}

	.form__label {
		position: absolute;
		top: 0;
		display: block;
		transition: 0.2s;
		font-size: 1rem;
		color: var(--white);
	}

	.form__field:focus {
		~ .form__label {
			position: absolute;
			top: 0;
			display: block;
			transition: 0.2s;
			font-size: 1rem;
			color: var(--discover-blue-dark);
			font-weight: 700;
		}
		padding-bottom: 6px;
		font-weight: 700;
		border-width: 3px;
		border-color: var(--discover-blue-dark);
		color: var(--discover-blue-dark);
		border-image-slice: 1;
	}
`;

export default StyledInputNumber;
