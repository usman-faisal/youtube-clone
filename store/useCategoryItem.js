import { create } from "zustand";

const useCategoryItem = create((set) => ({
  isActive: "",
  setIsActive: (id) => set((state) => ({ isActive: id })),
}));

export default useCategoryItem;
