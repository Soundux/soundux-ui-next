import { Group, Tooltip, UnstyledButton } from '@mantine/core';
import { useState } from 'react';
import AddDeviceIcon from '../assets/AddDeviceIcon';
import { VirtualDevice } from '../types';
import VirtualDeviceCard from '../components/VirtualDeviceCard';
import { CheckboxListItem } from '../components/input/CheckboxList';
import { openVirtualDeviceCreationModal } from '../modals';
import { useModals } from '@mantine/modals';

const availableMicrophones: CheckboxListItem[] = [];
for (let i = 0; i <= 10; i++) {
  availableMicrophones.push({ value: `mic${i}`, label: `Microphone ${i + 1}` });
}

function VirtualDevices() {
  const modals = useModals();

  const [virtualDevices, setVirtualDevices] = useState<VirtualDevice[]>([
    {
      id: 0,
      name: 'Virtual Device 1',
      volume: 50,
      connectedTo: [availableMicrophones[0], availableMicrophones[2]],
    },
  ]);

  function addDevice() {
    openVirtualDeviceCreationModal(modals, name => {
      setVirtualDevices(current => [
        ...current,
        {
          id: current.length ? current[current.length - 1].id + 1 : 0,
          name,
          volume: 50,
          connectedTo: [],
        },
      ]);
    });
  }

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
      <Tooltip label="Add a new virtual device" withArrow sx={{ marginLeft: '90px' }}>
        <UnstyledButton onClick={addDevice}>
          <AddDeviceIcon style={{ width: '97px' }} />
        </UnstyledButton>
      </Tooltip>
    </Group>
  );
}

export default VirtualDevices;
