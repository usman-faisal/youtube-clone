import {create} from "zustand";

const useSidebarState = create(set => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default  useSidebarState;