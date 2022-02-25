import { ActionIcon, createStyles, Group, Text } from '@mantine/core';
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
  let resolvedHome = useResolvedPath('/');
  let matchedHome = useMatch({ path: resolvedHome.pathname, end: true });
  let resolvedSettings = useResolvedPath('/settings');
  let matchedSettings = useMatch({ path: resolvedSettings.pathname, end: true });

  return (
    <Group
      style={{
        height: '100%',
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
      }}
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
              // variant="gradient"
              // gradient={{ from: 'skypung', to: 'skypung2', deg: 180 }}
            >
              Search
            </CompactButton>
            <CompactButton
              leftIcon={<PlusIcon />}
              sx={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(125, 123, 238, 0.5) 0%, rgba(89, 111, 252, 0.5) 100%)',
              }}
              // variant="gradient"
              // gradient={{ from: 'skypung', to: 'skypung2', deg: 180 }}
            >
              Add
            </CompactButton>
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
  );
}

export default AppHeader;
