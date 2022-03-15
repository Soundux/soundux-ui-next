import { Card, Divider, Group, Select, SelectItem, Switch, Text } from '@mantine/core';
import { useInputState } from '@mantine/hooks';

const languages: SelectItem[] = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
];

function TabOther() {
  const [deleteToTrash, setDeleteToTrash] = useInputState(true);
  const [minimizeToTray, setMinimizeToTray] = useInputState(true);
  const [hotkeysOnlyCurrentTab, setHotkeysOnlyCurrentTab] = useInputState(true);
  const [disableAnalytics, setDisableAnalytics] = useInputState(true);
  const [topmost, setTopmost] = useInputState(true);
  const [autostart, setAutostart] = useInputState(true);
  const [advancedMode, setAdvancedMode] = useInputState(true);

  return (
    <Card p="lg" radius="lg">
      <Text mb="md" weight={500}>
        Other
      </Text>
      <Text size="sm">Miscellaneous settings</Text>
      <Divider my="lg" variant="dotted" />
      <Group direction="column" grow>
        <Switch checked={deleteToTrash} onChange={setDeleteToTrash} label="Delete to trash" size="md" />
        <Switch
          checked={minimizeToTray}
          onChange={setMinimizeToTray}
          label="Minimize to tray"
          size="md"
        />
        <Switch
          checked={hotkeysOnlyCurrentTab}
          onChange={setHotkeysOnlyCurrentTab}
          label="Hotkeys only for current tab"
          size="md"
        />
        <Switch
          checked={disableAnalytics}
          onChange={setDisableAnalytics}
          label="Disable analytics"
          size="md"
        />
        <Switch checked={topmost} onChange={setTopmost} label="Topmost" size="md" />
        <Switch checked={autostart} onChange={setAutostart} label="Autostart" size="md" />
        <Switch
          checked={advancedMode}
          onChange={setAdvancedMode}
          label="Enable advanced mode"
          size="md"
        />
        <Select label="Language override" placeholder="Pick one" clearable data={languages} />
      </Group>
    </Card>
  );
}

export default TabOther;
