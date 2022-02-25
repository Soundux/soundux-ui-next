import { ButtonProps } from '@mantine/core';
import CompactButton from './CompactButton';

function GradientButton(props: ButtonProps<any>) {
  return (
    <CompactButton variant="gradient" gradient={{ from: 'accent', to: 'accent2', deg: 180 }} {...props}>
      {props.children}
    </CompactButton>
  );
}

export default GradientButton;
