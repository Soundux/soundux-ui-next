import { forwardRef } from 'react';
import { Button, ButtonProps, createPolymorphicComponent, createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  label: {
    fontWeight: 500, // 600 is default
  },
}));

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  const { classes } = useStyles();

  return (
    <Button compact variant="default" radius="md" ref={ref} classNames={classes} {...props}>
      {children}
    </Button>
  );
});

_Button.displayName = 'CompactButton';

const CompactButton = createPolymorphicComponent<'button', ButtonProps>(_Button);

export default CompactButton;
