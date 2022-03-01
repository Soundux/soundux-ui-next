import { Group, Tabs } from '@mantine/core';
import StyledTabs from './StyledTabs';
import TabAudioBackend from '../../components/settings/TabAudioBackend';
import TabAppearance from '../../components/settings/TabAppearance';
import TabOther from '../../components/settings/TabOther';
import TabVBCable from '../../components/settings/TabVBCable';
import TabSounds from '../../components/settings/TabSounds';
import { EyeIcon, ListUnorderedIcon, MegaphoneIcon, PlugIcon, UnmuteIcon } from '@primer/octicons-react';
import { useState } from 'react';

const isWindows = true;

function Settings() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Group
      position="center"
      sx={{
        height: 'calc(100vh - 92px)',
      }}
    >
      <StyledTabs active={activeTab} onTabChange={setActiveTab}>
        <Tabs.Tab label="Audio Backend" icon={<MegaphoneIcon />}>
          <TabAudioBackend />
        </Tabs.Tab>

        <Tabs.Tab label="Sounds" icon={<UnmuteIcon verticalAlign="middle" />}>
          <TabSounds />
        </Tabs.Tab>
        <Tabs.Tab label="Appearance" icon={<EyeIcon verticalAlign="middle" />}>
          <TabAppearance />
        </Tabs.Tab>
        <Tabs.Tab label="Other" icon={<ListUnorderedIcon verticalAlign="middle" />}>
          <TabOther />
        </Tabs.Tab>
        {isWindows && (
          <Tabs.Tab label="VB-Cable" icon={<PlugIcon verticalAlign="middle" />}>
            <TabVBCable />
          </Tabs.Tab>
        )}
      </StyledTabs>
    </Group>
  );
}

export default Settings;
