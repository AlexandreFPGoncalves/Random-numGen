import React, { useMemo, useState } from 'react';

interface RandomNumberProps {
	generatedValue: number;
	resources: RandomNumberScreenResources;
	values: ValuesProps;
	handleGenerateOnClick: (e: any, min: number, max: number) => void;
	handleOnChange: (e: any) => void;
}

interface ValuesProps {
	min: number;
	max: number;
}

export interface RandomNumberScreenResources {
	title: string;
	subtitle: string;
	labelMin: string;
	labelMax: string;
	btnLabel: string;
}

export const useRandomNumberHelper = (): RandomNumberProps => {
	const [values, setValues] = useState<ValuesProps>({ min: 0, max: 0 });
	const [generatedValue, setGeneratedValue] = useState<number>(0);

	const resources = useMemo((): RandomNumberScreenResources => {
		return {
			title: 'Random Number Generator',
			subtitle: 'Number Generated: ',
			labelMin: 'Min',
			labelMax: 'Max',
			btnLabel: 'Generate',
		};
	}, []);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === 'Min') {
			setValues({
				...values,
				min: Number(e.target.value),
			});
		} else {
			setValues({
				...values,
				max: Number(e.target.value),
			});
		}
	};

	const generateRandomNumber = (min: number, max: number) => {
		const generatedValue = Math.floor(Math.random() * (max + 1 - min) + min);
		return generatedValue;
	};

	const handleGenerateOnClick = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (values.min > values.max) {
			setValues({
				...values,
				min: values.max,
				max: values.min,
			});
		} else {
			console.log('min', values.min, 'max', values.max);
			const value = generateRandomNumber(values.min, values.max);
			setGeneratedValue(value);
		}
	};

	return {
		handleGenerateOnClick,
		generatedValue,
		resources,
		handleOnChange,
		values,
	};
};
