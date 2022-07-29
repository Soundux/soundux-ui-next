import { ButtonProps, createPolymorphicComponent } from '@mantine/core';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import CompactButton from './CompactButton';
import { forwardRef } from 'react';

const _Button = forwardRef<HTMLAnchorElement, ButtonProps & LinkProps>(({ children, ...props }, ref) => {
  const resolved = useResolvedPath(props.to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <CompactButton
      component={Link}
      variant={match ? 'gradient' : 'default'}
      gradient={{ from: 'accent', to: 'accent2', deg: 180 }}
      ref={ref}
      {...props}
    >
      {children}
    </CompactButton>
  );
});

_Button.displayName = 'NavigationButton';

const NavigationButton = createPolymorphicComponent<'a', ButtonProps & LinkProps>(_Button);

export default NavigationButton;
