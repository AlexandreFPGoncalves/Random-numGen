import React from 'react';
import { Block, BtnHero, InitialPage, NumberInput, Titles } from '../../components';
import { rem } from '../../helpers';
import { useRandomNumberHelper } from './randomNumber.helper';

export const RandomNumberScreen: React.FC = () => {
	const { handleGenerateOnClick, generatedValue, handleOnChange, resources, values } = useRandomNumberHelper();
	return (
		<InitialPage style={{ backgroundColor: 'var(--grey-900)' }}>
			<Block
				stack
				style={{
					height: '100%',
					justifyContent: 'space-evenly',
				}}
			>
				<Block align={{ horizontal: 'center' }} style={{ color: 'var(--white)' }}>
					<Block style={{ border: `1px solid var(--grey-100)`, borderRadius: '5px', padding: rem(50) }}>
						<Block stack align={{ horizontal: 'center' }}>
							{/* Title & Subtitle */}
							<Titles
								title={resources.title}
								subtitle={generatedValue ? resources.subtitle + generatedValue : resources.subtitle}
								horizontalAlign="center"
								subtitleStyle={{ color: generatedValue ? 'var(--discover-blue-dark)' : 'var(--white)' }}
							/>
							{/* Form */}
							<form autoComplete="off">
								<Block stack style={{ marginBottom: rem(48) }}>
									<Block>
										<NumberInput
											value={values.min}
											label={resources.labelMin}
											onChange={handleOnChange}
										/>

										<NumberInput
											value={values.max}
											label={resources.labelMax}
											horizontalAlign={'end'}
											onChange={handleOnChange}
										/>
									</Block>
								</Block>
								<BtnHero
									type="submit"
									btnLabel={resources.btnLabel}
									onClick={handleGenerateOnClick}
									horizontalAlign={'center'}
								/>
							</form>
						</Block>
					</Block>
				</Block>
			</Block>
		</InitialPage>
	);
};
