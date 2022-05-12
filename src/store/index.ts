import create from 'zustand';
import { combine } from 'zustand/middleware';

const initialSettings = {
  deleteToTrash: false,
  minimizeToTray: false,
  hotkeysOnlyCurrentTab: false,
  disableAnalytics: false,
  topmost: false,
  autostart: false,
  advancedMode: false,
  language: 'auto',
};

export const useStore = create(
  combine(initialSettings, set => ({
    setDeleteToTrash: (value: boolean) => set(state => ({ ...state, deleteToTrash: value })),
    setMinimizeToTray: (value: boolean) => set(state => ({ ...state, minimizeToTray: value })),
    setHotkeysOnlyCurrentTab: (value: boolean) =>
      set(state => ({ ...state, hotkeysOnlyCurrentTab: value })),
    setDisableAnalytics: (value: boolean) => set(state => ({ ...state, disableAnalytics: value })),
    setTopmost: (value: boolean) => set(state => ({ ...state, topmost: value })),
    setAutostart: (value: boolean) => set(state => ({ ...state, autostart: value })),
    setAdvancedMode: (value: boolean) => set(state => ({ ...state, advancedMode: value })),
    setLanguage: (value: string) => set(state => ({ ...state, language: value })),
  }))
);
