import { Divider, Navbar, ScrollArea } from '@mantine/core';
import NavbarButton from './button/NavbarButton';
import { ChevronRightIcon, HeartIcon } from '@primer/octicons-react';
import { useAtom } from 'jotai';
import { foldersAtom } from '../store';
import FolderButton from './button/FolderButton';

function AppNavbar() {
  const [folders] = useAtom(foldersAtom);

  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow mr={-10} sx={{ paddingRight: 10, paddingBottom: 10 }} component={ScrollArea}>
        {folders.map(folder => (
          <FolderButton key={folder.id} folder={folder} />
        ))}
      </Navbar.Section>

      <Divider sx={{ marginBottom: '10px' }} />

      <Navbar.Section>
        <NavbarButton
          icon={<HeartIcon />}
          color="red"
          label="Favorites"
          endIcon={<ChevronRightIcon />}
        />
      </Navbar.Section>
    </Navbar>
  );
}

export default AppNavbar;
