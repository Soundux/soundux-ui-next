import { ClassNames, createStyles } from '@mantine/styles';

interface CheckboxListStyles {
  ITEM_PADDING: number;
}

const styles = createStyles((theme, { ITEM_PADDING }: CheckboxListStyles) => ({
  checkboxList: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  checkboxListItem: {
    display: 'block',
    width: `calc(100% - ${ITEM_PADDING * 2}px)`,
    padding: ITEM_PADDING,
    marginLeft: theme.spacing.sm - ITEM_PADDING,
    marginRight: theme.spacing.sm - ITEM_PADDING,
    borderRadius: theme.radius.sm,

    '&:first-of-type': {
      marginTop: theme.spacing.sm - ITEM_PADDING,
    },

    '&:last-of-type': {
      marginBottom: theme.spacing.sm - ITEM_PADDING,
    },
  },

  checkboxListItemHovered: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  checkboxListItems: {
    overflow: 'hidden',
    flexGrow: 1,
  },

  checkboxListHeader: {
    display: 'flex',
    flexDirection: 'row',
  },

  checkboxListBody: {
    flex: 1,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]}`,
    display: 'flex',
    flexDirection: 'column',
  },

  checkboxListTitle: {
    marginBottom: 5,
  },

  checkboxListSearch: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopLeftRadius: theme.radius.sm - 1,
    borderTopRightRadius: theme.radius.sm - 1,
    display: 'block',
    borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
  },
}));

export declare type CheckboxListStylesNames = ClassNames<typeof styles>;

export default styles;
