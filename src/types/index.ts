import { MantineColor, TransferListItem } from '@mantine/core';
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

export interface Application {
  value: string;
  label: string;
  icon?: string;
}

export interface Device {
  value: string;
  label: string;
}

export const enum ConnectorType {
  MIC,
  APP,
}

export interface Connector extends TransferListItem {
  type: ConnectorType;
  icon?: string;
  color?: string;
}

export interface VirtualDevice {
  id: number;
  name: string;
  volume: number;
  deletable: boolean;
  connectedTo: CheckboxListItem[];
}
