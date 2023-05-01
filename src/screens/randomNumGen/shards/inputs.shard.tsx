import { useState } from 'react';

export const InputsShard = () => {
  const [minValue, setMinValue] = useState<number | undefined>();
  const [maxValue, setMaxValue] = useState<number | undefined>();

  const generateRandomNumberOnClick = (minValue: number, maxValue: number) => {
    const generatedValue = Math.floor(Math.random() * (maxValue + 1 - minValue) + minValue);
    return generatedValue;
  };

  return (
    <div className="flex gap-3">
      <div className="static flex w-full items-center gap-2 rounded-2xl border-2 border-violet-600 p-3">
        <input
          name="min"
          type="number"
          id="todoInput"
          className={'text-bold w-full bg-transparent font-semibold capitalize outline-none appearance-none '}
          placeholder="New Todo"
          value={minValue}
          onChange={(e) => setMinValue(Number(e.target.value))}
        />
      </div>
      <div className="static flex w-full items-center gap-2 rounded-2xl border-2 border-violet-600 p-3">
        <input
          type="number"
          id="todoInput"
          className={'text-bold w-full bg-transparent font-semibold capitalize outline-none'}
          placeholder="New Todo"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))}
        />
      </div>

      <button onClick={() => minValue && maxValue && alert(generateRandomNumberOnClick(minValue, maxValue))}>
        Click me
      </button>
    </div>
  );
};
