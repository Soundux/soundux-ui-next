import {
  Avatar,
  Card,
  Checkbox,
  Group,
  Text,
  TransferList,
  TransferListData,
  TransferListItemComponent,
  TransferListItemComponentProps,
} from '@mantine/core';
import { useState } from 'react';

const initialValues: TransferListData = [
  [
    {
      value: 'firefox',
      label: 'Firefox',
      icon: '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',
    },
  ],
  [
    {
      value: 'vlc',
      label: 'VLC',
      icon: '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',
    },
  ],
];

const ItemComponent: TransferListItemComponent = ({
  data,
  selected,
}: TransferListItemComponentProps) => (
  <Group noWrap>
    <Checkbox checked={selected} onChange={() => {}} tabIndex={-1} sx={{ pointerEvents: 'none' }} />
    <Avatar src={`data:image/png;base64,${data.icon}`} size="sm" />
    <div style={{ flex: 1 }}>
      <Text size="sm" weight={500}>
        {data.label}
      </Text>
      <Text size="xs" color="dimmed" weight={400}>
        {data.value}
      </Text>
    </div>
  </Group>
);

function PassThrough() {
  const [applications, setApplications] = useState<TransferListData>(initialValues);
  return (
    <Group
      position="center"
      align="center"
      sx={{
        height: 'calc(100vh - 92px)',
      }}
    >
      <Card padding="lg" radius="lg" sx={{ height: '83%', width: '45%' }}>
        <TransferList
          value={applications}
          onChange={setApplications}
          searchPlaceholder="Search..."
          nothingFound="Nothing here"
          titles={['Available applications', 'Passed through applications']}
          itemComponent={ItemComponent}
          breakpoint="sm"
          sx={{ width: '100%', height: '100%' }}
        />
      </Card>
    </Group>
  );
}

export default PassThrough;
