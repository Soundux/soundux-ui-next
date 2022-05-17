import {
  Avatar,
  Card,
  Checkbox,
  Group,
  InputWrapper,
  Slider,
  Text,
  ThemeIcon,
  Tooltip,
  TransferListItem,
  UnstyledButton,
} from '@mantine/core';
import CheckboxList, {
  CheckboxListItemComponent,
  CheckboxListItemComponentProps,
} from './input/CheckboxList';
import { XIcon } from '@primer/octicons-react';
import FastAverageColor from 'fast-average-color';
import { useEffect, useState } from 'react';
import { VirtualDevice } from '../types';
import { useAtom } from 'jotai';
import { availableMicrophonesAtom, playbackApplicationsAtom } from '../store';

const ItemComponent: CheckboxListItemComponent = ({
  data,
  selected,
}: CheckboxListItemComponentProps) => {
  return (
    <Group noWrap>
      {data.icon ? (
        <Avatar src={`data:image/png;base64,${data.icon}`} size="sm" />
      ) : (
        <ThemeIcon radius="xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-microphone"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="9" y="2" width="6" height="11" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </ThemeIcon>
      )}
      <div style={{ flex: 1 }}>
        <Text size="sm" weight={500} color={data.color ?? '#fff'}>
          {data.label}
        </Text>
        <Text size="xs" color="dimmed" weight={400}>
          {data.value}
        </Text>
      </div>
      <Checkbox checked={selected} onChange={() => {}} tabIndex={-1} sx={{ pointerEvents: 'none' }} />
    </Group>
  );
};

interface VirtualDeviceCardProps {
  virtualDevice: VirtualDevice;
  onDelete: (virtualDevice: VirtualDevice) => void;
}

function VirtualDeviceCard({ virtualDevice, onDelete }: VirtualDeviceCardProps) {
  const [availableMicrophones] = useAtom(availableMicrophonesAtom);
  const [applications] = useAtom(playbackApplicationsAtom);

  const [connectors, setConnectors] = useState<TransferListItem[]>([]);

  useEffect(() => {
    (async function fetchData() {
      // Devices can be connected to all microphones and applications
      const cons: TransferListItem[] = availableMicrophones
        .map(microphone => ({
          group: 'Microphones',
          ...microphone,
        }))
        .concat(
          applications.map(application => ({
            group: 'Applications',
            ...application,
          }))
        );

      for (const data of cons) {
        if (data.icon) {
          const color = await new FastAverageColor().getColorAsync(`data:image/png;base64,${data.icon}`);
          data.color = color.hex;
        }
      }
      setConnectors(cons);
    })();
  }, [availableMicrophones, applications]);

  // TODO: make these two reactive from the original object!
  const [volume, setVolume] = useState(virtualDevice.volume);
  const [connectedTo, setConnectedTo] = useState(virtualDevice.connectedTo);

  return (
    <Card p="lg" radius="lg" sx={{ height: '77.5%', width: '290px' }}>
      <Group direction="column" position="center" noWrap sx={{ height: '100%' }}>
        <Text weight={600} inline>
          {virtualDevice.name}
        </Text>
        <InputWrapper label="Volume" sx={{ width: '100%' }}>
          <Slider label={value => `${value}%`} value={volume} onChange={setVolume} />
        </InputWrapper>
        <CheckboxList
          data={connectors}
          selection={connectedTo}
          onChange={setConnectedTo}
          searchPlaceholder="Search..."
          nothingFound="Nothing here"
          title="Connect to"
          itemComponent={ItemComponent}
          style={{ width: '100%', flexGrow: 1 }}
        />
        <Tooltip label="Remove this virtual device" withArrow>
          <UnstyledButton onClick={() => onDelete(virtualDevice)} sx={{ alignSelf: 'center' }}>
            <ThemeIcon variant="filled" color="red" radius="lg" size="lg">
              <XIcon />
            </ThemeIcon>
          </UnstyledButton>
        </Tooltip>
      </Group>
    </Card>
  );
}

export default VirtualDeviceCard;
