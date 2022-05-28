import { Button, Group } from '@mantine/core';
import { VirtualDevice } from '../types';
import VirtualDeviceCard from '../components/VirtualDeviceCard';
import { openVirtualDeviceCreationModal, openVirtualDeviceDeleteModal } from '../modals';
import { useModals } from '@mantine/modals';
import { useAtom } from 'jotai';
import { virtualDevicesAtom } from '../store';
import { IconPlus } from '@tabler/icons';

function VirtualDevices() {
  const modals = useModals();

  const [virtualDevices, setVirtualDevices] = useAtom(virtualDevicesAtom);

  function addDevice() {
    openVirtualDeviceCreationModal(modals, name => {
      setVirtualDevices(current => [
        ...current,
        {
          id: current.length ? current[current.length - 1].id + 1 : 0,
          name,
          volume: 50,
          deletable: true,
          connectedTo: [],
        },
      ]);
    });
  }

  function deleteDevice(virtualDevice: VirtualDevice) {
    openVirtualDeviceDeleteModal(modals, virtualDevice, () => {
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
          onDelete={deleteDevice}
        />
      ))}
      <Button
        onClick={addDevice}
        sx={{ marginLeft: '50px' }}
        variant="outline"
        color="green"
        leftIcon={<IconPlus size={18} />}
      >
        Add a new virtual device
      </Button>
    </Group>
  );
}

export default VirtualDevices;
