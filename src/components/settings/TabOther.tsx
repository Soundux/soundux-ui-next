import { Card, Divider, Group, Select, Switch, Text } from '@mantine/core';

function TabOther() {
  return (
    <Card padding="lg" radius="lg">
      <Text mb="md" weight={500}>
        Other
      </Text>
      <Text size="sm">Miscellaneous settings</Text>
      <Divider my="lg" variant="dotted" />
      <Group direction="column" grow>
        <Switch label="Delete to trash" size="md" />
        <Switch label="Minimize to tray" size="md" />
        <Switch label="Hotkeys only for current tab" size="md" />
        <Switch label="Disable analytics" size="md" />
        <Switch label="Topmost" size="md" />
        <Switch label="Autostart" size="md" />
        <Switch label="Enable advanced mode" size="md" />
        <Select
          label="Language"
          placeholder="Pick one"
          clearable
          data={[
            { value: 'en', label: 'English' },
            { value: 'de', label: 'German' },
          ]}
        />
      </Group>
    </Card>
  );
}

export default TabOther;
