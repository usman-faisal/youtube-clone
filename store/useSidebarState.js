import { create } from "zustand";

const useSidebarState = create((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebarState;