import { Card, Divider, Group, MultiSelect, SelectItem, Switch, Text } from '@mantine/core';

const data: SelectItem[] = [
  { value: 'default', label: 'Default' },
  { value: 'other', label: 'Other' },
];

function TabSounds() {
  return (
    <Card padding="lg" radius="lg">
      <Text mb="md" weight={500}>
        Sounds
      </Text>
      <Text size="sm">Settings related to sound playback</Text>
      <Divider my="lg" variant="dotted" />
      <Group direction="column" grow>
        <MultiSelect
          data={data}
          // value={['default', 'other']}
          label="Local Playback Device"
          placeholder="Choose your speakers"
        />
        <MultiSelect
          data={data}
          // value={['default', 'other']}
          label="Microphone"
          placeholder="Choose your microphones"
        />
        <Switch label="Allow sound overlapping" size="md" />
        <Switch label="Mute during playback" size="md" />
        <Switch label="Volume normalization (Experimental)" size="md" />
      </Group>
    </Card>
  );
}

export default TabSounds;
