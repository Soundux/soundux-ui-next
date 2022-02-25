import { AlertIcon, EyeIcon } from '@primer/octicons-react';
import { Alert, Card, CSSObject, Divider, Radio, RadioGroup, Text } from '@mantine/core';

function TabAudioBackend() {
  const cursedShit: CSSObject = {
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
    <Card padding="lg" radius="lg">
      <Text mb="md" weight={500}>
        Audio Backend
      </Text>
      <Text size="sm">The technology to make use of to play sounds</Text>
      <Divider my="lg" variant="dotted" />
      <RadioGroup variant="vertical" size="lg" required>
        <Radio value="new">New</Radio>
        <Radio value="x1" sx={cursedShit}>
          <Alert icon={<EyeIcon size={16} />} title="Advantages" color="green" radius="md" mb="xs">
            Supports video formats & network streaming
          </Alert>
          <Alert icon={<AlertIcon size={16} />} title="Warning" color="yellow" radius="md">
            May be more resource intensive
          </Alert>
        </Radio>
        <Radio value="old">Old</Radio>
        <Radio value="x2" sx={cursedShit}>
          <Alert icon={<EyeIcon size={16} />} title="Advantages" color="green" radius="md">
            Less resource intensive
          </Alert>
        </Radio>
      </RadioGroup>
    </Card>
  );
}

export default TabAudioBackend;
