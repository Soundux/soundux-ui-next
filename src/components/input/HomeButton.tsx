import { ActionIcon, ActionIconProps, createStyles } from '@mantine/core';
import { HomeIcon } from '@primer/octicons-react';

const useStyles = createStyles(theme => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
  },
}));

function HomeButton(props: Partial<ActionIconProps<any>>) {
  const { classes } = useStyles();

  return (
    <ActionIcon variant="default" className={classes.icon} radius="xl" size="xl" {...props}>
      <HomeIcon />
    </ActionIcon>
  );
}

export default HomeButton;
