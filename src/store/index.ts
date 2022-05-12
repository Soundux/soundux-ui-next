import create from 'zustand';
import { combine } from 'zustand/middleware';
import { Folder } from '../types';

const folders: Folder[] = new Array(20).fill(0).map((_, i) => ({
  id: i,
  name: `Folder ${i + 1}`,
  color: i % 2 === 0 ? 'red' : 'blue',
  sounds: [
    {
      id: 2,
      name: `Folder ${i + 1} Sound 3`,
      fileType: 'webm',
      length: '0:31',
      modified: '15/02/2022',
    },
    {
      id: 1,
      name: `Folder ${i + 1} Sound 2`,
      fileType: 'wav',
      length: '3:00',
      modified: '10 hours ago',
    },
    {
      id: 0,
      name: `Folder ${i + 1} Sound 1`,
      fileType: 'mp3',
      length: '1:54',
      modified: '5 minutes ago',
    },
  ],
}));

const initialState = {
  deleteToTrash: false,
  minimizeToTray: false,
  hotkeysOnlyCurrentTab: false,
  disableAnalytics: false,
  topmost: false,
  autostart: false,
  advancedMode: false,
  language: 'auto',
  selectedFolder: 0, // id of the selected folder
  folders,
};

export const useStore = create(
  combine(initialState, set => ({
    setDeleteToTrash: (value: boolean) => set(() => ({ deleteToTrash: value })),
    setMinimizeToTray: (value: boolean) => set(() => ({ minimizeToTray: value })),
    setHotkeysOnlyCurrentTab: (value: boolean) => set(() => ({ hotkeysOnlyCurrentTab: value })),
    setDisableAnalytics: (value: boolean) => set(() => ({ disableAnalytics: value })),
    setTopmost: (value: boolean) => set(() => ({ topmost: value })),
    setAutostart: (value: boolean) => set(() => ({ autostart: value })),
    setAdvancedMode: (value: boolean) => set(() => ({ advancedMode: value })),
    setLanguage: (value: string) => set(() => ({ language: value })),
    setSelectedFolder: (value: number) => set(() => ({ selectedFolder: value })),
    setFolders: (value: Folder[]) => set(() => ({ folders: value })),
  }))
);
