import { Device, Folder, VirtualDevice } from '../types';
import { atom } from 'jotai';

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

export const foldersAtom = atom(folders);
export const selectedFolderAtom = atom(0);
export const currentFolderAtom = atom(get =>
  folders.find(folder => folder.id === get(selectedFolderAtom))
);

const playbackDevices: Device[] = new Array(50).fill(0).map((_, i) => ({
  value: `playback${i}`,
  label: `Playback ${i + 1}`,
}));
export const playbackDevicesAtom = atom(playbackDevices);

const availableMicrophones: Device[] = new Array(50).fill(0).map((_, i) => ({
  value: `mic${i}`,
  label: `Microphone ${i + 1}`,
}));
export const availableMicrophonesAtom = atom(availableMicrophones);

export const virtualDevicesAtom = atom<VirtualDevice[]>([
  {
    id: 0,
    name: 'Virtual Device 1',
    volume: 50,
    connectedTo: [availableMicrophones[0], availableMicrophones[2]],
  },
]);
