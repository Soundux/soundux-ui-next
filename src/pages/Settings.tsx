import { Group, Tabs, TabsProps } from '@mantine/core';
import TabAudioBackend from '../components/settings/TabAudioBackend';
import TabAppearance from '../components/settings/TabAppearance';
import TabOther from '../components/settings/TabOther';
import TabVBCable from '../components/settings/TabVBCable';
import TabSounds from '../components/settings/TabSounds';
import { EyeIcon, ListUnorderedIcon, MegaphoneIcon, PlugIcon, UnmuteIcon } from '@primer/octicons-react';
import { useState } from 'react';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      variant="unstyled"
      styles={theme => ({
        tabControl: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
          }`,
          fontSize: theme.fontSizes.md,
          padding: `${theme.spacing.xl}px`,
          marginTop: `${theme.spacing.md}px`,

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },
        },

        tabActive: {
          backgroundColor: theme.colors.accent2[7],
          borderColor: theme.colors.accent2[7],
          color: theme.white,
        },

        root: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        },

        body: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      })}
      {...props}
    >
      {props.children}
    </Tabs>
  );
}

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
