import {
  Avatar,
  Card,
  Checkbox,
  Group,
  Input,
  Loader,
  Slider,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';
import CheckboxList, {
  CheckboxListItemComponent,
  CheckboxListItemComponentProps,
} from './input/CheckboxList';
import { TrashIcon } from '@primer/octicons-react';
import { FastAverageColor } from 'fast-average-color';
import { useEffect, useState } from 'react';
import { Connector, ConnectorType, VirtualDevice } from '../types';
import { useAtom } from 'jotai';
import { IconMicrophone, IconQuestionMark } from '@tabler/icons';
import { availableMicrophonesAtom, playbackApplicationsAtom } from '../store';
import ReactiveVolumeIcon from './ReactiveVolumeIcon';
import { advancedModeSetting } from '../store/settings';

const ItemComponent: CheckboxListItemComponent = ({
  data,
  selected,
}: CheckboxListItemComponentProps) => {
  const [advancedMode] = useAtom(advancedModeSetting);

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
        {advancedMode && (
          <Text size="xs" color="dimmed" weight={400}>
            {data.value}
          </Text>
        )}
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
  }, [availableMicrophones, applications]);

  const [volume, setVolume] = useState(virtualDevice.volume);
  const [connectedTo, setConnectedTo] = useState(virtualDevice.connectedTo);

  return (
    <Card p="lg" radius="lg" sx={{ height: '77.5%', width: '290px' }}>
      <Stack align="center" sx={{ height: '100%' }}>
        <Text weight={600} inline>
          {virtualDevice.name}
        </Text>
        <Input.Wrapper
          label={
            <Group spacing={5}>
              <ReactiveVolumeIcon volume={volume} /> Volume
            </Group>
          }
          sx={{ width: '100%' }}
        >
          <Slider
            label={value => `${value}%`}
            value={volume}
            onChange={value => {
              setVolume(value);
              virtualDevice.volume = value;
            }}
          />
        </Input.Wrapper>
        <CheckboxList
          data={connectors}
          selection={connectedTo}
          onChange={value => {
            setConnectedTo(value);
            virtualDevice.connectedTo = value;
          }}
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
      </Stack>
    </Card>
  );
}

export default VirtualDeviceCard;
