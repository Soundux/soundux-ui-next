import { Divider, Navbar, ScrollArea } from '@mantine/core';
import FolderButton from './input/FolderButton';
import { ChevronRightIcon, FileDirectoryIcon, HeartIcon, SyncIcon, XIcon } from '@primer/octicons-react';

interface Folder {
  name: string;
  color: string;
  selected?: boolean;
}

const folders: Folder[] = [
  {
    name: 'Sounds 1',
    color: 'blue',
  },
  {
    name: 'Sounds 2',
    color: 'yellow',
  },
  {
    name: 'Sounds 3',
    color: 'green',
    selected: true,
  },
];

// for (let i = 0; i < 999; i++) {
//   folders.push({
//     name: `Sounds ${i}`,
//     color: 'red',
//   });
// }

function AppNavbar() {
  return (
    <>
      <Navbar.Section grow mr={-10} sx={{ paddingRight: 10, paddingBottom: 10 }} component={ScrollArea}>
        {folders.map((folder, index) => (
          <FolderButton
            key={index}
            icon={<FileDirectoryIcon />}
            color={folder.color}
            label={folder.name}
            selected={folder?.selected}
            endIcon={
              <>
                <SyncIcon />
                <XIcon />
              </>
            }
          />
        ))}
      </Navbar.Section>

      <Divider sx={{ marginBottom: '10px' }} />

      <Navbar.Section>
        <FolderButton
          icon={<HeartIcon />}
          color="red"
          label="Favorites"
          endIcon={<ChevronRightIcon />}
        />
      </Navbar.Section>
    </>
  );
}

export default AppNavbar;
