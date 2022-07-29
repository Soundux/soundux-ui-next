import { AlertIcon, EyeIcon } from '@primer/octicons-react';
import { Alert, Card, createStyles, Divider, Radio, RadioStylesNames, Text } from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles<RadioStylesNames>(() => ({
  radioWrapper: {
    pointerEvents: 'none',
  },
  icon: {},
  inner: {},
  radio: {
    display: 'none',
  },
  label: {
    justifyContent: 'stretch',
    paddingLeft: 0,
    width: '100%',
    '& > *': {
      flexGrow: 1,
    },
  },
}));

function TabAudioBackend() {
  const { classes: hideCheckbox } = useStyles();
  const [selectedBackend, setSelectedBackend] = useState('new');

  return (
    <Card p="xl" radius="lg">
      <Text mb="md" weight={500}>
        Audio Backend
      </Text>
      <Text size="sm">The technology to make use of to play sounds</Text>
      <Divider my="lg" variant="dotted" />
      <Radio.Group
        value={selectedBackend}
        onChange={setSelectedBackend}
        orientation="vertical"
        size="lg"
      >
        <Radio value="new" label="New" />
        <Radio
          value="x1"
          classNames={hideCheckbox}
          label={
            <Alert icon={<EyeIcon />} title="Advantages" color="green" radius="md" mb="-sm">
              Supports video formats & network streaming
            </Alert>
          }
        />
        <Radio
          value="x2"
          classNames={hideCheckbox}
          label={
            <Alert icon={<AlertIcon />} title="Warning" color="yellow" radius="md">
              May be more resource intensive
            </Alert>
          }
        />
        <Radio value="old" label="Old" />
        <Radio
          value="x3"
          classNames={hideCheckbox}
          label={
            <Alert icon={<EyeIcon />} title="Advantages" color="green" radius="md">
              Less resource intensive
            </Alert>
          }
        />
      </Radio.Group>
    </Card>
  );
}

export default TabAudioBackend;
