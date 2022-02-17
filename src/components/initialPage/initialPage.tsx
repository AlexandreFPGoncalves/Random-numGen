interface InitialPageProps {
	style?: React.CSSProperties;
}
export const InitialPage: React.FC<InitialPageProps> = ({ children, style }) => {
	return (
		<div style={style}>
			<div style={{ display: 'flex', minHeight: '100vh' }}>
				<main style={{ display: 'flex', flexDirection: 'column', flex: '0px' }}>{children}</main>
			</div>
		</div>
	);
};
