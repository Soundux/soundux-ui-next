import { Group, UnstyledButton } from '@mantine/core';
import { useState } from 'react';
import AddDeviceIcon from '../assets/AddDeviceIcon';
import { VirtualDevice } from '../components/VirtualDeviceCard';
import VirtualDeviceCard from '../components/VirtualDeviceCard';
import { CheckboxListItem } from '../components/input/CheckboxList';

const availableMicrophones: CheckboxListItem[] = [];
for (let i = 0; i <= 10; i++) {
  availableMicrophones.push({ value: `mic${i}`, label: `Microphone ${i + 1}` });
}

function VirtualDevices() {
  const [virtualDevices, setVirtualDevices] = useState<VirtualDevice[]>([
    {
      id: 0,
      name: 'Virtual Device 1',
      volume: 50,
      connectedTo: [availableMicrophones[0], availableMicrophones[2]],
    },
  ]);

  function deleteDevice(virtualDevice: VirtualDevice) {
    setVirtualDevices(virtualDevices.filter(device => device.id !== virtualDevice.id));
  }

  return (
    <Group
      position="left"
      align="center"
      sx={{
        height: 'calc(100vh - 92px)',
      }}
    >
      {virtualDevices.map(virtualDevice => (
        <VirtualDeviceCard
          key={virtualDevice.id}
          virtualDevice={virtualDevice}
          availableMicrophones={availableMicrophones}
          onDelete={deleteDevice}
        />
      ))}
      <UnstyledButton
        onClick={() =>
          setVirtualDevices(current => [
            ...current,
            {
              id: current.length ? current[current.length - 1].id + 1 : 0,
              name: 'New virtual device',
              volume: 50,
              connectedTo: [],
            },
          ])
        }
        sx={{ marginLeft: '90px' }}
      >
        <AddDeviceIcon style={{ width: '97px' }} />
      </UnstyledButton>
    </Group>
  );
}

export default VirtualDevices;
