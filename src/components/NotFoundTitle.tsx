import { createStyles, Title, Text, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';
import GradientButton from './button/GradientButton';
import { ArrowLeftIcon } from '@primer/octicons-react';

const useStyles = createStyles(theme => ({
  label: {
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
  },

  title: {
    fontFamily: theme.fontFamily,
    fontWeight: 900,
  },

  description: {
    maxWidth: 500,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

function NotFoundTitle() {
  const { classes } = useStyles();

  return (
    <Stack
      align="center"
      style={{
        textAlign: 'center',
      }}
    >
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been
        moved to another URL.
      </Text>
      <GradientButton size="md" leftIcon={<ArrowLeftIcon />} component={Link} to="/">
        Back to home page
      </GradientButton>
    </Stack>
  );
}

export default NotFoundTitle;
