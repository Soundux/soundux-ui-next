import { ButtonProps } from '@mantine/core';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import CompactButton from './CompactButton';

function NavigationButton(props: Omit<ButtonProps<typeof Link>, 'component'>) {
  const resolved = useResolvedPath(props.to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <CompactButton
      component={Link}
      variant={match ? 'gradient' : 'default'}
      gradient={{ from: 'accent', to: 'accent2', deg: 180 }}
      {...props}
    >
      {props.children}
    </CompactButton>
  );
}

export default NavigationButton;
