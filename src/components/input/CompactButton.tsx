import { Button, ButtonProps, createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  label: {
    fontWeight: 500, // 600 is default
  },
}));

// TODO: can we use something other than any?
function CompactButton(props: ButtonProps<any>) {
  const { classes } = useStyles();

  return (
    <Button compact variant="default" radius="md" classNames={classes} {...props}>
      {props.children}
    </Button>
  );
}

export default CompactButton;
