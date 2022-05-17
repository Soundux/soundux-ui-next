import { Group, Tooltip, UnstyledButton } from '@mantine/core';
import AddDeviceIcon from '../assets/AddDeviceIcon';
import { VirtualDevice } from '../types';
import VirtualDeviceCard from '../components/VirtualDeviceCard';
import { openVirtualDeviceCreationModal, openVirtualDeviceRemoveModal } from '../modals';
import { useModals } from '@mantine/modals';
import { useAtom } from 'jotai';
import { availableMicrophonesAtom, virtualDevicesAtom } from '../store';

function VirtualDevices() {
  const modals = useModals();

  const [availableMicrophones] = useAtom(availableMicrophonesAtom);
  const [virtualDevices, setVirtualDevices] = useAtom(virtualDevicesAtom);

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
    openVirtualDeviceRemoveModal(modals, virtualDevice, () => {
      setVirtualDevices(virtualDevices.filter(device => device.id !== virtualDevice.id));
    });
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
