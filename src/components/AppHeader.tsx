import { ActionIcon, createStyles, Group, Header, Text } from '@mantine/core';
import {
  ChevronRightIcon,
  CommentIcon,
  GearIcon,
  GitPullRequestIcon,
  PlusIcon,
  SearchIcon,
  WebhookIcon,
  HomeIcon,
  InfoIcon,
  PencilIcon,
} from '@primer/octicons-react';
import NavigationButton from './input/NavigationButton';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import CompactButton from './input/CompactButton';
import OutputSelection from './input/OutputSelection';

const useStyles = createStyles(theme => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : '#fff',
    '&.active': {
      border: 0,
      background: 'linear-gradient(180deg, #7E7BED 0%, #536DFE 100%)',
      color: '#fff',
    },
  },
}));

function AppHeader() {
  const { classes } = useStyles();
  const resolvedHome = useResolvedPath('/');
  const matchedHome = useMatch({ path: resolvedHome.pathname, end: true });
  const resolvedSettings = useResolvedPath('/settings');
  const matchedSettings = useMatch({ path: resolvedSettings.pathname, end: true });

  return (
    <Header height={60}>
      <Group
        style={{
          height: '100%',
          marginTop: 0,
          marginBottom: 0,
        }}
        px="lg"
        position="apart"
        align="center"
        noWrap
      >
        <Group>
          <Link to="/">
            <ActionIcon
              variant="default"
              className={`${classes.icon} ${matchedHome ? 'active' : ''}`}
              radius="xl"
              size="xl"
            >
              <HomeIcon />
            </ActionIcon>
          </Link>
          <ChevronRightIcon />
          <NavigationButton to="/settings" leftIcon={<GearIcon />}>
            Settings
          </NavigationButton>
          <NavigationButton to="/virtualDevices" leftIcon={<GitPullRequestIcon />}>
            Virtual Devices
          </NavigationButton>
          <NavigationButton to="/passThrough" leftIcon={<WebhookIcon />}>
            Pass-through
          </NavigationButton>
          <NavigationButton to="/soundEditor" leftIcon={<PencilIcon />}>
            Sound Editor
          </NavigationButton>
          <NavigationButton to="/about" leftIcon={<CommentIcon />}>
            About
          </NavigationButton>
        </Group>
        <Group>
          {matchedHome && (
            <>
              <CompactButton
                leftIcon={<SearchIcon />}
                sx={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(125, 123, 238, 0.5) 0%, rgba(89, 111, 252, 0.5) 100%)',
                }}
              >
                Search
              </CompactButton>
              <CompactButton
                leftIcon={<PlusIcon />}
                sx={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(125, 123, 238, 0.5) 0%, rgba(89, 111, 252, 0.5) 100%)',
                }}
              >
                Add
              </CompactButton>
              <OutputSelection />
            </>
          )}
          {matchedSettings && (
            <Group spacing="xs">
              <InfoIcon />
              <Text color="gray">Settings changes are saved automatically</Text>
            </Group>
          )}
        </Group>
      </Group>
    </Header>
  );
}

export default AppHeader;
