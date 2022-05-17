import { Checkbox } from '@mantine/core';
import { CheckboxListItemComponentProps } from './CheckboxList';

function CheckboxListDefaultItem({ data, selected }: CheckboxListItemComponentProps) {
  return (
    <Checkbox
      checked={selected}
      onChange={() => {}}
      label={data.label}
      tabIndex={-1}
      sx={{ pointerEvents: 'none' }}
    />
  );
}

export default CheckboxListDefaultItem;
