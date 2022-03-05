import {
  Button,
  ButtonProps,
  createStyles,
  PolymorphicComponentProps,
  SharedButtonProps,
} from '@mantine/core';
import { forwardRef, ReactElement, ReactNode } from 'react';

const useStyles = createStyles(() => ({
  label: {
    fontWeight: 500, // 600 is default
  },
}));

type CompactButtonComponent = (<C = 'button'>(
  props: PolymorphicComponentProps<C, SharedButtonProps & { children: ReactNode }>
) => ReactElement) & {
  displayName?: string;
};

const CompactButton: CompactButtonComponent = forwardRef((props: ButtonProps<'button'>, ref: any) => {
  const { classes } = useStyles();

  return (
    <Button compact variant="default" radius="md" ref={ref} classNames={classes} {...props}>
      {props.children}
    </Button>
  );
}) as any;

CompactButton.displayName = 'CompactButton';

export default CompactButton;
