import React from 'react';
import { css } from '@emotion/css';

export type BlockAlignItem = 'start' | 'center' | 'end';

export type BlockAlign = { horizontal?: BlockAlignItem; vertical?: BlockAlignItem };

export interface BlockProps {
	stack?: boolean;
	align?: BlockAlign;
	important?: boolean;
	name?: string;
	ref?: React.Ref<HTMLDivElement>;
	style?: React.CSSProperties;
}

const translateAlign = (align?: BlockAlignItem): string | undefined => {
	if (align === 'start') {
		return 'flex-start';
	} else if (align === 'end') {
		return 'flex-end';
	}

	return align;
};

export const Block: React.FC<BlockProps> = ({ children, stack, align, style, important }) => {
	return (
		<div
			className={css({
				display: 'flex',
				flexDirection: stack ? 'column' : 'row',
				alignItems: stack ? translateAlign(align?.horizontal) : translateAlign(align?.vertical),
				justifyContent: stack ? translateAlign(align?.vertical) : translateAlign(align?.horizontal),
				flexGrow: important ? 1 : undefined,
				boxSizing: 'border-box',
				...(style as object),
			})}
		>
			{children}
		</div>
	);
};
