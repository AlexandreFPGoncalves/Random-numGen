import React from 'react';
import StyledInputNumber from './inputNumber.styles';
import { Block } from '..';
interface NumberInputProps {
	label?: string;
	onChange?: (e: any) => void;
	horizontalAlign?: 'start' | 'center' | 'end';
	value: number | undefined;
	max?: number;
	min?: number;
}

export const NumberInput: React.FC<NumberInputProps> = ({ label, onChange, horizontalAlign, max, min, value }) => {
	return (
		<StyledInputNumber>
			<Block align={{ horizontal: horizontalAlign ? horizontalAlign : 'start' }}>
				<div className="form__group field">
					<input
						type="number"
						className="form__field"
						placeholder="."
						name={label}
						required
						onChange={onChange}
						value={value}
						max={max}
						min={min}
					/>
					<label htmlFor={label} className="form__label">
						{label}
					</label>
				</div>
			</Block>
		</StyledInputNumber>
	);
};
