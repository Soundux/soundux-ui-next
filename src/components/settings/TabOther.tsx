import { Card, Divider, Group, Select, SelectItem, Switch, Text } from '@mantine/core';
import {
  advancedModeSetting,
  ignoreWarningsSetting,
  deleteToTrashSetting,
  disableAnalyticsSetting,
  hotkeysOnlyCurrentTabSetting,
  SupportedLanguage,
  languageSetting,
  minimizeToTraySetting,
  topmostSetting,
} from '../../store/settings';
import { useAtom } from 'jotai';

const languages: SelectItem[] = [
  { value: 'auto', label: 'Auto-detect (English)' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
];

function TabOther() {
  const [deleteToTrash, setDeleteToTrash] = useAtom(deleteToTrashSetting);
  const [minimizeToTray, setMinimizeToTray] = useAtom(minimizeToTraySetting);
  const [hotkeysOnlyCurrentTab, setHotkeysOnlyCurrentTab] = useAtom(hotkeysOnlyCurrentTabSetting);
  const [disableAnalytics, setDisableAnalytics] = useAtom(disableAnalyticsSetting);
  const [topmost, setTopmost] = useAtom(topmostSetting);
  const [ignoreWarnings, setIgnoreWarnings] = useAtom(ignoreWarningsSetting);
  const [advancedMode, setAdvancedMode] = useAtom(advancedModeSetting);
  const [language, setLanguage] = useAtom(languageSetting);

  return (
    <Card p="xl" radius="lg">
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
          checked={ignoreWarnings}
          onChange={event => setIgnoreWarnings(event.target.checked)}
          label="Ignore warnings"
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
          onChange={(x: SupportedLanguage) => setLanguage(x)}
        />
      </Group>
    </Card>
  );
}

export default TabOther;
