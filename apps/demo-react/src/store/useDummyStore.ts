import { create } from "zustand";

export const useDummyStore = create<{
  count: number;
  increment: () => void;
}>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export const getDummyStoreCount = () => {
  const state = useDummyStore.getState();
  return state.count;
};

export const getDummyStoreIncrement = (count: number) => {
  useDummyStore.setState({ count: count });
};
