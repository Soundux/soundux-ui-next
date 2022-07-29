import { Group, Tabs } from '@mantine/core';
import StyledTabs from './StyledTabs';
import TabAudioBackend from '../../components/settings/TabAudioBackend';
import TabAppearance from '../../components/settings/TabAppearance';
import TabOther from '../../components/settings/TabOther';
import TabVBCable from '../../components/settings/TabVBCable';
import TabSounds from '../../components/settings/TabSounds';
import { EyeIcon, ListUnorderedIcon, MegaphoneIcon, PlugIcon, UnmuteIcon } from '@primer/octicons-react';

const isWindows = true;

function Settings() {
  return (
    <Group position="center">
      <StyledTabs
        defaultValue="audioBackend"
        sx={{ width: isWindows ? '742.625px' : '600.8125px' }}
        mt="md"
      >
        <Tabs.List>
          <Tabs.Tab value="audioBackend" icon={<MegaphoneIcon verticalAlign="middle" />}>
            Audio Backend
          </Tabs.Tab>
          <Tabs.Tab value="sounds" icon={<UnmuteIcon verticalAlign="middle" />}>
            Sounds
          </Tabs.Tab>
          <Tabs.Tab value="appearance" icon={<EyeIcon verticalAlign="middle" />}>
            Appearance
          </Tabs.Tab>
          <Tabs.Tab value="other" icon={<ListUnorderedIcon verticalAlign="middle" />}>
            Other
          </Tabs.Tab>

          {isWindows && (
            <Tabs.Tab value="vbCable" icon={<PlugIcon verticalAlign="middle" />}>
              VB-Cable
            </Tabs.Tab>
          )}
        </Tabs.List>

        <Tabs.Panel value="audioBackend" pt="xs">
          <TabAudioBackend />
        </Tabs.Panel>

        <Tabs.Panel value="sounds" pt="xs">
          <TabSounds />
        </Tabs.Panel>

        <Tabs.Panel value="appearance" pt="xs">
          <TabAppearance />
        </Tabs.Panel>

        <Tabs.Panel value="other" pt="xs">
          <TabOther />
        </Tabs.Panel>

        <Tabs.Panel value="vbCable" pt="xs">
          <TabVBCable />
        </Tabs.Panel>
      </StyledTabs>
    </Group>
  );
}

export default Settings;
