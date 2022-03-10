import { Card, Divider, Group, Select, SelectItem, Switch, Text } from '@mantine/core';
import { useState } from 'react';

const langauges: SelectItem[] = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
];

function TabOther() {
  const [deleteToTrash, setDeleteToTrash] = useState(true);
  const [minimizeToTray, setMinimizeToTray] = useState(true);
  const [hotkeysOnlyCurrentTab, setHotkeysOnlyCurrentTab] = useState(true);
  const [disableAnalytics, setDisableAnalytics] = useState(true);
  const [topmost, setTopmost] = useState(true);
  const [autostart, setAutostart] = useState(true);
  const [advancedMode, setAdvancedMode] = useState(true);

  return (
    <Card p="lg" radius="lg">
      <Text mb="md" weight={500}>
        Other
      </Text>
      <Text size="sm">Miscellaneous settings</Text>
      <Divider my="lg" variant="dotted" />
      <Group direction="column" grow>
        <Switch
          checked={deleteToTrash}
          onChange={event => setDeleteToTrash(event.currentTarget.checked)}
          label="Delete to trash"
          size="md"
        />
        <Switch
          checked={minimizeToTray}
          onChange={event => setMinimizeToTray(event.currentTarget.checked)}
          label="Minimize to tray"
          size="md"
        />
        <Switch
          checked={hotkeysOnlyCurrentTab}
          onChange={event => setHotkeysOnlyCurrentTab(event.currentTarget.checked)}
          label="Hotkeys only for current tab"
          size="md"
        />
        <Switch
          checked={disableAnalytics}
          onChange={event => setDisableAnalytics(event.currentTarget.checked)}
          label="Disable analytics"
          size="md"
        />
        <Switch
          checked={topmost}
          onChange={event => setTopmost(event.currentTarget.checked)}
          label="Topmost"
          size="md"
        />
        <Switch
          checked={autostart}
          onChange={event => setAutostart(event.currentTarget.checked)}
          label="Autostart"
          size="md"
        />
        <Switch
          checked={advancedMode}
          onChange={event => setAdvancedMode(event.currentTarget.checked)}
          label="Enable advanced mode"
          size="md"
        />
        <Select label="Language override" placeholder="Pick one" clearable data={langauges} />
      </Group>
    </Card>
  );
}

export default TabOther;
