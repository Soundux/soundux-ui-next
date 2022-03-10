import { AlertIcon, EyeIcon } from '@primer/octicons-react';
import { Alert, Card, CSSObject, Divider, Radio, RadioGroup, Text } from '@mantine/core';
import { useState } from 'react';

function TabAudioBackend() {
  const [selectedBackend, setSelectedBackend] = useState('new');

  const hideCheckbox: CSSObject = {
    pointerEvents: 'none',
    '& input': { display: 'none' },
    width: '100%',
    '& .mantine-RadioGroup-label': {
      width: '100%',
    },
    '& .mantine-RadioGroup-label span': {
      width: '100%',
    },
  };

  return (
    <Card p="lg" radius="lg">
      <Text mb="md" weight={500}>
        Audio Backend
      </Text>
      <Text size="sm">The technology to make use of to play sounds</Text>
      <Divider my="lg" variant="dotted" />
      <RadioGroup value={selectedBackend} onChange={setSelectedBackend} orientation="vertical" size="lg">
        <Radio value="new" label="New" />
        <Radio
          value="x1"
          sx={hideCheckbox}
          label={
            <>
              <Alert icon={<EyeIcon />} title="Advantages" color="green" radius="md" mb="xs">
                Supports video formats & network streaming
              </Alert>
              <Alert icon={<AlertIcon />} title="Warning" color="yellow" radius="md">
                May be more resource intensive
              </Alert>
            </>
          }
        />
        <Radio value="old" label="Old" />
        <Radio
          value="x2"
          sx={hideCheckbox}
          label={
            <Alert icon={<EyeIcon />} title="Advantages" color="green" radius="md">
              Less resource intensive
            </Alert>
          }
        />
      </RadioGroup>
    </Card>
  );
}

export default TabAudioBackend;
