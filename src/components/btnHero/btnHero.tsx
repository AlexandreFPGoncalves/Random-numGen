import React from 'react';
import CustomBtn from './customButtom.styles';
import { Block } from '..';
interface NumberInputProps {
	btnLabel?: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	horizontalAlign?: 'start' | 'center' | 'end';
	style?: React.CSSProperties;
	onClick?: any;
}

export const BtnHero: React.FC<NumberInputProps> = ({ btnLabel, type, horizontalAlign, style, onClick }) => {
	return (
		<Block style={style} align={{ horizontal: horizontalAlign ? horizontalAlign : 'start' }}>
			<CustomBtn type={type} onClick={onClick}>
				{btnLabel}{' '}
			</CustomBtn>
		</Block>
	);
};
