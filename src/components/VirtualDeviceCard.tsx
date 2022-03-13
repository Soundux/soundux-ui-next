import { Card, Group, InputWrapper, Slider, TextInput, ThemeIcon, UnstyledButton } from '@mantine/core';
import CheckboxList, { CheckboxListItem } from './input/CheckboxList';
import { XIcon } from '@primer/octicons-react';
import { useState } from 'react';
import { useInputState } from '@mantine/hooks';

export interface VirtualDevice {
  id: number;
  name: string;
  volume: number;
  connectedTo: CheckboxListItem[];
}

export interface VirtualDeviceCardProps {
  virtualDevice: VirtualDevice;
  availableMicrophones: CheckboxListItem[];
  onDelete: (virtualDevice: VirtualDevice) => void;
}

function VirtualDeviceCard({ virtualDevice, availableMicrophones, onDelete }: VirtualDeviceCardProps) {
  const [name, setName] = useInputState(virtualDevice.name);
  const [volume, setVolume] = useState(virtualDevice.volume);
  const [connectedTo, setConnectedTo] = useState(virtualDevice.connectedTo);

  return (
    <Card p="lg" radius="lg" sx={{ height: '77.5%', width: '290px' }}>
      <Group direction="column" position="center" noWrap sx={{ height: '100%' }}>
        <TextInput size="lg" value={name} onChange={setName} />
        <InputWrapper label="Volume" sx={{ width: '100%' }}>
          <Slider label={value => `${value}%`} value={volume} onChange={setVolume} />
        </InputWrapper>
        <CheckboxList
          data={availableMicrophones}
          selection={connectedTo}
          onChange={setConnectedTo}
          searchPlaceholder="Search..."
          nothingFound="Nothing here"
          title="Connect to"
          style={{ width: '100%', flexGrow: 1 }}
        />
        <UnstyledButton onClick={() => onDelete(virtualDevice)} sx={{ alignSelf: 'center' }}>
          <ThemeIcon variant="filled" color="red" radius="lg" size="lg">
            <XIcon />
          </ThemeIcon>
        </UnstyledButton>
      </Group>
    </Card>
  );
}

export default VirtualDeviceCard;
