import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { CoreStore, CoreStoreActions, CoreStoreState } from './store.types';
import { nanoid } from 'nanoid';

const initialState: CoreStoreState = {
  generatedNumbersList: [],
};

const actions = (set: any): CoreStoreActions => {
  const handleAddNumberToGeneratedList = (generatedNumber: number) => {
    set(
      (state: CoreStoreState) => {
        const newGeneratedNumber = {
          id: nanoid(),
          generatedNumber: generatedNumber,
        };

        state.generatedNumbersList = [...state.generatedNumbersList, newGeneratedNumber];
      },
      false,
      'new_generated_number'
    );
  };

  return {
    handleAddNumberToGeneratedList,
  };
};

export const useCoreStore = create<CoreStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        ...actions(set),
      }),
      {
        name: 'NUMBER.GENERATED.LIST',
        storage: createJSONStorage(() => sessionStorage),
      }
    ),
    {
      name: 'NUMBER.GENERATED.LIST',
    }
  )
);
