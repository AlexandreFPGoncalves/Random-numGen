export interface CoreStoreState {
  generatedNumbersList: { id: string; generatedNumber: number }[];
}

export interface CoreStoreActions {
  handleAddNumberToGeneratedList(generatedNumber: number): void;
}

export interface CoreStore extends CoreStoreState, CoreStoreActions {}
