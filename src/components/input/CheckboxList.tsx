import {
  DefaultProps,
  Divider,
  groupOptions,
  ScrollArea,
  Text,
  TextInput,
  TransferListItem,
  UnstyledButton,
} from '@mantine/core';
import useStyles, { CheckboxListStylesNames } from './CheckboxList.styles';
import React, { CSSProperties, useRef, useState } from 'react';
import { useInputState, useScrollIntoView } from '@mantine/hooks';
import CheckboxListDefaultItem from './CheckboxListDefaultItem';

export type CheckboxListItem = TransferListItem;

export interface CheckboxListItemComponentProps {
  data: CheckboxListItem;
  selected: boolean;
}

export type CheckboxListItemComponent = React.FC<CheckboxListItemComponentProps>;

export interface CheckboxListProps extends DefaultProps<CheckboxListStylesNames> {
  data: CheckboxListItem[];
  selection: CheckboxListItem[];

  onChange(value: CheckboxListItem[]): void;

  itemComponent?: CheckboxListItemComponent;

  searchPlaceholder: string;
  nothingFound?: React.ReactNode;
  title?: React.ReactNode;
  height?: CSSProperties['height'];
  itemPadding?: number;
  limit?: number;
}

export function filter(query: string, item: CheckboxListItem) {
  return item.label.toLowerCase().trim().includes(query.toLowerCase().trim());
}

function CheckboxList({
  className,
  data,
  onChange,
  selection,
  itemComponent: ItemComponent = CheckboxListDefaultItem,
  searchPlaceholder,
  nothingFound,
  title,
  height = 150,
  classNames,
  styles,
  itemPadding = 7,
  limit,
  ...others
}: CheckboxListProps) {
  const { classes, cx } = useStyles(
    { ITEM_PADDING: itemPadding },
    { name: 'CheckboxList', classNames, styles }
  );
  const unGroupedItems: React.ReactElement[] = [];
  const groupedItems: React.ReactElement[] = [];

  const [query, setQuery] = useInputState('');
  const [hovered, setHovered] = useState(-1);
  const filteredData = data.filter(item => filter(query, item)).slice(0, limit);

  const itemsRefs = useRef<Record<string, HTMLButtonElement>>({});

  const onSelect = (val: CheckboxListItem) => {
    if (selection.map(x => x.value).includes(val.value)) {
      onChange(selection.filter(item => item.value !== val.value));
    } else {
      onChange([...selection, val]);
    }
  };

  const sortedData: CheckboxListItem[] = groupOptions({ data: filteredData });

  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
    duration: 0,
    offset: 5,
    cancelable: false,
    isList: true,
  });

  let groupName: string | null = null;

  sortedData.forEach((item, index) => {
    const itemComponent = (
      <UnstyledButton
        tabIndex={-1}
        onClick={() => onSelect(item)}
        key={item.value}
        onMouseEnter={() => setHovered(index)}
        className={cx(classes.checkboxListItem, {
          [classes.checkboxListItemHovered]: index === hovered,
        })}
        ref={(node: HTMLButtonElement) => {
          if (itemsRefs && itemsRefs.current) {
            itemsRefs.current[item.value] = node;
          }
        }}
      >
        <ItemComponent selected={selection.map(x => x.value).includes(item.value)} data={item} />
      </UnstyledButton>
    );

    if (!item.group) {
      unGroupedItems.push(itemComponent);
    } else {
      if (groupName !== item.group) {
        groupName = item.group;
        groupedItems.push(
          <div className={classes.separator} key={groupName}>
            <Divider classNames={{ label: classes.separatorLabel }} label={groupName} />
          </div>
        );
      }
      groupedItems.push(itemComponent);
    }
  });

  const handleSearchKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.code) {
      case 'Enter': {
        event.preventDefault();
        if (filteredData[hovered]) {
          onSelect(filteredData[hovered]);
        }
        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        setHovered(current => {
          const nextIndex = current < filteredData.length - 1 ? current + 1 : current;

          targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];

          scrollIntoView({
            alignment: 'end',
          });

          return nextIndex;
        });
        break;
      }

      case 'ArrowUp': {
        event.preventDefault();
        setHovered(current => {
          const nextIndex = current > 0 ? current - 1 : current;

          targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];

          scrollIntoView({
            alignment: 'start',
          });

          return nextIndex;
        });
      }
    }
  };

  return (
    <div className={cx(classes.checkboxList, className)} {...others}>
      <Text weight={500} className={classes.checkboxListTitle}>
        {title}
      </Text>
      <div className={classes.checkboxListBody}>
        <div className={classes.checkboxListHeader}>
          <TextInput
            value={query}
            onChange={event => {
              setQuery(event);
              setHovered(0);
            }}
            onFocus={() => setHovered(0)}
            onBlur={() => setHovered(-1)}
            placeholder={searchPlaceholder}
            radius={0}
            onKeyDown={handleSearchKeydown}
            sx={{ flex: 1 }}
            classNames={{ input: classes.checkboxListSearch }}
          />
        </div>

        <ScrollArea
          viewportRef={scrollableRef}
          onMouseLeave={() => setHovered(-1)}
          className={classes.checkboxListItems}
          style={{ width: '100%', height, position: 'relative', overflowX: 'hidden' }}
        >
          {groupedItems.length > 0 || unGroupedItems.length > 0 ? (
            <>
              {groupedItems}
              {unGroupedItems}
            </>
          ) : (
            <Text color="dimmed" size="sm" align="center" mt="sm">
              {nothingFound}
            </Text>
          )}
        </ScrollArea>
      </div>
    </div>
  );
}

export default CheckboxList;
