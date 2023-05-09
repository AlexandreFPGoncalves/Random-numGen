import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCoreStore } from '../../../lib';

export const InputsShard = () => {
  const { handleAddNumberToGeneratedList } = useCoreStore();

  const [minValue, setMinValue] = useState<number | undefined>();
  const [maxValue, setMaxValue] = useState<number | undefined>();

  const generateRandomNumberOnClick = (minValue: number, maxValue: number) => {
    const generatedNumber = Math.floor(Math.random() * (maxValue + 1 - minValue) + minValue);
    handleAddNumberToGeneratedList(generatedNumber);

    toast('Number Generated: ' + generatedNumber, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const handleOrganizeValuesOnBlur = () => {
    if (minValue && maxValue) {
      if (minValue > maxValue) {
        setMaxValue(minValue);
        setMinValue(maxValue);
      }
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-6">
        <div className="static flex w-full items-center gap-2 rounded-2xl border-2 border-violet-600 p-3">
          <input
            type="number"
            className={'text-bold w-full bg-transparent text-center font-semibold outline-none'}
            placeholder="Min Value"
            value={minValue}
            onChange={(e) => setMinValue(Number(e.target.value) === 0 ? undefined : Number(e.target.value))}
            onBlur={handleOrganizeValuesOnBlur}
          />
        </div>
        <div className="static flex w-full items-center gap-2 rounded-2xl border-2 border-violet-600 p-3 focus:border-violet-200">
          <input
            type="number"
            className={'text-bold w-full bg-transparent text-center font-semibold outline-none'}
            placeholder="Max Value"
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value) === 0 ? undefined : Number(e.target.value))}
            onBlur={handleOrganizeValuesOnBlur}
          />
        </div>
      </div>

      <button
        className="rounded border-2  border-violet-600 bg-violet-600 py-1  text-lg font-semibold transition-all hover:-translate-y-[1px] hover:border-violet-700 hover:bg-violet-700"
        onClick={() => minValue && maxValue && generateRandomNumberOnClick(minValue, maxValue)}
      >
        Generate
      </button>
    </div>
  );
};
