import { Tabs, TabsProps } from '@mantine/core';

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

        tabsList: {
          flexWrap: 'nowrap',
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

export default StyledTabs;
