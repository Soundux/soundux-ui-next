import React, { forwardRef } from 'react';
import {
  createPolymorphicComponent,
  createStyles,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core';

interface MainLinkProps extends UnstyledButtonProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  selected?: boolean;
  endIcon?: React.ReactNode;
}

const useStyles = createStyles(theme => ({
  button: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    '&:hover.selected': {
      background: 'linear-gradient(180deg, rgba(126, 124, 237, 0.5) 0%, rgba(85, 110, 254, 0.5) 100%)',
    },

    '&.selected': {
      background: 'linear-gradient(180deg, rgba(126, 124, 237, 0.3) 0%, rgba(85, 110, 254, 0.3) 100%)',
    },
  },
}));

const _Button = forwardRef<HTMLButtonElement, MainLinkProps>(
  ({ icon, color, label, selected, endIcon, ...props }, ref) => {
    const { classes } = useStyles();

    return (
      <UnstyledButton className={`${classes.button} ${selected ? 'selected' : ''}`} ref={ref} {...props}>
        <Group position="apart" align="center">
          <Group>
            <ThemeIcon color={color} variant="light">
              {icon}
            </ThemeIcon>

            <Text size="sm">{label}</Text>
          </Group>
          <Group>{endIcon}</Group>
        </Group>
      </UnstyledButton>
    );
  }
);

_Button.displayName = 'FolderButton';

const FolderButton = createPolymorphicComponent<'button', MainLinkProps>(_Button);

export default FolderButton;
