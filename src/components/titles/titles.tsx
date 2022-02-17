import React from 'react';
import { Block } from '../../components';

interface TitleProps {
	style?: React.CSSProperties;
	title: string;
	titleStyle?: React.CSSProperties;
	subtitle?: string;
	subtitleStyle?: React.CSSProperties;
	horizontalAlign?: 'start' | 'center' | 'end';
}
export const Titles: React.FC<TitleProps> = ({
	style,
	title,
	subtitle,
	horizontalAlign,
	titleStyle,
	subtitleStyle,
}) => {
	return (
		<Block stack style={style} align={{ horizontal: horizontalAlign ? horizontalAlign : 'start' }}>
			<h3 style={titleStyle}>{title}</h3>

			<h5 style={subtitleStyle}>{subtitle}</h5>
		</Block>
	);
};
