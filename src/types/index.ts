import { MantineColor } from '@mantine/core';
import { CheckboxListItem } from '../components/input/CheckboxList';

export interface Sound {
  id: number;
  name: string;
  fileType: string;
  length: string;
  modified: string;
}

export interface Folder {
  id: number;
  name: string;
  color: MantineColor;
  sounds: Sound[];
}

export interface Device {
  value: string;
  label: string;
}

export interface VirtualDevice {
  id: number;
  name: string;
  volume: number;
  connectedTo: CheckboxListItem[];
}
