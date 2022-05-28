import {
  Avatar,
  Card,
  Checkbox,
  Group,
  InputWrapper,
  Loader,
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
import { TrashIcon } from '@primer/octicons-react';
import FastAverageColor from 'fast-average-color';
import { useEffect, useState } from 'react';
import { VirtualDevice } from '../types';
import { useAtom } from 'jotai';
import { IconMicrophone, IconQuestionMark } from '@tabler/icons';
import { availableMicrophonesAtom, playbackApplicationsAtom, playbackDevicesAtom } from '../store';
import ReactiveVolumeIcon from './ReactiveVolumeIcon';

const ItemComponent: CheckboxListItemComponent = ({
  data,
  selected,
}: CheckboxListItemComponentProps) => {
  const icon = (() => {
    switch (data.type) {
      case ConnectorType.MIC:
        return <IconMicrophone />;
      case ConnectorType.APP: {
        if (data.icon) {
          return <Avatar src={`data:image/png;base64,${data.icon}`} size="sm" />;
        } else {
          return <IconQuestionMark />;
        }
      }
    }
  })();

  return (
    <Group noWrap>
      {icon}
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

const enum ConnectorType {
  MIC,
  APP,
}

interface Connector extends TransferListItem {
  type: ConnectorType;
  icon?: string;
  color?: string;
}

function VirtualDeviceCard({ virtualDevice, onDelete }: VirtualDeviceCardProps) {
  const [availableMicrophones] = useAtom(availableMicrophonesAtom);
  const [playbackDevices] = useAtom(playbackDevicesAtom);
  const [applications] = useAtom(playbackApplicationsAtom);

  const [connectors, setConnectors] = useState<Connector[]>([]);

  useEffect(() => {
    (async function fetchData() {
      const mics: Connector[] = availableMicrophones.map(microphone => ({
        group: 'Microphones',
        ...microphone,
        type: ConnectorType.MIC,
      }));

      const apps: Connector[] = applications.map(application => ({
        group: 'Applications',
        ...application,
        type: ConnectorType.APP,
      }));

      // Devices can be connected to microphones and applications
      const cons: Connector[] = [...apps, ...mics];

      for (const data of cons) {
        if (data.icon) {
          const color = await new FastAverageColor().getColorAsync(`data:image/png;base64,${data.icon}`);
          data.color = color.hex;
        }
      }
      setConnectors(cons);
    })();
  }, [availableMicrophones, playbackDevices, applications]);

  // TODO: make these two reactive from the original object!
  const [volume, setVolume] = useState(virtualDevice.volume);
  const [connectedTo, setConnectedTo] = useState(virtualDevice.connectedTo);

  return (
    <Card p="lg" radius="lg" sx={{ height: '77.5%', width: '290px' }}>
      <Group direction="column" position="center" noWrap sx={{ height: '100%' }}>
        <Text weight={600} inline>
          {virtualDevice.name}
        </Text>
        <InputWrapper
          label={
            <Group spacing={5}>
              <ReactiveVolumeIcon volume={volume} /> Volume
            </Group>
          }
          sx={{ width: '100%' }}
        >
          <Slider label={value => `${value}%`} value={volume} onChange={setVolume} />
        </InputWrapper>
        <CheckboxList
          data={connectors}
          selection={connectedTo}
          onChange={setConnectedTo}
          searchPlaceholder="Search..."
          nothingFound={connectors.length ? 'Nothing found' : <Loader />} // connectors should never be empty
          title="Connect to"
          itemComponent={ItemComponent}
          style={{ width: '100%', flexGrow: 1 }}
        />
        {virtualDevice.deletable && (
          <Tooltip label="Delete this virtual device" withArrow>
            <UnstyledButton onClick={() => onDelete(virtualDevice)} sx={{ alignSelf: 'center' }}>
              <ThemeIcon variant="filled" color="red" radius="lg" size="lg">
                <TrashIcon />
              </ThemeIcon>
            </UnstyledButton>
          </Tooltip>
        )}
      </Group>
    </Card>
  );
}

export default VirtualDeviceCard;
