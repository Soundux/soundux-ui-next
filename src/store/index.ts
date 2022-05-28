import { Application, Device, Folder, VirtualDevice } from '../types';
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
export const selectedFolderAtom = atom<number | null>(0);
export const currentFolderAtom = atom(get =>
  folders.find(folder => folder.id === get(selectedFolderAtom))
);

const playbackDevices: Device[] = new Array(5).fill(0).map((_, i) => ({
  value: `playback${i}`,
  label: `Playback ${i + 1}`,
}));
export const playbackDevicesAtom = atom(playbackDevices);

const availableMicrophones: Device[] = new Array(5).fill(0).map((_, i) => ({
  value: `mic${i}`,
  label: `Microphone ${i + 1}`,
}));
export const availableMicrophonesAtom = atom(availableMicrophones);

export const virtualDevicesAtom = atom<VirtualDevice[]>([
  {
    id: 0,
    name: 'Soundux Microphone',
    volume: 100,
    deletable: false,
    connectedTo: [availableMicrophones[0]],
  },
]);

const playbackApplications: Application[] = [
  {
    value: 'firefox',
    label: 'Firefox',
    icon: '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',
  },
  {
    value: 'spotify',
    label: 'Spotify',
    icon: 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAABWBJREFUWIXFl2lsVFUUx3/nvTcznc5Ma3fpBrJKRSMuAaK4kWiMjUaNIS6hojEmfkBD+KrRxPjBL2pM3NDEin5BDYmigWiCaFzjQiuUlGILHehCF5ml01nee8cP00Kn7Qxt0Xg+vZx77v3/7/+ce8998D+bLHRi49FHBQioqoDEw03v639KoPHoo17gLqAZWK+qy0TENzGcBv4Cfga+APb2rn4/+a8QaOhoKRJkG7AdoWZObJUhRV8VeKW3qXV8wQQaOlrWAbtEZMWcgGcQ0W6FLeGm1u/zhRgFwB8BDi4YHEBkqSAHGjpaHssbUgC8VUTyEpyXqarCE+Gm1vcuSGBC9oNTCuzf4pABNoWbWr/LS6ChfUsRlrRflOyFSZzA0TXhKz8Ym/RZORGWPD0dXGMZtCuChsdgOAmxDJpyQUC8JpR4kMoiqCtGloaQsvzCicgSNdkBvHDON/lR/9ODPinxnhSRGgC3fRTntSNwPArzuWJqi5FrKzA2XopcV4lYuWWkqqOasBtOXfdRIkcBCXiaJ8EB3N090BWdB/KE9SXQvgTO52Go8GHctwTj/iVIcRZKRMopMu8FPsohgNA8dR3jnkac/gSyOIisKUMuCyE1fijxgM/MBqUciKTRM0m0N44ei6CHRiE8keKRFO7OTtw9J7DevhGpKpoEa56FgKzPIXB9Fcb1VYV36zEg6EHqArC24pxbw3HcfadxP+uFSBqGU2h37DwBYd35fQP+OxZbla/cMiYi3ukYOpRE20fR41G0P5FdMO2CKVnwqiJoDCKXlyKrSnNyruM27p6ToGA8uBQxsiWnqk7iy57gyI5vkxZA6OHVodnAnZ2duLuOFxQhpz4DFrKhGuPO+mwB+i3Mh5bNmCMipveqqkrglAWgCXvWG1GHJxpahS+7u/oAlHnBa4LtZo/kwDjaE4OeGIzZ6Nd9OF/3wdIQ5pOXY2yonp15yjFgIgXeNRW+mt3N0ekqqO3CmSQs8iNSuHFqPIP+MoT7VR/64yC4Wb/56jqMaypzY1XdyOuHSqNvtsUtgPThERtbe/HI8hypLANqi89PHLfhbBqSTpZ60ANlPsQUJOhBbqvFuK0WPTWG824n2hlBqv0z2Tp6OvpmWxLOnwJXU/Zv4vHmEFBHcT/oQttGszL/nZ65mMeAJUGMqyuQm2qQq8qR+gDW89fkVyvl/A44Uwmoeza13wh6N+dEjiRxW7uylbaoGFleAuU+xG+Bq2gsA/0JtDuG2xWFj3tgcRCzZTmyqTZv2txIah8T9XsuIvDAysry59YfE8soy2Hbn8je9wFP/h2lHfTQKO7+U+iBfrAV4/GVmC0ze5o6bjTy2h+rojv/HAAwJwcyHSPJ4AMryo2Q94apEyTkyTadAiamgdQFMG5ehHF7HdiK3FCTvTmnmTOUeGd424FPJxWYurK60fQR/8a6zWIaJQURC5EJeTA2VM8KrhlnIPL6oa3p9uHIpC+nVY3tOd6f/Kn/GVW1F0ogn6mqk/p1cHv8w6Onp/pnaJvY291dfGtD2qjy3yoXOvxzB9dM598vDj705U4gU5AA4MR3H/vdf1N9yqwu3nix70JVdTIdoy8N3P/5y0Bi+ni+6sqMfdL1q2fZJcc8jSUbxDJCCwJPO4PjB8JPn9m6/21gbLaYQuWdGd9/8mi6bWivp6nCNEp9K8WY20NVbTdm90R2jTz7w1PRt9q/AfL+Jc01x0Hv2urFl2xbe7d1WcktRqnvCvGZiybTo6ouaWfQOZs+bJ+IHIy80fZZ6peBE0CcCzzo5ltkXiAIBM26YNB/Y20FCMkf+0bt3liMrMxxIDXPdRdswkX8YQP8A9c2JZ4wXbh1AAAAAElFTkSuQmCC',
  },
  {
    value: 'vlc',
    label: 'VLC',
    icon: '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',
  },
];

export const playbackApplicationsAtom = atom(playbackApplications);
