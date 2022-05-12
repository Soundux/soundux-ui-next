import { Card, Divider, Group, Select, SelectItem, Switch, Text } from '@mantine/core';
import { useStore } from '../../store';
import shallow from 'zustand/shallow';

const languages: SelectItem[] = [
  { value: 'auto', label: 'Auto-detect (English)' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
];

function TabOther() {
  const [
    deleteToTrash,
    setDeleteToTrash,
    minimizeToTray,
    setMinimizeToTray,
    hotkeysOnlyCurrentTab,
    setHotkeysOnlyCurrentTab,
    disableAnalytics,
    setDisableAnalytics,
    topmost,
    setTopmost,
    autostart,
    setAutostart,
    advancedMode,
    setAdvancedMode,
    language,
    setLanguage,
  ] = useStore(
    state => [
      state.deleteToTrash,
      state.setDeleteToTrash,
      state.minimizeToTray,
      state.setMinimizeToTray,
      state.hotkeysOnlyCurrentTab,
      state.setHotkeysOnlyCurrentTab,
      state.disableAnalytics,
      state.setDisableAnalytics,
      state.topmost,
      state.setTopmost,
      state.autostart,
      state.setAutostart,
      state.advancedMode,
      state.setAdvancedMode,
      state.language,
      state.setLanguage,
    ],
    shallow
  );

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
          onChange={event => setDeleteToTrash(event.target.checked)}
          label="Delete to trash"
          size="md"
        />
        <Switch
          checked={minimizeToTray}
          onChange={event => setMinimizeToTray(event.target.checked)}
          label="Minimize to tray"
          size="md"
        />
        <Switch
          checked={hotkeysOnlyCurrentTab}
          onChange={event => setHotkeysOnlyCurrentTab(event.target.checked)}
          label="Hotkeys only for current tab"
          size="md"
        />
        <Switch
          checked={disableAnalytics}
          onChange={event => setDisableAnalytics(event.target.checked)}
          label="Disable analytics"
          size="md"
        />
        <Switch
          checked={topmost}
          onChange={event => setTopmost(event.target.checked)}
          label="Topmost"
          size="md"
        />
        <Switch
          checked={autostart}
          onChange={event => setAutostart(event.target.checked)}
          label="Autostart"
          size="md"
        />
        <Switch
          checked={advancedMode}
          onChange={event => setAdvancedMode(event.target.checked)}
          label="Enable advanced mode"
          size="md"
        />
        <Select
          label="Language"
          placeholder="Pick one"
          data={languages}
          value={language}
          onChange={setLanguage}
        />
      </Group>
    </Card>
  );
}

export default TabOther;
