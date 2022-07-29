import { ButtonProps, createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';
import CompactButton from './CompactButton';

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref: any) => {
  return (
    <CompactButton
      variant="gradient"
      ref={ref}
      gradient={{ from: 'accent', to: 'accent2', deg: 180 }}
      {...props}
    >
      {children}
    </CompactButton>
  );
});

_Button.displayName = 'GradientButton';

const GradientButton = createPolymorphicComponent<'button', ButtonProps>(_Button);

export default GradientButton;
