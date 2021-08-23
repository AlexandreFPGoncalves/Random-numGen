import React, { useState } from "react";

interface UseRandomProps {
  GenerateOnClick: (values: any) => void;
  generatedValue: number;
  changeMin: (e: any) => void;
  changeMax: (e: any) => void;
}

interface Values {
  min: number;
  max: number;
}

export const useRandom = (): UseRandomProps => {
  const createRandom = (min: number, max: number) => {
    const generatedValue = Math.floor(Math.random() * (max + 1 - min) + min);
    return generatedValue;
  };

  const changeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      min: Number(e.target.value),
    });
  };

  const changeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      max: Number(e.target.value),
    });
  };

  const [values, setValues] = useState<Values>({ min: 0, max: 10 });
  const [generatedValue, setGeneratedValue] = useState(0);

  const GenerateOnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (values.min > values.max) {
      setValues({
        ...values,
        min: values.max,
        max: values.min,
      });
    } else {
      console.log("min", values.min, "max", values.max);
      const value = createRandom(values.min, values.max);
      setGeneratedValue(value);
    }
  };

  return {
    GenerateOnClick,
    generatedValue,
    changeMin,
    changeMax,
  };
};
