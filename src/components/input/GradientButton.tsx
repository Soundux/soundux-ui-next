import { ButtonProps, PolymorphicComponentProps, SharedButtonProps } from '@mantine/core';
import { forwardRef, ReactElement, ReactNode } from 'react';
import CompactButton from './CompactButton';

type GradientButtonComponent = (<C = 'button'>(
  props: PolymorphicComponentProps<C, SharedButtonProps & { children: ReactNode }>
) => ReactElement) & {
  displayName?: string;
};

const GradientButton: GradientButtonComponent = forwardRef((props: ButtonProps<'button'>, ref: any) => {
  return (
    <CompactButton
      variant="gradient"
      ref={ref}
      gradient={{ from: 'accent', to: 'accent2', deg: 180 }}
      {...props}
    >
      {props.children}
    </CompactButton>
  );
}) as any;

GradientButton.displayName = 'GradientButton';

export default GradientButton;
