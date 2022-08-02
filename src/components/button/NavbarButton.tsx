import React, { forwardRef } from 'react';
import {
  createPolymorphicComponent,
  createStyles,
  Group,
  MantineTheme,
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
  dragging?: boolean;
}

const hoverColor = (theme: MantineTheme) =>
  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0];

const selectedColor =
  'linear-gradient(180deg, rgba(126, 124, 237, 0.5) 0%, rgba(85, 110, 254, 0.5) 100%)';

const hoverSelectedColor =
  'linear-gradient(180deg, rgba(126, 124, 237, 0.3) 0%, rgba(85, 110, 254, 0.3) 100%)';

const useStyles = createStyles(theme => ({
  button: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: hoverColor(theme),
    },

    '&:hover.selected': {
      background: selectedColor,
    },

    '&.selected': {
      background: hoverSelectedColor,
    },

    '&.dragging': {
      backgroundColor: 'transparent',
    },

    '&.dragging.selected': {
      background: hoverSelectedColor,
    },

    '&[aria-pressed]': {
      backgroundColor: hoverColor(theme),
    },

    '&[aria-pressed].selected': {
      background: selectedColor,
    },
  },
}));

const _Button = forwardRef<HTMLButtonElement, MainLinkProps>(
  ({ icon, color, label, selected, dragging, endIcon, ...props }, ref) => {
    const { classes } = useStyles();

    return (
      <UnstyledButton
        className={`${classes.button} ${selected ? 'selected' : ''} ${dragging ? 'dragging' : ''}`}
        ref={ref}
        {...props}
      >
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

_Button.displayName = 'NavbarButton';

const NavbarButton = createPolymorphicComponent<'button', MainLinkProps>(_Button);

export default NavbarButton;
