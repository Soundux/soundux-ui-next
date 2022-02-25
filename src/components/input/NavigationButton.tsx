import { ButtonProps } from '@mantine/core';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import CompactButton from './CompactButton';

function NavigationButton(props: ButtonProps<typeof Link>) {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

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
